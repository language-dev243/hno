import { useComments } from "../hooks/fetchComments";
import Comment from "./Comment";

interface CommentListProps {
  commentIDs: number[] | null;
}

const CommentList: React.FC<CommentListProps> = ({ commentIDs }) => {
  const { data, isLoading, error } = useComments(commentIDs);

  if (isLoading) return <div>Loading comments...</div>;
  if (error) return <div>Error fetching comments</div>;

  return (
    <div>
      {data?.map((comment) => <Comment key={comment.id} comment={comment} />)}
    </div>
  );
};

export default CommentList;
