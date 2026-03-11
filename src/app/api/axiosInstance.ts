import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const RoadmapApiAxiosInstance = axios.create({
  baseURL,
  timeout: 20000,
  withCredentials: true,
  params: {
    key: apiKey,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

//Request Interceptor
RoadmapApiAxiosInstance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Request:", config.method?.toUpperCase(), config.url);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

//Response Interceptor

RoadmapApiAxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    const status = error.response?.status;
    const isSilent = (
      error.config as InternalAxiosRequestConfig & { _silentAuth?: boolean }
    )?._silentAuth;

    if (process.env.NODE_ENV === "development") {
      toast.error(`❌ API Error:${error.response || error.message}`);
      console.error("❌ API Error:", error.response || error.message);
    }

    if (status === 401 && !isSilent) {
      console.warn("Unauthorized - maybe redirect to login");
    }

    if (status === 403) {
      toast.error("Forbidden - invalid API key?");
      console.warn("Forbidden - invalid API key?");
    }

    if (status === 500) {
      toast.error("Internal server error");
      console.error("Internal server error");
    }

    return Promise.reject(
      error.response?.data || {
        message: error.message,
      },
    );
  },
);

export default RoadmapApiAxiosInstance;
