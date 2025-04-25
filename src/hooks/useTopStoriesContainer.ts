
import { useState } from "react";
import useTopStories from "@/hooks/useTopStories";

export function useTopStoriesContainer() {
  const [section, setSection] = useState("home");
  const { data, loading } = useTopStories(section);

  return {
    section,
    setSection,
    articles: data,
    loading,
  };
}
