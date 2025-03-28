import { useState, useRef, useEffect } from "react";
import { useOutletContext } from "react-router";
import { useStories } from "../hooks/useStories";

import StoryCard from "./StoryCard";

interface StoryFeedProps {
  selectedCategory: string;
}

const StoryFeed: React.FC<StoryFeedProps> = ({ selectedCategory }) => {
  const { handleOnStoryClick, setError } = useOutletContext<{
    handleOnStoryClick: (storyID: number) => void;
    setError: (message: string) => void;
  }>();

  const { data, isLoading, error } = useStories(selectedCategory);
  const [storiesLoaded, setStoriesLoaded] = useState(10);
  const lastStoryRef = useRef(null);

  useEffect(() => {
    if (error) {
      setError("Failed to load stories. Please try again later.");
    }
  }, [error, setError]);

  useEffect(() => {
    if (!data) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStoriesLoaded((prevCount) => prevCount + 10);
        }
      },
      { threshold: 1.0 },
    );

    const currentLastStory = lastStoryRef.current;

    if (currentLastStory) {
      observer.observe(currentLastStory);
    }

    return () => {
      if (currentLastStory) {
        observer.unobserve(currentLastStory);
      }
    };
  }, [data, storiesLoaded]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <ul>
        {data?.slice(0, storiesLoaded).map((id, index) => {
          const isLast = index === storiesLoaded - 1;
          return (
            <li
              key={id}
              onClick={() => handleOnStoryClick(Number(id))}
              ref={isLast ? lastStoryRef : null}
            >
              <StoryCard storyID={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StoryFeed;
