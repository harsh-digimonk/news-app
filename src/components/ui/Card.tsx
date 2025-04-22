// src/components/Card.tsx
import React from "react";

interface CardProps {
  imageSrc?: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-lg w-5/6">
      <div className="p-5">
        {imageSrc && (
          <img className="rounded-lg " src={imageSrc} alt={imageAlt} />
        )}
      </div>
      <div className="p-5">
        <a href={buttonLink}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-sm truncate font-normal text-gray-700 ">
          {description}
        </p>
        <a
          href={buttonLink}
          className="w-1/2 flex items-center px-8 py-2 rounded-md bg-blue-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500 "
        >
          {buttonText}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </div>
    </div>
  );
};

export default Card;
