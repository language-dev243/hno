import { useState, useEffect, useRef } from "react";
import { useStories } from "../hooks/useStories";
import StoryCard from "./StoryCard";

interface StoryFeedProps {
  selectedCategory: string;
  handleOnStoryClick: (storyID: number) => void;
}

const StoryFeed: React.FC<StoryFeedProps> = ({ selectedCategory, handleOnStoryClick }) => {
  const { data, isLoading, error } = useStories(selectedCategory);
  const [storiesLoaded, setStoriesLoaded] = useState(10);
  const lastStoryRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (error) {
      console.log("Failed to load stories. Please try again later.");
    }
  }, [error]);

  useEffect(() => {
    if (!data) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStoriesLoaded((prevCount) => prevCount + 10);
        }
      },
      { threshold: 1.0 }
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

  console.log("data from storyfeed: ", data)

  return (
    <div>
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
