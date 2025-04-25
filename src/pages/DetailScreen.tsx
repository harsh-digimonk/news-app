import {
  ArticleHeader,
  ArticleMeta,
  ArticleImage,
  ArticleContent,
} from "@/components/ui/article";
import useArticleStore from "@/store/articleStore";
import { useEffect } from "react";
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link, useNavigate } from "react-router";

function DetailScreen() {
  const article = useArticleStore((state) => state.selectedArticle);
  const navigate = useNavigate();

  useEffect(() => {
    if (!article) {
      navigate("/");
    }
  }, [article, navigate]);

  if (!article) return null;

  const { title, byline, published_date, abstract, multimedia, section, url } =
    article;
  const imgData = multimedia?.find((img) => img.format === "Super Jumbo");
  const imageUrl = imgData?.url;
  const imageCaption = imgData?.caption;

  return (
    <>
      <Link to={"/"} className="absolute left-50">
        <SlArrowLeftCircle className="w-10 h-10" />
      </Link>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg">
        <ArticleHeader title={title} section={section} />
        <ArticleMeta byline={byline} publishedDate={published_date} />
        <ArticleImage src={imageUrl} caption={imageCaption} />
        <ArticleContent abstract={abstract} url={url} />
      </div>
    </>
  );
}

export default DetailScreen;
