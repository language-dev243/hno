import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface StoryData {
  by: string;
  descendants?: number;
  id: number;
  score?: number;
  time: number;
  title: string;
  type: string;
  url?: string;
}

const fetchStoryDetails = async (storyID: number): Promise<StoryData> => {
  const { data } = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`,
  );
  return data;
};

export const useStoryDetails = (storyID: number) => {
  return useQuery<StoryData>({
    queryKey: ["storyDetails", storyID],
    queryFn: () => fetchStoryDetails(storyID),
    enabled: !!storyID,
  });
};
