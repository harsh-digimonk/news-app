import useTopStories from "../hooks/useTopStories";
import Loader from "../components/Loader";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router";
import { storyResult } from "../utils/types";
import useArticleStore from "../store/articleStore";
import Dropdown from "../components/ui/Dropdown";
import { categoriesList } from "../data/categories";
import { useState } from "react";

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
      <div className="container mx-auto text-right">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {articles &&
              articles.map((article) =>
                article.url ? (
                  <Card
                    key={article.url}
                    title={article.title}
                    description={article.abstract}
                    imageSrc={
                      article.multimedia.find(
                        (img) => img.format === "threeByTwoSmallAt2X"
                      )?.url
                    }
                    buttonText="Read More"
                    onClick={() => handleReadMore(article)}
                    imageAlt={article.title}
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
