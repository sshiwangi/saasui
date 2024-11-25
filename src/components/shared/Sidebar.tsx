import React, { CSSProperties } from "react";

interface CustomCSSProperties extends CSSProperties {
  "--radix-scroll-area-corner-width"?: string;
  "--radix-scroll-area-corner-height"?: string;
}

interface SidebarProps {
  routes: { href: string; name: string }[];
}

function Sidebar({ routes }: SidebarProps) {
  const customStyle: CustomCSSProperties = {
    position: "relative",
    // "--radix-scroll-area-corner-width": "0px",
    // "--radix-scroll-area-corner-height": "0px",
  };
  return (
    <aside className="fixed border-r text-white border-[#272B2B] z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] px-8 py-4 shrink-0 lg:sticky lg:block lg:self-start">
      <div
        className="relative  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent bg-primary-dark h-full py-6 pr-6 lg:py-8"
        // style={customStyle}
      >
        
          <div style={{ minWidth: "100%", display: "table" }}>
            <div className="w-full">
              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold  dark:text-white __className_b15a0a">
                  Installation
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <a
                    className="group flex w-full items-center rounded-md text-gray-300 border border-transparent px-2 py-1 hover:text-blue-500 hover:translate-x-1 transition duration-200 __className_b15a0a text-muted-foreground"
                    href="#"
                  >
                    Install Tailwind Css
                  </a>
                </div>
              </div>
              <div className="pb-4">
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold  dark:text-white __className_b15a0a">
                  All Components
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {routes.map((route) => (
                    <a
                      key={route.name}
                      className="group flex w-full items-center rounded-md border text-gray-300 border-transparent px-2 py-1 hover:text-blue-500 hover:translate-x-1 transition duration-200 __className_b15a0a text-muted-foreground"
                      href={route.href}
                    >
                      {route.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </aside>
  );
}

export default Sidebar;
