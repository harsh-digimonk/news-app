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
    <div className=" bg-white border border-gray-200 rounded-lg shadow-sm ">
      {imageSrc && <img className="rounded-t-lg " src={imageSrc} alt={imageAlt} />}
      <div className="p-5">
        <a href={buttonLink}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 text-sm truncate font-normal text-gray-700 ">{description}</p>
        <a
          href={buttonLink}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center border-blue-700 border-2 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 "
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
