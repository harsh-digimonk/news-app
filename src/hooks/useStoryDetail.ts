
import { useEffect, useState } from 'react';
import { fetchStoryDetail } from '../api/newsApi';
import { storyResult } from "../utils/types";

const useStoryDetail = (section?: string) => {
  const [data, setData] = useState<storyResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStories = async () => {
      try {
        const result = await fetchStoryDetail(section);
        console.log(result);
        setData(result.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getStories();
  }, [section]);

  return { data, loading };
};

export default useStoryDetail;
