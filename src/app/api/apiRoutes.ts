import { convertToQueryString } from "../helper";
import { FiltersProps, QuestionsFilterProps } from "../types/api";
export const apiRoutes = {
  Auth: {
    login: {
      route: "/api/v1/auth/login",
    },
    signup: {
      route: "/api/v1/auth/signup",
    },
    logout: {
      route: "/api/v1/auth/logout",
    },
  },
  Users: {
    getProfile: {
      route: "/api/v1/users/profile",
    },
    updateProfile: {
      route: "/api/v1/users/profile",
    },
    deleteProfile: {
      route: "/api/v1/users/profile",
    },
    uploadImage: {
      route: `/api/v1/users/profile/upload-image`,
    },

    deleteImage: {
      route: `/api/v1/users/profile/delete-image`,
    },
    changePassword: {
      route: "/api/v1/users/profile/change-password",
    },
    getAllUsers: {
      route: (filters: FiltersProps) =>
        `/api/v1/users?${convertToQueryString(filters)}`,
    },
    getUserById: {
      route: (id: string) => `/api/v1/users/${id}`,
    },
    deleteUserById: {
      route: (id: string) => `/api/v1/users/${id}`,
    },
    updateUserById: {
      route: (id: string) => `/api/v1/users/${id}`,
    },
    toggleRole: {
      route: (id: string) => `/api/v1/users/${id}/role`,
    },
  },
  Quiz: {
    getAllQuizzes: {
      route: "/api/v1/quiz",
    },
    getQuizById: {
      route: (id: string) => `/api/v1/quiz/${id}`,
    },
    updateQuizById: {
      route: (id: string) => `/api/v1/quiz/${id}`,
    },
    deleteQuizById: {
      route: (id: string) => `/api/v1/quiz/${id}`,
    },
    createQuiz: {
      route: `/api/v1/quiz`,
    },
  },
  Question: {
    getQuestionFromQuiz: {
      route: (quizId: string, questionId: string) =>
        `/api/v1/quiz/${quizId}/questions/${questionId}`,
    },
    updateQuestionFromQuiz: {
      route: (quizId: string, questionId: string) =>
        `/api/v1/quiz/${quizId}/questions/${questionId}`,
    },
    deleteQuestionFromQuiz: {
      route: (quizId: string, questionId: string) =>
        `/api/v1/quiz/${quizId}/questions/${questionId}`,
    },
    createQuestionFromQuiz: {
      route: (quizId: string) => `/api/v1/quiz/${quizId}/questions`,
    },
    submitQuizAnswers: {
      route: (quizId: string) => `/api/v1/quiz/${quizId}/questions/submit`,
    },
    restartQuizAnswers: {
      route: (quizId: string) => `/api/v1/quiz/${quizId}/questions/restart`,
    },
    getAllQuestionsByQuiz: {
      route: (quizId: string, filters: QuestionsFilterProps) =>
        `/api/v1/quiz/${quizId}/questions?${convertToQueryString(filters)}`,
    },
  },
  Roadmap: {
    getAllRoadmaps: {
      route: `/api/v1/roadmap`,
    },
    getRoadmapById: {
      route: (id: string) => `/api/v1/roadmap/${id}`,
    },
    updateRoadmapById: {
      route: (id: string) => `/api/v1/roadmap/${id}`,
    },
    deleteRoadmapById: {
      route: (id: string) => `/api/v1/roadmap/${id}`,
    },
    createRoadmap: {
      route: `/api/v1/roadmap`,
    },
    getProgress: {
      route: (id: string) => `/api/v1/roadmap/${id}/progress`,
    },
    exportRoadmapToPDF: {
      route: (id: string) => `/api/v1/roadmap/${id}/progress/export/pdf`,
    },
    exportRoadmapToJSON: {
      route: (id: string) => `/api/v1/roadmap/${id}/progress/export/json`,
    },
    exportRoadmapToCSV: {
      route: (id: string) => `/api/v1/roadmap/${id}/progress/export/csv`,
    },
  },
  Section: {
    getAllRoadmapSections: {
      route: (id: string) => `/api/v1/roadmap/${id}/sections`,
    },
    createSectionToRoadmap: {
      route: (id: string) => `/api/v1/roadmap/${id}/sections`,
    },
    getSectionToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}`,
    },
    updateSectionToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}`,
    },
    deleteSectionToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}`,
    },
    toggleCompletionSection: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/complete`,
    },
  },
  Resource: {
    getAllResourcesToSection: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources`,
    },
    createResourceToRoadmap: {
      route: (roadmapId: string, sectionId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources`,
    },
    getResourceByIdToRoadmap: {
      route: (roadmapId: string, sectionId: string, resourceId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources/${resourceId}`,
    },
    updateResourceByIdToRoadmap: {
      route: (roadmapId: string, sectionId: string, resourceId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources/${resourceId}`,
    },
    deleteResourceByIdToRoadmap: {
      route: (roadmapId: string, sectionId: string, resourceId: string) =>
        `/api/v1/roadmap/${roadmapId}/sections/${sectionId}/resources/${resourceId}`,
    },
  },
  Project: {
    getAllProjects: {
      route: (filters: FiltersProps) =>
        `/api/v1/project?${convertToQueryString(filters)}`,
    },
    createProject: {
      route: `/api/v1/project`,
    },
    getProjectById: {
      route: (projectId: string) => `/api/v1/project/${projectId}`,
    },
    updateProjectById: {
      route: (projectId: string) => `/api/v1/project/${projectId}`,
    },
    deleteProjectById: {
      route: (projectId: string) => `/api/v1/project/${projectId}`,
    },
  },
  Steps: {
    getAllSteps: {
      route: (projectId: string) => `/api/v1/project/${projectId}/steps`,
    },
    createStep: {
      route: (projectId: string) => `/api/v1/project/${projectId}/steps`,
    },
    updateStep: {
      route: (projectId: string, stepId: string) =>
        `/api/v1/project/${projectId}/steps/${stepId}`,
    },
    toggleStep: {
      route: (projectId: string, stepId: string) =>
        `/api/v1/project/${projectId}/steps/${stepId}`,
    },
    deleteStep: {
      route: (projectId: string, stepId: string) =>
        `/api/v1/project/${projectId}/steps/${stepId}`,
    },
  },
};
