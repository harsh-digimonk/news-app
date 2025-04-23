import React from "react";
import { truncateDescription } from "../../utils/truncateText";
import { cn } from "../../utils/mergeClass";

interface CardProps {
  imageSrc?: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  section: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  onClick,
  className,
  section
}) => {
  const textHover = `bg-gradient-to-r from-blue-200 to-blue-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:80%_3px] group-hover:bg-[length:80%_10px]`
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer group relative flex flex-col my-6  rounded-lg  m-auto",
        className
      )}
    >
      <div className="transition duration-200 group-hover/grid:translate-x-2">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            className="w-full transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            src={imageSrc}
            alt={imageAlt}
          />
        </div>
        <span className="text-xs font-medium tracking-wider uppercase px-4 mt-5 text-blue-600">{section}</span>
        <div className="p-4 group">
          <h6 className={cn("mb-2 text-slate-800 text-lg font-semibold",textHover)}>
            {truncateDescription(title, 35)}
          </h6>
          <p className="text-slate-600 text-md leading-normal font-light">
            {truncateDescription(description, 70)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
