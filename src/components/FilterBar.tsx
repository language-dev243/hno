const FilterBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex items-center border-b border-blue-100">
      <h1 className="text-2xl mr-4">Stories</h1>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="bg-gray-700 text-white p-2 border border-blue-300 rounded"
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
