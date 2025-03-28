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
      className="rounded-lg p-0 max-w-[95%] w-full max-h-[90vh] overflow-hidden"
      onClick={handleCloseStoryModal}
    >
      <div
        className="relative w-full h-full"
        onClick={handleStopPropagation}
      >
        <button
          ref={closeButtonRef}
          onClick={handleCloseStoryModal}
          className="absolute z-50 top-2 right-2 text-gray-600 bg-white/50 hover:bg-white/75 rounded-full w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        {selectedStoryID && (
          <div className="pt-10 h-full overflow-y-auto">
            <StoryDetails selectedStoryID={selectedStoryID} />
          </div>
        )}
      </div>
    </dialog>
  );
};

export default StoryModal;