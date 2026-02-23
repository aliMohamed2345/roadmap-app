"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Modal from "../UI/Modal";
import AddAndEditQuizModal from "./AddAndEditQuizModal";
import { questionDummyData, quizDummyData } from "@/app/data";
import { motion } from "framer-motion";
import { FiChevronRight, FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { ActiveQuizModalStateProps } from "@/app/types/admin";
import ActiveQuizModal from "./ActiveQuizModal";
const QuizzesTab = () => {
  const [openQuiz, setOpenQuiz] = useState<number | null>(null);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [activeModal, setActiveModal] =
    useState<ActiveQuizModalStateProps | null>(null);
  return (
    <>
      <div className="flex flex-col gap-5 my-10">
        <div className="flex justify-between items-center ">
          <h4 className="sm:text-xl text-lg font-bold">Quizzes</h4>
          <button
            onClick={() => setActiveModal({ type: "ADD_QUIZ" })}
            className="p-2 rounded-lg bg-linear-to-br from-neon-cyan to-neon-purple text-white cursor-pointer hover:scale-105 transition-all flex items-center gap-2"
          >
            <FaPlus /> New Quiz
          </button>
        </div>
        {quizDummyData.map((quiz) => {
          const isQuizOpen = openQuiz === quiz.id;
          return (
            <motion.div
              key={quiz.id}
              layout
              className="rounded-2xl transition-all border bg-card text-card-foreground shadow-sm border-border"
            >
              <div
                className="flex sm:items-center justify-between p-5 cursor-pointer flex-col sm:flex-row items-end gap-4"
                onClick={() => setOpenQuiz(isQuizOpen ? null : +quiz.id)}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: isQuizOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronRight size={25} />
                  </motion.div>

                  <div>
                    <h3 className="font-semibold text-base sm:text-xl hover:text-primary transition">
                      {quiz.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <FiEdit2
                    size={27}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal({ type: "EDIT_QUIZ", payload: quiz });
                    }}
                    className="hover:text-primary cursor-pointer rounded-lg hover:bg-primary/20 p-1 transition-all"
                  />
                  <FiTrash2
                    size={27}
                    onClick={() => setActiveModal({ type: "DELETE_QUIZ" })}
                    className="hover:text-destructive cursor-pointer rounded-lg hover:bg-destructive/20 p-1 transition-all"
                  />
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isQuizOpen && (
                  <motion.div
                    key="roadmap-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden border-t border-border"
                  >
                    <div className="px-5 pb-5 space-y-5">
                      {quiz.description && (
                        <p className="text-sm text-muted-foreground">
                          {quiz.description}
                        </p>
                      )}

                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">
                          Question ({questionDummyData.length})
                        </h4>
                        <button
                          onClick={() =>
                            setActiveModal({ type: "ADD_QUESTION" })
                          }
                          className="flex items-center gap-2 cursor-pointer border-border text-sm px-3 py-1.5 rounded-lg border hover:bg-muted transition"
                        >
                          <FiPlus size={14} /> Add Question
                        </button>
                      </div>

                      <div className="space-y-4">
                        {questionDummyData.map((question, i) => {
                          const isQuestionOpen =
                            openQuestion === question.questionId;
                          return (
                            <motion.div
                              layout
                              key={i}
                              className="rounded-xl border bg-muted/40 border-border"
                            >
                              <div
                                className="fex justify-between items-center p-4 cursor-pointer flex-col sm:flex-row gap-5"
                                onClick={() =>
                                  setOpenQuestion(
                                    isQuestionOpen ? null : question.questionId,
                                  )
                                }
                              >
                                <div className="fle items-center gap-3">
                                  <div>
                                    <div className="flex items-center sm:gap-1 justify-between flex-col sm:flex-row gap-4">
                                      <div className="flex sm:gap-1 items-center flex-col sm:flex-row gap-4">
                                        <span className="font-bold w-8 h-8 flex items-center justify-center border border-border rounded-full p-2">
                                          {question.questionNumber}
                                        </span>
                                        <span className="font-medium text-center sm:text-left">
                                          {question.question}
                                        </span>
                                      </div>
                                      <div className="flex items-center gap-4 text-muted-foreground">
                                        <FiEdit2
                                          size={25}
                                          onClick={() =>
                                            setActiveModal({
                                              type: `EDIT_QUESTION`,
                                              payload: question,
                                            })
                                          }
                                          className="hover:text-primary cursor-pointer rounded-lg hover:bg-primary/20 p-1 transition-all"
                                        />
                                        <FiTrash2
                                          onClick={() =>
                                            setActiveModal({
                                              type: `DELETE_QUESTION`,
                                            })
                                          }
                                          size={25}
                                          className="hover:text-destructive cursor-pointer rounded-lg hover:bg-destructive/20 p-1 transition-all"
                                        />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 justify-items-center w-full">
                                      {question.answers.map((answer, i) => (
                                        <div
                                          key={i}
                                          className={`w-full text-sm text-center sm:text-left sm:text-base text-muted-foreground font-bold p-2 hover:bg-muted transition-all rounded-lg ${answer === question.correctAnswer && "text-primary bg-primary/20 hover:bg-primary/30"}`}
                                        >
                                          {answer}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
      {
        <ActiveQuizModal
          modal={activeModal!}
          onClose={() => setActiveModal({ type: null })}
        />
      }
    </>
  );
};

export default QuizzesTab;
