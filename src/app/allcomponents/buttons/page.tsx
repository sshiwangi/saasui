"use client";
import React from "react";
import CodeViewer from "@/components/ui/CodeViewer";
import { Button } from "./button";

const codePrimary = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="primary">Primary Button</Button>
  );
}
`;

const codeSecondary = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="secondary">Secondary Button</Button>
  );
}
`;

const codeRounded = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="rounded">Rounded Button</Button>
  );
}
`;

const codeBorder = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="border">Border Button</Button>
  );
}
`;

const codeDisabled = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="disabled">Disabled Button</Button>
  );
}
`;

const codeThreeD = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="threeD">3D Button</Button>
  );
}
`;

const codeWithIcon = `
import React from 'react';
import { Button } from './Button';

function App() {
  return (
    <Button variant="withIcon">
      <span className="material-icons mr-2">star</span> Button with Icon
    </Button>
  );
}
`;

function Buttons() {
  return (
    <div className="w-3/4 p-4 space-y-4">
      <CodeViewer
        code={codePrimary}
        preview={<Button variant="primary">Primary Button</Button>}
      />
      <CodeViewer
        code={codeSecondary}
        preview={<Button variant="secondary">Secondary Button</Button>}
      />
      <CodeViewer
        code={codeRounded}
        preview={<Button variant="rounded">Rounded Button</Button>}
      />
      <CodeViewer
        code={codeBorder}
        preview={<Button variant="border">Border Button</Button>}
      />
      <CodeViewer
        code={codeDisabled}
        preview={<Button variant="disabled">Disabled Button</Button>}
      />
      <CodeViewer
        code={codeThreeD}
        preview={<Button variant="threeD">3D Button</Button>}
      />
      <CodeViewer
        code={codeWithIcon}
        preview={
          <Button variant="withIcon">
            <span className="material-icons mr-2">star</span> Button with Icon
          </Button>
        }
      />
    </div>
  );
}

export default Buttons;
