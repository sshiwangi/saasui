import React, { useState, ReactNode } from "react";
import clsx from "clsx";

interface AccordionProps {
  header: ReactNode;
  content: ReactNode;
  containerClassName?: string;
}

export function Accordion({
  header,
  content,
  containerClassName,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const baseStyles =
    "border border-gray-700 rounded-lg overflow-hidden bg-gray-900 text-gray-700";

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={clsx(baseStyles, containerClassName)}>
      <div
        className="p-4 w-full text-white flex items-center  cursor-pointer"
        onClick={toggleAccordion}
      >
        {header}
      </div>
      {isOpen && (
        <div className="p-4 w-full text-center border-t border-gray-700">
          {content}
        </div>
      )}
    </div>
  );
}
