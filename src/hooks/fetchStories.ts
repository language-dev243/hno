import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type StoryID = number;

const fetchStories = async (category: string): Promise<StoryID[]> => {
  const { data } = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${category}.json`,
  );
  return data;
};

export const useStories = (category: string) => {
  return useQuery<StoryID[]>({
    queryKey: ["stories", category],
    queryFn: () => fetchStories(category),
    enabled: !!category,
  });
};
