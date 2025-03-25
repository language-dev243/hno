import { useState } from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import StoryFeed from "./components/StoryFeed";
import StoryModal from "./components/StoryModal";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("topstories");
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedStoryID, setSelectedStoryID] = useState<number | null>(null);

  const handleOnStoryClick = (storyID: number) => {
    setSelectedStoryID(storyID);
    setIsStoryModalOpen(true);
  };

  const handleCloseStoryModal = () => {
    setIsStoryModalOpen(false);
    setSelectedStoryID(null);
  };

  return (
    <div>
      <Header />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <StoryFeed
        selectedCategory={selectedCategory}
        handleOnStoryClick={handleOnStoryClick}
      />
      <StoryModal
        isStoryModalOpen={isStoryModalOpen}
        selectedStoryID={selectedStoryID}
        handleCloseStoryModal={handleCloseStoryModal}
      />
    </div>
  );
};

export default App;
