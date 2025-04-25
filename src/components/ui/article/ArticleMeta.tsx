import { format, parseISO } from "date-fns";

interface Props {
  byline: string;
  publishedDate: string;
}

export default function ArticleMeta({ byline, publishedDate }: Props) {
  return (
    <div className="my-3 flex justify-center space-x-3 text-gray-500">
      <div>
        <p className="text-gray-800 ">{byline}</p>
        <div className="flex items-center space-x-2 text-sm">
          <time className="text-gray-500" dateTime={publishedDate}>
            {format(parseISO(publishedDate), "MMMM dd, yyyy")}
          </time>
        </div>
      </div>
    </div>
  );
}
