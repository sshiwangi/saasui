import React, { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";

interface CardProps {
  variant: "default" | "project";
  header?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
  image?: string;
  title?: string;
  technology?: string;
  desc?: string;
  demoLink?: string;
  githubLink?: string;
  containerClassName?: string;
}

export function Card({
  variant,
  header,
  content,
  footer,
  image,
  title,
  technology,
  desc,
  demoLink,
  githubLink,
  containerClassName,
}: CardProps) {
  const baseStyles =
    "border border-gray-700 rounded-lg overflow-hidden bg-gray-900 text-gray-700";

  return (
    <div className={clsx(baseStyles, containerClassName)}>
      {variant === "default" && (
        <>
          <div className="p-4 w-full bg-gray-700 border-b border-gray-700">
            {header}
          </div>
          <div className="p-4 w-full">{content}</div>
          <div className="p-4 w-full bg-gray-700 border-t border-gray-700">
            {footer}
          </div>
        </>
      )}
      {variant === "project" && (
        <>
          {/* <Image
            className="margin-style w-full h-64 object-cover"
            src={image}
            alt={title}
          /> */}
          <h3 className="project-title margin-style text-xl font-bold mt-4">
            {title}
          </h3>
          <p className="project-desc margin-style tech-stack text-gray-400">
            {technology}
          </p>
          <p className="project-desc margin-style my-2">{desc}</p>
          <div className="links-btn-container flex space-x-4 mt-4 p-4">
            <a
              className="project-btns bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              className="project-btns bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </>
      )}
    </div>
  );
}
