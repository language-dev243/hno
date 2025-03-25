import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchStories = async (category) => {
  const { data } = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${category}.json`
  );
  return data;
};

export const useStories = (category) => {
  return useQuery({
    queryKey: ["stories", category], // Make query key dynamic
    queryFn: () => fetchStories(category),
    enabled: !!category, // Only fetch if category is valid
  });
};
