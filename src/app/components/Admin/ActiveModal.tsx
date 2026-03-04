import AddAndEditResourceModal from "./AddAndEditResourceModal";
import AddAndEditSectionModal from "./AddAndEditSectionModal";
import DeleteModal from "./DeleteRoadmapModal";
import AddAndEditRoadmapModal from "./AddAndEditRoadmapModal";
import Modal from "../UI/Modal";
import { ActiveModalProps } from "@/app/types/admin";
const ActiveModal = ({ modal, onClose }: ActiveModalProps) => {
  if (!modal.type) return null;

  switch (modal.type) {
    case "ADD_ROADMAP":
      return (
        <Modal title="Create Roadmap" isOpen onClose={onClose}>
          <AddAndEditRoadmapModal mode="ADD" />
        </Modal>
      );

    case "EDIT_ROADMAP":
      return (
        <Modal title="Edit Roadmap" isOpen onClose={onClose}>
          <AddAndEditRoadmapModal
            mode="EDIT"
            title={modal.payload?.title}
            description={modal.payload?.description}
          />
        </Modal>
      );

    case "DELETE_ROADMAP":
      return (
        <Modal isOpen onClose={onClose}>
          <DeleteModal mode="roadmap" onCancel={onClose} />
        </Modal>
      );

    case "ADD_SECTION":
      return (
        <Modal title="Create Section" isOpen onClose={onClose}>
          <AddAndEditSectionModal mode="ADD" />
        </Modal>
      );

    case "EDIT_SECTION":
      return (
        <Modal title="Edit Section" isOpen onClose={onClose}>
          <AddAndEditSectionModal
            mode="EDIT"
            title={modal.payload?.title}
            description={modal.payload?.description}
            difficulty={modal.payload?.difficulty}
          />
        </Modal>
      );

    case "DELETE_SECTION":
      return (
        <Modal isOpen onClose={onClose}>
          <DeleteModal mode="section" onCancel={onClose} />
        </Modal>
      );

    case "ADD_RESOURCE":
      return (
        <Modal title="Create Resource" isOpen onClose={onClose}>
          <AddAndEditResourceModal mode="ADD" />
        </Modal>
      );

    case "EDIT_RESOURCE":
      return (
        <Modal title="Edit Resource" isOpen onClose={onClose}>
          <AddAndEditResourceModal
            mode="EDIT"
            title={modal.payload?.title}
            Type={modal.payload?.type}
            url={modal.payload?.url}
          />
        </Modal>
      );

    case "DELETE_RESOURCE":
      return (
        <Modal isOpen onClose={onClose}>
          <DeleteModal mode="resource" onCancel={onClose} />
        </Modal>
      );

    default:
      return null;
  }
};

export default ActiveModal;
