import { useState, useRef, useEffect } from "react";
import { useStories } from "../hooks/fetchStories";

import StoryCard from "./StoryCard";

const StoryFeed = ({ selectedCategory }) => {
  const { data, isLoading, error } = useStories(selectedCategory);
  const [storiesLoaded, setStoriesLoaded] = useState(10);
  const lastStoryRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    console.log("Setting up Intersection Observer...");

    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Observer triggered:", entries[0]); // Log when observer runs

        if (entries[0].isIntersecting) {
          console.log("Last story is visible! Loading more...");

          setStoriesLoaded((prevCount) => prevCount + 10);
        }
      },
      { threshold: 1.0 },
    );
    if (lastStoryRef.current) {
      observer.observe(lastStoryRef.current);

      console.log("Observing last story:", lastStoryRef.current);
    }

    return () => {
      if (lastStoryRef.current) {
        console.log("Removing observer...");

        observer.unobserve(lastStoryRef.current);
      }
    };
  }, [data, storiesLoaded]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-center items-center">
      <ul>
        {data.slice(0, storiesLoaded).map((id, index) => {
          const isLast = index === storiesLoaded - 1;

          if (isLast) {
            console.log(`Last story being watched: ID ${id}`);
          }

          return (
            <li key={id} ref={isLast ? lastStoryRef : null}>
              <StoryCard storyID={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StoryFeed;

// todo: loading should return a skeleton component
// todo: put use effect in custum hook?