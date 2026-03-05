import { difficultySectionProps } from "./types/roadmap";

export const validateSignUpCredentials = (
  username: string,
  email: string,
  password: string,
) => {
  const usernameRegex = /^(?!_)(?!.*__)[a-zA-Z0-9_]{3,50}(?<!_)$/;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,64}$/;

  const trimmedUsername = username?.trim();
  const trimmedEmail = email?.trim().toLowerCase();
  const trimmedPassword = password?.trim();

  if (!trimmedUsername) return "Username is required";
  if (!trimmedEmail) return "Email is required";
  if (!trimmedPassword) return "Password is required";

  if (!usernameRegex.test(trimmedUsername))
    return "Username must be 3–50 characters, letters/numbers/underscore only, no double underscores.";

  if (!emailRegex.test(trimmedEmail))
    return "Please provide a valid email address.";

  if (!strongPasswordRegex.test(trimmedPassword))
    return "Password must include uppercase, lowercase, number and special character.";

  return "";
};

export const validateSignInCredentials = (email: string, password: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const trimmedEmail = email?.trim().toLowerCase();
  const trimmedPassword = password?.trim();

  if (!trimmedEmail) return "Email is required";
  if (!trimmedPassword) return "Password is required";

  if (!emailRegex.test(trimmedEmail))
    return "Please provide a valid email address.";

  if (trimmedPassword.length < 6 || trimmedPassword.length > 64)
    return "Invalid credentials.";

  return "";
};

export const validateUpdateUserData = (
  username: string,
  email: string,
  bio: string,
) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,50}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const trimmedUsername = username?.trim();
  const trimmedEmail = email?.trim().toLowerCase();
  const trimmedBio = bio?.trim();

  if (trimmedUsername && !usernameRegex.test(trimmedUsername))
    return "Invalid username format.";

  if (trimmedEmail && !emailRegex.test(trimmedEmail))
    return "Invalid email format.";

  if (trimmedBio) {
    const wordCount = trimmedBio.split(/\s+/).length;
    if (wordCount > 100) return "Bio cannot exceed 100 words.";
  }

  if (!trimmedUsername && !trimmedEmail && !trimmedBio)
    return "You must update at least one field.";

  return "";
};

export const validateChangePassword = (
  password: string,
  confirmPassword: string,
  currentPassword: string,
) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,64}$/;

  const trimmedCurrent = currentPassword?.trim();
  const trimmedPassword = password?.trim();
  const trimmedConfirm = confirmPassword?.trim();

  if (!trimmedCurrent) return "Current password is required.";
  if (!trimmedPassword) return "New password is required.";
  if (!trimmedConfirm) return "Confirm password is required.";

  if (trimmedPassword !== trimmedConfirm) return "Passwords do not match.";

  if (!strongPasswordRegex.test(trimmedPassword))
    return "Password must include uppercase, lowercase, number and special character.";

  if (trimmedPassword === trimmedCurrent)
    return "New password must be different from current password.";

  return "";
};

export const validateQuizCreation = (
  title: string,
  description: string,
  rank: difficultySectionProps,
) => {
  const allRanks = ["Beginner", "Intermediate", "Advanced", "Expert", "Master"];

  if (!title) return "Title and description are required.";
  if (!description) return "Description is required";

  if (!rank) return "Ranks is required.";

  if (!allRanks.includes(rank))
    return `Rank must be one of following: ${allRanks.join(", ")}`;

  const wordCount = description.trim().split(/\s+/).length;
  if (wordCount < 5 || wordCount > 50)
    return "Description must be between 5 and 50 words.";

  return "";
};

export const validateQuizEdit = (
  title: string,
  description: string,
  rank: difficultySectionProps,
) => {
  const allRanks = ["Beginner", "Intermediate", "Advanced", "Expert", "Master"];

  const trimmedTitle = title?.trim();
  const trimmedDescription = description?.trim();

  if (!trimmedTitle && !trimmedDescription && !rank) {
    return "You must update at least one field.";
  }

  if (trimmedTitle) {
    if (trimmedTitle.length < 3) return "Title must be at least 3 characters.";

    if (trimmedTitle.length > 100)
      return "Title must not exceed 100 characters.";

    if (!/^[a-zA-Z0-9\s\-_,.?!()]+$/.test(trimmedTitle))
      return "Title contains invalid characters.";
  }

  if (trimmedDescription) {
    const wordCount = trimmedDescription.split(/\s+/).length;

    if (wordCount < 5 || wordCount > 50)
      return "Description must be between 5 and 50 words.";

    if (trimmedDescription.length > 500)
      return "Description must not exceed 500 characters.";
  }

  if (rank && !allRanks.includes(rank)) {
    return `Rank must be one of: ${allRanks.join(", ")}`;
  }

  return "";
};

export const validateEditQuestion = (
  question: string,
  answer: string,
  options: string[],
) => {
  if (question) {
    if (typeof question !== "string" || question.trim().length < 5)
      return "Question must be a valid text with at least 5 characters.";
  }

  if (answer) {
    if (typeof answer !== "string" || !answer.trim())
      return "Answer is required and must be a valid string.";
  }
  if (options) {
    if (!options || !Array.isArray(options)) return "Options must be an array.";

    if (options.length !== 4)
      return "Each question must have 4 options with the answer";

    const uniqueOptions = new Set(options.map((o) => o.trim().toLowerCase()));
    if (uniqueOptions.size !== options.length) return "Options must be unique.";
  }

  return "";
};
export const validateQuestionCreation = (
  question: string,
  answer: string,
  options: string[],
) => {
  if (!question) {
    return "Question is required";
  }
  if (!answer) {
    return `Answer is required`;
  }
  if (!options) {
    return `Options are required`;
  }

  if (typeof question !== "string" || question.trim().length < 5)
    return "Question must be a valid text with at least 5 characters.";

  if (typeof answer !== "string" || !answer.trim())
    return "Answer is required and must be a valid string.";

  if (!Array.isArray(options)) return "Options must be an array.";

  if (options.length !== 4)
    return "Each question must have 4 options with the answer";

  const uniqueOptions = new Set(options.map((o) => o.trim().toLowerCase()));
  if (uniqueOptions.size !== options.length) return "Options must be unique.";

  return "";
};
