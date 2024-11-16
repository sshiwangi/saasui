"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Wand2,
  Trash,
  Copy,
  Link,
  Database,
  User,
  File,
  Folder,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Recommendation {
  id: string;
  type: "person";
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  shortcut?: string;
}

const recommendations: Recommendation[] = [
  // People
  {
    id: "john",
    type: "person",
    icon: <User className="w-5 h-5" />,
    title: "John Smith",
    subtitle: "Product Designer",
  },
  {
    id: "sarah",
    type: "person",
    icon: <User className="w-5 h-5" />,
    title: "Sarah Johnson",
    subtitle: "Developer",
  },
  {
    id: "Nathan",
    type: "person",
    icon: <User className="w-5 h-5" />,
    title: "Nathan Johnson",
    subtitle: "Developer",
  },
  {
    id: "Jian",
    type: "person",
    icon: <User className="w-5 h-5" />,
    title: "Jian Johnson",
    subtitle: "Developer",
  },
  {
    id: "Nobita",
    type: "person",
    icon: <User className="w-5 h-5" />,
    title: "Nobita Johnson",
    subtitle: "Developer",
  },
];

const Search= () => {
  const [search, setSearch] = useState("");

  const filteredItems = search.trim()
    ? recommendations.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.subtitle?.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="w-[480px] rounded-2xl bg-primary-dark shadow-2xl overflow-hidden">
      {/* Search Input - Always Visible */}
      <div
        className="w-full p-4 border border-secondary-dark/20 rounded-2xl"
        style={{
          boxShadow: "0 0 0 1px rgb(255 59 107 / 0.1)",
        }}
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search actions..."
          className="w-full bg-transparent text-xl text-neutrals-light placeholder:text-primary-muted outline-none"
          autoFocus
        />
      </div>

      {/* Results - Only visible when typing */}
      <AnimatePresence>
        {search.length > 0 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2 border border-primary-ash rounded-2xl overflow-hidden"
          >
            {filteredItems.length > 0 ? (
              <div className="max-h-[400px] overflow-y-auto">
                {filteredItems.map((item) => (
                  <motion.button
                    key={item.id}
                    className={cn(
                      "w-full px-4 py-3 flex items-center justify-between group",
                      "hover:bg-primary-light/10 transition-colors"
                    )}
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-primary-muted">{item.icon}</span>
                      <div className="text-left">
                        <span className="text-lg text-neutrals-light">
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <p className="text-sm text-primary-muted">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                    {item.shortcut && (
                      <span className="text-sm text-primary-muted">
                        {item.shortcut}
                      </span>
                    )}
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-3 text-primary-muted text-sm">
                No results found for "{search}"
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
