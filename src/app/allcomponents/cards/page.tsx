"use client";
import React from "react";
import CodeViewer from "@/components/ui/CodeViewer";
import { Card } from "./card";

const codeCardHeaderContentFooter = `
import React from 'react';
import { Card } from './Card';

function App() {
  return (
    <Card
      variant="default"
      header={<div className="text-xl font-bold">Card Header</div>}
      content={<div className="text-base">This is the main content of the card.</div>}
      footer={<div className="text-sm">Card Footer</div>}
    />
  );
}
`;

const codeCardWithImage = `
import React from 'react';
import { Card } from './Card';

function App() {
  return (
    <Card
      variant="project"
      image="https://via.placeholder.com/300"
      title="Project Title"
      technology="React, TypeScript"
      desc="This is a description of the project."
      demoLink="https://example.com/demo"
      githubLink="https://github.com/example"
    />
  );
}
`;

const headerContent = <div className="text-xl font-bold">Card Header</div>;
const mainContent = (
  <div className="text-base">This is the main content of the card.</div>
);
const footerContent = <div className="text-sm">Card Footer</div>;

function Cards() {
  const containerClassName =
    "min-h-[350px] min-w-[350px] max-w-[700px] flex flex-col items-center bg-gray-700 text-gray-200";

  return (
    <div className="w-3/4 p-4 space-y-4">
      <CodeViewer
        code={codeCardHeaderContentFooter}
        preview={
          <Card
            variant="default"
            header={headerContent}
            content={mainContent}
            footer={footerContent}
            containerClassName={containerClassName}
          />
        }
      />
      <CodeViewer
        code={codeCardWithImage}
        preview={
          <Card
            variant="project"
            image="https://via.placeholder.com/300"
            title="Project Title"
            technology="React, TypeScript"
            desc="This is a description of the project."
            demoLink="https://example.com/demo"
            githubLink="https://github.com/example"
            containerClassName={containerClassName}
          />
        }
      />
    </div>
  );
}

export default Cards;
