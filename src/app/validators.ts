export const validateSignUpCredentials = (
  username: string,
  email: string,
  password: string,
) => {
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!username) return "Username is required";
  if (!email) return "Email is required";
  if (!password) return "Password is required";

  username = username.trim();
  email = email.trim().toLowerCase();
  password = password.trim();

  if (username.length < 3 || username.length > 50) {
    return "Username must be between 3 and 50 characters long";
  }

  if (!usernameRegex.test(username)) {
    return "Username can only contain letters, numbers, and underscores";
  }

  if (!emailRegex.test(email)) {
    return "Please provide a valid email address.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  if (password.length > 64) {
    return "Password too long. Max 64 characters allowed.";
  }

  if (!strongPasswordRegex.test(password)) {
    return "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  return "";
};

export const validateSignInCredentials = (email: string, password: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!email) return "Email is required";
  if (!password) return "Password is required";

  email = email.trim().toLowerCase();
  password = password.trim();

  if (!emailRegex.test(email)) {
    return "Please provide a valid email address.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  if (password.length > 64) {
    return "Password too long. Max 64 characters allowed.";
  }

  if (!strongPasswordRegex.test(password)) {
    return "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }

  return "";
};
export const validateUpdateUserData = (
  username: string,
  email: string,
  bio: string,
) => {
  const usernameRegex = /^[a-zA-Z0-9_]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!username) {
    return "Username is required";
  }

  if (username.length < 3 || username.length > 50) {
    return "Username must be between 3 and 50 characters long.";
  }

  if (!usernameRegex.test(username)) {
    return "Username can only contain letters, numbers, and underscores.";
  }

  if (!email) {
    return "Email is required";
  }

  if (!emailRegex.test(email)) {
    return "Please provide a valid email address.";
  }

  if (!bio) {
    return "Bio is required";
  }

  if (bio.split(" ").length > 100) {
    return "Please the maximum is 100 word";
  }
  return "";
};

export const validateChangePassword = (
  password: string,
  confirmPassword: string,
  currentPassword: string,
) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!currentPassword || !password || !confirmPassword)
    return "current password is required";

  if (!password) return "new password is required";

  if (!confirmPassword) return "confirm password is required";

  if (password.length < 6) {
    return "Password must be at least 6 characters long.";
  }
  if (password.length > 64) {
    return "Password too long. Max 64 characters allowed.";
  }
  if (password !== confirmPassword) {
    return "Password and Confirm Password must be same.";
  }

  if (!strongPasswordRegex.test(password)) {
    return "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  return "";
};
