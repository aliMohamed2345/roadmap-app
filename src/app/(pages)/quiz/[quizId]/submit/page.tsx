"use client";
import { apiRoutes } from "@/app/api/apiRoutes";
import RoadmapApiAxiosInstance from "@/app/api/axiosInstance";
import { AxiosError } from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const questions = JSON.parse(localStorage.getItem("questions") || "[]");
  const { quizId } = useParams();
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await RoadmapApiAxiosInstance.post(
          apiRoutes.Question.submitQuizAnswers.route(String(quizId)),
          { questions },
        );
        if (res.data.success) {
          console.log(res.data);
        }
      } catch (error) {
        const axiosError = error as AxiosError<{ message: string }>;
        toast.error(
          axiosError.response?.data?.message || "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [quizId, questions]);
  if (loading) return <div>Loading</div>;
  return <div>Page</div>;
};

export default Page;
