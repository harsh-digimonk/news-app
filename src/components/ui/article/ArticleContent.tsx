import { GoArrowRight } from "react-icons/go";

interface Props {
  abstract: string;
  url?: string;
}

export default function ArticleContent({ abstract, url }: Props) {
  return (
    <article className="mx-auto max-w-screen-md">
      <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600 text-xl">
        {abstract}
      </div>

      {url && (
        <a
          href={url}
          target="_blank"
          className="w-full flex justify-center items-center font-medium text-blue-600 dark:text-blue-500 hover:underline group"
        >
          Read their stories
          <GoArrowRight className="w-4 h-4 ms-2 group-hover:translate-x-1/2 duration-300 ease-in-out" />
        </a>
      )}
    </article>
  );
}
