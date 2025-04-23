import { useEffect, useState } from 'react';
import { fetchTopStories } from '../api/newsApi';
import { storyResult } from "../utils/types";

const useTopStories = (section: string) => {
  const [data, setData] = useState<storyResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStories = async () => {
      try {
        setLoading(true);
        const result = await fetchTopStories(section);
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

export default useTopStories;
