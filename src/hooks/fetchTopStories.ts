import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTopStories = async () => {
  const { data } = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json",
  );
  return data;
};

export const useTopStories = () => {
  return useQuery({
    queryKey: ["topStories"],
    queryFn: () => fetchTopStories(),
  });
};
