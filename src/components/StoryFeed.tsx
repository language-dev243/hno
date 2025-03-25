import { useState } from 'react';
import { useTopStories } from '../hooks/fetchTopStories';

import StoryCard from './StoryCard';

const StoryFeed = () => {
  const { data, isLoading, error } = useTopStories();
  const [ storiesLoaded, setStoriesLoaded ] = useState(10)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  console.log("data: ", data)

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <ul>
        {data.slice(0, storiesLoaded).map((id) => (
          <StoryCard key={id} storyID={id} />
        ))}
      </ul>
    </div>
  );
};

export default StoryFeed;
