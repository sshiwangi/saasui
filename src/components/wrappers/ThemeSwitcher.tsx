import useColorMode from "@/hooks/useColorMode";
import { IoSunnyOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";

const ThemeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        onClick={() => {
          if (typeof setColorMode === "function") {
            setColorMode(colorMode === "light" ? "dark" : "light");
          }
        }}
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 dark:bg-white duration-75 ease-linear  ${
          colorMode === "dark" && ""
        }`}
      >
        <div className="dark:hidden">
          <IoSunnyOutline />
        </div>
        <div className="hidden dark:inline-block">
          <GoMoon />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
