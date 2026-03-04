import React from "react";
import { ActiveQuizModalProps } from "@/app/types/admin";
import Modal from "../UI/Modal";
import AddAndEditQuestionModal from "./AddAndEditQuestionModal";
import AddAndEditQuizModal from "./AddAndEditQuizModal";
import DeleteModal from "./DeleteRoadmapModal";
const ActiveQuizModal = ({ modal, onClose }: ActiveQuizModalProps) => {
  if (!modal?.type) return null;

  switch (modal?.type) {
    case "ADD_QUIZ":
      return (
        <Modal title="Create Quiz" isOpen onClose={onClose}>
          <AddAndEditQuizModal mode="ADD" />
        </Modal>
      );

    case "EDIT_QUIZ":
      return (
        <Modal title="Edit Quiz" isOpen onClose={onClose}>
          <AddAndEditQuizModal
            mode="EDIT"
            title={modal.payload?.title}
            description={modal.payload?.description}
            rank={modal.payload?.rank}
          />
        </Modal>
      );

    case "DELETE_QUIZ":
      return (
        <Modal isOpen onClose={onClose}>
          <DeleteModal mode="quiz" onCancel={onClose} />
        </Modal>
      );

    case "ADD_QUESTION":
      return (
        <Modal title="Create Question" isOpen onClose={onClose}>
          <AddAndEditQuestionModal mode="ADD" />
        </Modal>
      );

    case "EDIT_QUESTION":
      return (
        <Modal title="Edit Question" isOpen onClose={onClose}>
          <AddAndEditQuestionModal
            mode="EDIT"
            answers={modal.payload?.answers}
            correctAnswer={modal.payload?.correctAnswer}
            question={modal.payload?.question}
          />
        </Modal>
      );

    case "DELETE_QUESTION":
      return (
        <Modal isOpen onClose={onClose}>
          <DeleteModal mode="question" onCancel={onClose} />
        </Modal>
      );

    default:
      return null;
  }
};

export default ActiveQuizModal;
