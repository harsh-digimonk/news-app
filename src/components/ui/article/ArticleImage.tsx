interface Props {
    src?: string;
    caption?: string;
  }
  
  export default function ArticleImage({ src, caption }: Props) {
    if (!src) return null;
  
    return (
      <>
        <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
          <img
            src={src}
            alt="thumbnail"
            className="object-cover w-full h-full"
          />
        </div>
        {caption && (
          <h5 className="mx-auto max-w-screen-md text-sm font-light text-center my-1">
            {caption}
          </h5>
        )}
      </>
    );
  }
  