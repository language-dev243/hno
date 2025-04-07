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
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isStoryModalOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isStoryModalOpen]);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <dialog
      ref={dialogRef}
      className="max-w-[95%] w-full max-h-[90vh] overflow-hidden"
      onClick={handleCloseStoryModal}
    >
      <div
        className="relative w-full h-full"
        onClick={handleStopPropagation}
      >
        <button
          ref={closeButtonRef}
          onClick={handleCloseStoryModal}
          className="absolute z-50 top-4 right-4 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-opacity-10 hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-10 transition-all"
          aria-label="Close"
        >
          &times;
        </button>
        {selectedStoryID && (
          <div className="pt-10 h-full overflow-y-auto px-6 pb-6">
            <StoryDetails selectedStoryID={selectedStoryID} />
          </div>
        )}
      </div>
    </dialog>
  );
};

export default StoryModal;