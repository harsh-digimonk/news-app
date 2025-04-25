interface Props {
    title: string;
    section: string;
  }
  
  export default function ArticleHeader({ title, section }: Props) {
    return (
      <div className="mx-auto max-w-screen-md text-center">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-sm uppercase">
          {section === "" ? "Top News" : section}
        </span>
        <h1 className="mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug">
          {title}
        </h1>
      </div>
    );
  }
  