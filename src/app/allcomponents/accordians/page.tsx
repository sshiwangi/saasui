"use client";
import React from "react";
import CodeViewer from "@/components/shared/CodeViewer";
import { Accordion } from "./accordian";

const codeAccordionExample = `
import React from 'react';
import { Accordion } from './Accordion';

function App() {
  return (
    <Accordion
      header={<div className="text-xl justify-center flex items-center text-center w-full h-full font-bold">Accordion Header</div>}
      content={<div className="text-white">This is the content of the accordion.</div>}
    />
  );
}
`;

const headerContent = (
  <div className="text-xl justify-center flex items-center text-center w-full h-full font-bold">
    Accordion Header
  </div>
);
const mainContent = (
  <div className="text-white">This is the content of the accordion.</div>
);

function Accordions() {
  const containerClassName =
    "min-h-[100px] min-w-[350px] max-w-[700px] flex flex-col items-center justify-center text-gray-700";

  return (
    <div className="w-3/4 p-4 space-y-4">
      <CodeViewer
        code={codeAccordionExample}
        preview={
          <Accordion
            header={headerContent}
            content={mainContent}
            containerClassName={containerClassName}
          />
        }
      />
    </div>
  );
}

export default Accordions;
