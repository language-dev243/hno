import { useTheme } from "../hooks/useTheme";

interface FilterBarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ selectedCategory, setSelectedCategory }) => {
  const { theme } = useTheme();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={`filter-bar ${theme} p-2 flex gap-4 pl-4`}>
      <label htmlFor="category-select" className="filter-label">
        Filter by Category:
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="filter-select"
      >
        <option value="topstories">Top Stories</option>
        <option value="newstories">New Stories</option>
        <option value="beststories">Best Stories</option>
        <option value="askstories">Ask HN</option>
        <option value="showstories">Show HN</option>
        <option value="jobstories">Job Stories</option>
      </select>
    </div>
  );
};

export default FilterBar;
