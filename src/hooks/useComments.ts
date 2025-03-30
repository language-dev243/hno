import { useQuery, useQueryClient, QueryClient } from "@tanstack/react-query";
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
    `https://hacker-news.firebaseio.com/v0/item/${commentID}.json`
  );
  return data;
};

const loadFirstCommentRecursively = async (
  commentID: number,
  queryClient: QueryClient
): Promise<CommentData | null> => {
  const comment = await fetchComment(commentID);
  if (comment.kids && comment.kids.length > 0) {
    const firstChildComment = await loadFirstCommentRecursively(comment.kids[0], queryClient);
    if (firstChildComment) {
      queryClient.setQueryData(["comment", comment.kids[0]], firstChildComment);
    }
  }
  return comment;
};

export const useComments = (commentIDs: number[] | null) => {
  const queryClient = useQueryClient();

  return useQuery<CommentData[]>({
    queryKey: ["comments", commentIDs],
    queryFn: async () => {
      if (!commentIDs) return [];

      const comments = await Promise.all(
        commentIDs.map((id) => loadFirstCommentRecursively(id, queryClient))
      );
      return comments.filter((comment): comment is CommentData => comment !== null);
    },
    enabled: !!commentIDs,
  });
};
