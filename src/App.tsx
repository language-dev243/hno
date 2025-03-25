import { useState } from "react";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import StoryFeed from "./components/StoryFeed";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("topstories");

  return (
    <div>
      <Header />
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <StoryFeed selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
