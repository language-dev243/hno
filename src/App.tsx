import { useState } from "react";
import { Outlet } from "react-router";

import { useTheme } from "./hooks/useTheme";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import StoryModal from "./components/StoryModal";
import ErrorPopup from "./components/ErrorPopup";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("topstories");
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedStoryID, setSelectedStoryID] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();


  const handleOnStoryClick = (storyID: number) => {
    setSelectedStoryID(storyID);
    setIsStoryModalOpen(true);
  };

  const handleCloseStoryModal = () => {
    setIsStoryModalOpen(false);
    setSelectedStoryID(null);
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div className={`${theme} w-11/12 mx-auto`}>
      <Header />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Outlet context={{ handleOnStoryClick, setError }} />
      <StoryModal
        isStoryModalOpen={isStoryModalOpen}
        selectedStoryID={selectedStoryID}
        handleCloseStoryModal={handleCloseStoryModal}
      />
      {error && <ErrorPopup message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default App;
