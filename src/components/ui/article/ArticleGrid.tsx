// components/ArticleGrid.tsx
import { ArticleCard } from "@/components/ui/article";
import { storyResult } from "@/utils/types";

type ArticleGridProps = {
  articles: storyResult[];
  onClick: (article: storyResult) => void;
};

export default function ArticleGrid({ articles, onClick }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles
        .filter((article) => article.url && article.multimedia)
        .map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            section={article.section}
            description={article.abstract}
            imageSrc={
              article.multimedia.find(
                (img) => img.format === "threeByTwoSmallAt2X"
              )?.url
            }
            onClick={() => onClick(article)}
            imageAlt={article.title}
            index={index}
          />
        ))}
    </div>
  );
}
