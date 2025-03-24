import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchStoryDetails = async (storyID) => {
    const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`);
    return data;
};

export const useStoryDetails = (storyID) => {
    return useQuery({
        queryKey: ['storyDetails', storyID], // Include the storyID in the query key
        queryFn: () => fetchStoryDetails(storyID), // Pass the storyID to the fetch function
        enabled: !!storyID, // Only run the query if storyID is provided
    });
};
