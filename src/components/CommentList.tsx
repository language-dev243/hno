import { useComments } from "../hooks/fetchComments";

interface CommentListProps {
  commentIDs: number[] | null;
}

const CommentList: React.FC<CommentListProps> = ({ commentIDs }) => {
  const { data, isLoading, error } = useComments(commentIDs);

  if (isLoading) return <div>Loading comments...</div>;
  if (error) return <div>Error fetching comments</div>;

  return (
    <div>
      {data?.map((comment) => (
        <div key={comment.id} className="comment">
          <p>
            <strong>{comment.by}</strong> - {comment.time}
          </p>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;