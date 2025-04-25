// screens/ListScreen.tsx
import { useNavigate } from "react-router";
import { useTopStoriesContainer } from "@/hooks/useTopStoriesContainer";
import useArticleStore from "@/store/articleStore";

import Loader from "@/components/ui/Loader";
import Dropdown from "@/components/ui/Dropdown";
import { ArticleGrid } from "@/components/ui/article";

import { categoriesList } from "@/data/categories";
import { storyResult } from "@/utils/types";

function ListScreen() {
  const { setSection, articles, loading } = useTopStoriesContainer();
  const setSelectedArticle = useArticleStore(
    (state) => state.setSelectedArticle
  );
  const navigate = useNavigate();

  const handleReadMore = (article: storyResult) => {
    setSelectedArticle(article);
    navigate("/details");
  };

  const handleSelect = (id: string) => {
    const category = categoriesList.find((cat) => cat.id === id);
    if (category) {
      setSection(category.slug);
    }
  };

  return (
    <>
      <div className="container mx-auto mt-4 text-right px-4">
        <Dropdown
          id="category-dropdown"
          title="Choose Category"
          data={categoriesList}
          onSelect={handleSelect}
          position="bottom-left"
        />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto p-4">
          <ArticleGrid articles={articles || []} onClick={handleReadMore} />
        </div>
      )}
    </>
  );
}

export default ListScreen;
