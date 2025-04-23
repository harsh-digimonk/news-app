import React from "react";
import { truncateDescription } from "../../utils/truncateText";

interface CardProps {
  imageSrc?: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  onClick,
}) => {
  return (
    <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300 m-auto">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {truncateDescription(title, 35)}
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          {truncateDescription(description, 70)}
        </p>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <button
          onClick={onClick}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg active:bg-slate-700 hover:border-slate-700 hover:bg-transparent hover:text-black"
          type="button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
