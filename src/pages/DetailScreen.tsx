import { format, parseISO } from "date-fns";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import useArticleStore from "../store/articleStore";

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
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg space-y-10">
        <div className="mx-auto max-w-screen-md text-center">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm uppercase">
            {section === '' ? 'Top News': section}
          </span>
          <h1 className="mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
            {title}
          </h1>
          <div className="my-3 flex justify-center space-x-3 text-gray-500">
            <div>
              <p className="text-gray-800 ">{byline}</p>
              <div className="flex items-center space-x-2 text-sm">
                <time className="text-gray-500 " dateTime={published_date}>
                  {format(parseISO(published_date), "MMMM dd, yyyy")}
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      {imageUrl && (
        <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          <img
            src={imageUrl}
            alt="thumbnail"
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg">
        <h5 className="mx-auto max-w-screen-md text-sm font-light w-full text-center items-center my-1">
          {imageCaption}
        </h5>
        <article className="mx-auto max-w-screen-md">
          <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600 text-xl">
            {abstract}
          </div>
        </article>

        {url && (
          <a
            href={url}
            target="_blank"
            className="w-full flex justify-center items-center font-medium text-blue-600 dark:text-blue-500 hover:underline group"
          >
            Read their stories
            <svg
              className="w-4 h-4 ms-2 group-hover:translate-x-1/2 duration-300 ease-in-out"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
      </div>
    </>
  );
}

export default DetailScreen;
