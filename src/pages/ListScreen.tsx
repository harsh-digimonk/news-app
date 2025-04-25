import useTopStories from "@/hooks/useTopStories";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router";
import { storyResult } from "@/utils/types";
import useArticleStore from "@/store/articleStore";
import Dropdown from "@/components/ui/Dropdown";
import { categoriesList } from "@/data/categories";
import { useState } from "react";
import ArticleList from "@/components/ArticleList";

function ListScreen() {
  const [section, setSection] = useState("home");

  const { data: articles, loading } = useTopStories(section);
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
      const encodeCategory = encodeURIComponent(category.name);
      setSection(encodeCategory);
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles &&
              articles.map((article, index) =>
                article.url && article.multimedia ? (
                  <ArticleList
                    key={index}
                    title={article.title}
                    section={article.section}
                    description={article.abstract}
                    imageSrc={
                      article.multimedia.find(
                        (img) => img.format === "threeByTwoSmallAt2X"
                      )?.url
                    }
                    onClick={() => handleReadMore(article)}
                    imageAlt={article.title}
                    index={index}
                  />
                ) : null
              )}
          </div>
        </div>
      )}
    </>
  );
}

export default ListScreen;
