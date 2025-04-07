import ToggleThemeButton from "./ToggleThemeButton";

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedCategory, setSelectedCategory }) => {

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
    console.log("set selected category to: ", event.target.value)
  };

  return (
    <div className={`.filter-bar top-0 border-t border-b sticky flex p-3 justify-between`}>
      <div className="flex pl-10">
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-select text-xl"
        >
          <option value="topstories">Top Stories</option>
          <option value="newstories">New Stories</option>
          <option value="beststories">Best Stories</option>
          <option value="askstories">Ask HN</option>
          <option value="showstories">Show HN</option>
          <option value="jobstories">Job Stories</option>
        </select>
      </div>
      <div className="flex pr-10">
        <ToggleThemeButton />
      </div>
    </div>
  );
};

export default FilterBar;
