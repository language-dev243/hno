import { useStoryDetails } from "../hooks/fetchStoryDetails";

interface StoryCardProps {
  storyID: number;
}

const StoryCard: React.FC<StoryCardProps> = ({ storyID }) => {
  const { data, isLoading, error } = useStoryDetails(storyID);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching story details</div>;

  return (
    <div className="flex flex-col m-6 p-6 border border-blue-100">
      <div className="flex flex-row">
        <p>
          {data?.by} - {data?.time} - {data?.url}
        </p>
      </div>
      <h1 className="text-bold text-2xl">{data?.title}</h1>
      <div>
        <p>
          ⬆️ {data?.score} - {data?.descendants} comments
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
