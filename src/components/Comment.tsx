import CommentList from "./CommentList";

interface CommentProps {
  comment: {
    by: string;
    id: number;
    kids?: number[];
    text: string;
    time: number;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="comment p-4 border-l-2 border-gray-300 ml-4">
      <p className="text-gray-700">
        <strong>{comment.by}</strong> - {comment.time}
      </p>
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
      {comment.kids && comment.kids.length > 0 && (
        <div className="ml-4 border-l-2 border-gray-200 pl-4">
          <CommentList commentIDs={comment.kids} />
        </div>
      )}
    </div>
  );
};

export default Comment;
