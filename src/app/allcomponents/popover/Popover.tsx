"use client";

import React from "react";
import {
  ChevronDown,
  Box,
  Users,
  Share,
  Calendar,
  BookOpen,
  Briefcase,
  FileText,
  Pencil,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ResourceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const toolsData: ResourceItem[] = [
  {
    icon: <Box className="w-5 h-5" />,
    title: "Resource Center",
    description: "Today's best practices",
  },
  {
    icon: <Share className="w-5 h-5" />,
    title: "Marketplace",
    description: "Extend and automate workflows",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Templates",
    description: "Jumpstart app development",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Guides",
    description: "Find help quickly",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Partner Finder",
    description: "Get help from solution partners",
  },
];

const companyData: ResourceItem[] = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Customers",
    description: "Trusted by the best teams",
  },
  {
    icon: <Pencil className="w-5 h-5" />,
    title: "Blog",
    description: "The latest posts and changes",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Changelog",
    description: "See what shipped",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "Press",
    description: "Read the latest news",
  },
];

const ResourcesMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-dark hover:bg-primary-light/10 transition-colors text-neutrals-light">
          Resources
          <ChevronDown className="w-4 h-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[800px] p-6 bg-primary-dark border border-primary-ash rounded-2xl"
        sideOffset={8}
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Tools Section */}
          <div>
            <h3 className="text-neutrals-light text-xl mb-6">Tools</h3>
            <div className="space-y-4">
              {toolsData.map((item) => (
                <button
                  key={item.title}
                  className="flex items-start gap-4 w-full p-2 rounded-lg hover:bg-primary-light/10 transition-colors group"
                >
                  <div className="p-2 rounded-lg border border-primary-ash group-hover:border-primary-muted">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-neutrals-light font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-primary-muted text-sm">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-neutrals-light text-xl mb-6">Company</h3>
            <div className="space-y-4">
              {companyData.map((item) => (
                <button
                  key={item.title}
                  className="flex items-start gap-4 w-full p-2 rounded-lg hover:bg-primary-light/10 transition-colors group"
                >
                  <div className="p-2 rounded-lg border border-primary-ash group-hover:border-primary-muted">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <p className="text-neutrals-light font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-primary-muted text-sm">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ResourcesMenu;
