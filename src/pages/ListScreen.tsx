import useTopStories from "../hooks/useTopStories";
import Loader from "../components/Loader";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router";
import { storyResult } from "../utils/types";
import useArticleStore from "../store/articleStore";
import Dropdown from "../components/ui/Dropdown";
import { categoriesList } from "../data/categories";
import { useState } from "react";
import { cn } from "../utils/mergeClass";

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
      <div className="container mx-auto text-right px-32">
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
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
            {articles &&
              articles.map((article, index) =>
                article.url ? (
                  <Card
                    key={index}
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
                    className={cn(
                      "group/grid shadow-input row-span-1 flex flex-col justify-between space-y-4 w-full h-full rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl",
                      index === 3 || index === 6 ? "md:col-span-2" : ""
                    )}
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
