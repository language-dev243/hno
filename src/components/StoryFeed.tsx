import StoryCard from './StoryCard';

import { useTopStories } from '../hooks/fetchTopStories';

const StoryFeed = () => {

  const { data, isLoading, error } = useTopStories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <ul>
        {data.slice(0, 10).map((id) => (
          <StoryCard key={id} storyID={id} />
        ))}
      </ul>
    </div>
  );
};

export default StoryFeed;
