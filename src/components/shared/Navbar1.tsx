
"use client";

import React from "react";
import { Search, Github, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link 
    href={href} 
    className="text-sm text-gray-400 hover:text-[#F6F3EB] transition-colors"
  >
    {children}
  </Link>
);

interface IconButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children }) => (
  <Button 
    variant="ghost" 
    size="icon"
    onClick={onClick}
    className="text-gray-400 hover:text-[#F6F3EB] hover:bg-[#1C2021]"
  >
    {children}
  </Button>
);

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="text-gray-400 hover:text-[#F6F3EB] hover:bg-[#1C2021]"
        >
          {theme === 'dark' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-[#1C2021] border-[#272B2B]">
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="text-gray-400 hover:text-[#F6F3EB] hover:bg-[#272B2B] cursor-pointer"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="text-gray-400 hover:text-[#F6F3EB] hover:bg-[#272B2B] cursor-pointer"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="text-gray-400 hover:text-[#F6F3EB] hover:bg-[#272B2B] cursor-pointer"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar: React.FC = () => {
  const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // Search logic here
  }, []);

  return (
    <header className="border-b border-[#272B2B] bg-[#101213] dark:bg-[#101213] light:bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="h-16 flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="font-bold text-xl flex items-center">
                <span className="text-[#41BB91]">Saas</span>
                <span className="text-[#F6F3EB] dark:text-[#F6F3EB] light:text-[#101213]">UI</span>
              </div>
            </Link>

            {/* Main Nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavItem href="/components">Components</NavItem>
              <NavItem href="/examples">Examples</NavItem>
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden md:flex relative">
              <Input
                type="search"
                placeholder="Search components..."
                className="w-[200px] h-9 bg-[#1C2021] border-[#272B2B] text-[#F6F3EB] placeholder:text-gray-500 focus:ring-[#41BB91]"
                onChange={handleSearch}
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>

            {/* GitHub */}
            <IconButton onClick={() => window.open('https://github.com', '_blank')}>
              <Github className="w-5 h-5" />
            </IconButton>

            {/* Theme Toggle */}
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
