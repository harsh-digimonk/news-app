import { create } from "zustand";
import { storyResult } from "../utils/types";

interface ArticleStore {
    selectedArticle: storyResult | null;
    setSelectedArticle: (article: storyResult) => void;
    clearArticle: () => void;
  }

const useArticleStore = create<ArticleStore>((set) => ({
  selectedArticle:  null,
  setSelectedArticle: (article) => set({ selectedArticle: article }),
  clearArticle: () => set({ selectedArticle: null }),
}));

export default useArticleStore;
