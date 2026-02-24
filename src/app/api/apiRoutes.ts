import { convertToQueryString } from "../helper";
import { FiltersProps } from "../types/api";
export const apiRoutes = {
  Auth: {
    login: {
      route: "/api/v1/auth/login",
      method: "POST",
    },
    signup: {
      route: "/api/v1/auth/signup",
      method: "POST",
    },
    logout: {
      route: "/api/v1/auth/logout",
      method: "POST",
    },
  },
  Users: {
    getProfile: {
      route: "/api/v1/users/profile",
      method: "GET",
    },
    updateProfile: {
      route: "/api/v1/users/profile",
      method: "PUT",
    },
    deleteProfile: {
      route: "/api/v1/users/profile",
      method: "DELETE",
    },
    uploadImage: {
      route: `/api/v1/users/profile/upload-image`,
      method: "PUT",
    },

    deleteImage: {
      route: `/api/v1/users/profile/delete-image`,
      method: "DELETE",
    },
    changePassword: {
      route: "/api/v1/users/profile/change-password",
      method: "PUT",
    },
    getAllUsers: {
      route: (filters: FiltersProps) =>
        `/api/v1/users?${convertToQueryString(filters)}`,
      method: "GET",
    },
    getUserById: {
      route: (id: string) => `/api/v1/users/${id}`,
      method: "GET",
    },
    toggleRole: {
      route: (id: string) => `/api/v1/users/${id}/role`,
      method: "PUT",
    },
  },
  Quiz: {
    getAllQuizzes: {
      route: "/api/v1/quiz",
      method: "GET",
    },
    getQuizById: {
      route: (id: string) => `/api/v1/quiz/${id}`,
      method: "GET",
    },
    updateQuizById: {
      route: (id: string) => `/api/v1/quiz/${id}`,
      method: "PUT",
    },
    deleteQuizById: {
      route: (id: string) => `/api/v1/quiz/${id}`,
      method: "DELETE",
    },
    createQuiz: {
      route: `/api/v1/quiz`,
      method: "POST",
    },
  },
  Question: {
    getQuestionFromQuiz: {
      route: (quizId: string, questionId: string) =>
        `/api/v1/quiz/${quizId}/questions/${questionId}`,
      method: "GET",
    },
    updateQuestionFromQuiz: {
      route: (quizId: string, questionId: string) =>
        `/api/v1/quiz/${quizId}/questions/${questionId}`,
      method: "PUT",
    },
    deleteQuestionFromQuiz: {
      route: (quizId: string, questionId: string) =>
        `/api/v1/quiz/${quizId}/questions/${questionId}`,
      method: "DELETE",
    },
    createQuestionFromQuiz: {
      route: (quizId: string) => `/api/v1/quiz/${quizId}/questions`,
      method: "POST",
    },
    submitQuizAnswers: {
      route: (quizId: string) => `/api/v1/quiz/${quizId}/submit`,
      method: "POST",
    },
    restartQuizAnswers: {
      route: (quizId: string) => `/api/v1/quiz/${quizId}/restart`,
      method: "GET",
    },
  },
  Roadmap: {
    getAllRoadmaps: {
      route: `/api/v1/roadmap`,
      method: "GET",
    },
    getRoadmapById: {
      route: (id: string) => `/api/v1/roadmap/${id}`,
      method: "GET",
    },
    updateRoadmapById: {
      route: (id: string) => `/api/v1/roadmap/${id}`,
      method: "PUT",
    },
    deleteRoadmapById: {
      route: (id: string) => `/api/v1/roadmap/${id}`,
      method: "DELETE",
    },
    createRoadmap: {
      route: `/api/v1/roadmap`,
      method: "POST",
    },
    getProgress: {
      route: (id: string) => `/api/v1/roadmap/${id}/progress`,
      method: "GET",
    },
  },
  Section: {
    getAllRoadmapSections: {
      route: (id: string) => `/api/v1/roadmap/${id}/sections`,
      method: "GET",
    },
    createSectionToRoadmap: {
      route: (id: string) => `/api/v1/roadmap/${id}/sections`,
      method: "POST",
    },
    getSectionToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}`,
      method: "GET",
    },
    updateSectionToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}`,
      method: "PUT",
    },
    deleteSectionToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}`,
      method: "DELETE",
    },
    toggleCompletionSection: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/complete`,
      method: "POST",
    },
  },
  Resource: {
    getAllResourcesToSection: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources`,
      method: "GET",
    },
    createResourceToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources`,
      method: "POST",
    },
    getResourceByIdToRoadmap: {
      route: (roadmapId: string, sectionId: string, resourceId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources/${resourceId}`,
      method: "GET",
    },
    updateResourceByIdToRoadmap: {
      route: (roadmapId: string, sectionId: string, resourceId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources/${resourceId}`,
      method: "PUT",
    },
    deleteResourceByIdToRoadmap: {
      route: (roadmapId: string, sectionId: string, resourceId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources/${resourceId}`,
      method: "DELETE",
    },
  },
  Project: {
    getAllProjects: {
      route: (filters:FiltersProps)=>`/api/v1/project?${convertToQueryString(filters)}`,
      method: "GET",
    },
    createProject: {
      route: `/api/v1/project`,
      method: "POST",
    },
    getProjectById: {
      route: (projectId: string) => `/api/v1/project/${projectId}`,
      method: "GET",
    },
    updateProjectById: {
      route: (projectId: string) => `/api/v1/project/${projectId}`,
      method: "PUT",
    },
    deleteProjectById: {
      route: (projectId: string) => `/api/v1/project/${projectId}`,
      method: "DELETE",
    },
  },
  Steps: {
    getAllSteps: {
      route: (projectId: string) => `/api/v1/project/${projectId}/steps`,
      method: "GET",
    },
    createStep: {
      route: (projectId: string) => `/api/v1/project/${projectId}/steps`,
      method: "POST",
    },
    updateStep: {
      route: (projectId: string, stepId: string) =>
        `/api/v1/project/${projectId}/steps/${stepId}`,
      method: "PUT",
    },
    toggleStep: {
      route: (projectId: string, stepId: string) =>
        `/api/v1/project/${projectId}/steps/${stepId}`,
      method: "PATCH",
    },
    deleteStep: {
      route: (projectId: string, stepId: string) =>
        `/api/v1/project/${projectId}/steps/${stepId}`,
      method: "DELETE",
    },
  },
};
