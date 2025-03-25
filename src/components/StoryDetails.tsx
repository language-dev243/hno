import { useStoryDetails } from "../hooks/fetchStoryDetails";

import CommentList from "./CommentList";

interface StoryDetailsProps {
  selectedStoryID: number | null;
}

const StoryDetails: React.FC<StoryDetailsProps> = ({ selectedStoryID }) => {
  const { data, isLoading, error } = useStoryDetails(Number(selectedStoryID));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching story details</div>;

  return (
    <div>
      <p>
        {data?.by} - {data?.time} -
        <a href={data?.url} target="_blank" rel="noopener noreferrer">
          {data?.url}
        </a>
      </p>
      <h1 className="text-bold text-2xl">{data?.title}</h1>
      <p>
        ⬆️ {data?.score} - {data?.descendants} comments
      </p>
      {data?.kids && <CommentList commentIDs={data?.kids} />}
    </div>
  );
};

export default StoryDetails;
