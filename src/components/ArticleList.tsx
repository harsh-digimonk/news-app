"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SlBookOpen } from "react-icons/sl";
import { GoArrowUpRight } from "react-icons/go";

interface CardProps {
  index: number;
  imageSrc?: string;
  imageAlt: string;
  title: string;
  description: string;
  className?: string;
  section: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ArticleList({
  imageSrc,
  index,
  imageAlt,
  title,
  description,
  onClick,
}: CardProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      key={index}
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredId(index)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          className={`object-cover transition-transform duration-500 ${
            hoveredId === index ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80" />

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-xl font-bold mb-2 line-clamp-2">{title}</h2>
          <p className="text-sm opacity-90 line-clamp-2 mb-4">{description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlBookOpen size={16} />
              <span className="text-xs">5 min read</span>
            </div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: hoveredId === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="h-8 w-8 rounded-full bg-white text-black flex items-center justify-center"
            >
              <GoArrowUpRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>

      <button onClick={onClick} className="absolute inset-0">
        <span className="sr-only">Read article: {title}</span>
      </button>
    </motion.div>
  );
}
