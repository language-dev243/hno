import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface CommentData {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}

const fetchComment = async (commentID: number): Promise<CommentData> => {
  const { data } = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${commentID}.json`,
  );
  return data;
};

export const useComments = (commentIDs: number[] | null) => {
  return useQuery<CommentData[]>({
    queryKey: ["comments", commentIDs],
    queryFn: async () => {
      if (!commentIDs) return [];
      const commentPromises = commentIDs.map((id) => fetchComment(id));
      const comments = await Promise.all(commentPromises);
      return comments;
    },
    enabled: !!commentIDs,
  });
};
