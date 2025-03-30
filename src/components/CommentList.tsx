import React, { useEffect, useState } from "react";
import { useComments } from "../hooks/useComments";
import Comment from "./Comment";

interface CommentListProps {
  commentIDs: number[] | null;
}

const CommentList: React.FC<CommentListProps> = ({ commentIDs }) => {
  const { data, isLoading, error } = useComments(commentIDs);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (data && data.length < (commentIDs?.length || 0)) {
      setLoadingMore(true);
    } else {
      setLoadingMore(false);
    }
  }, [data, commentIDs]);

  if (isLoading) return <div>Loading comments...</div>;
  if (error) return <div>Error fetching comments</div>;

  return (
    <div>
      {data?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      {loadingMore && <div>Loading more comments...</div>}
    </div>
  );
};

export default CommentList;
