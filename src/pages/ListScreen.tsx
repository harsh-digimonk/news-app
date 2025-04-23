import useTopStories from "../hooks/useTopStories";
import Loader from "../components/Loader";
import Card from "../components/ui/Card";
import { useNavigate } from "react-router";
import { storyResult } from "../utils/types";
import useArticleStore from "../store/articleStore";

function ListScreen() {
  const { data: articles, loading } = useTopStories();
  const setSelectedArticle = useArticleStore(
    (state) => state.setSelectedArticle
  );
  const navigate = useNavigate();

  if (loading) {
    return <Loader />;
  }

  const handleReadMore = (article: storyResult) => {
    setSelectedArticle(article);
    navigate("/details");
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {articles &&
            articles.map((article) => (
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
            ))}
        </div>
      </div>
    </>
  );
}

export default ListScreen;
