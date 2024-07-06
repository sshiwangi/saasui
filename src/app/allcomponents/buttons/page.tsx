"use client";
import React from "react";
import CodeViewer from "@/components/ui/CodeViewer";
import Image from "next/image";

const code = `
import React from 'react';

export function Button() {
  return (
     <button className="text-white rounded-md p-4 bg-blue-600">Click Me!</button>
  );
}
`;

const preview = (
  <div className="bg-gray-200 flex justify-center items-center rounded-lg  p-4 ">
    <button className="text-white rounded-md p-4 bg-blue-600">Click Me!</button>
  </div>
);

function Buttons() {
  return (
    <div className="w-3/4 p-4">
      <CodeViewer code={code} preview={preview} />
    </div>
  );
}

export default Buttons;
