import { useEffect, useRef } from "react";

import StoryDetails from "./StoryDetails";

interface StoryModalProps {
  isStoryModalOpen: boolean;
  selectedStoryID: number | null;
  handleCloseStoryModal: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({
  isStoryModalOpen,
  selectedStoryID,
  handleCloseStoryModal,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isStoryModalOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isStoryModalOpen]);

  return (
    <dialog ref={dialogRef} className="rounded-lg p-0">
      <button
        onClick={handleCloseStoryModal}
        className="absolute top-2 right-2 text-gray-600"
      >
        &times;
      </button>
      {selectedStoryID && <StoryDetails selectedStoryID={selectedStoryID} />}
    </dialog>
  );
};

export default StoryModal;
