import { useState, useEffect } from "react";
import NextLink from "next/link";

import { Footer } from "@/components/Footer";
import { useTheme } from "next-themes";

export const Container: React.FC = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="bg-white dark:bg-black">
      <nav className="sticky-nav flex justify-between max-w-5xl w-full items-center mb-8 p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
        <button
          className="p-2 sm:p-1 text-gray-900 dark:text-gray-100"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            console.log("boo");
          }}
        >
          toggle
        </button>
        <div>
          <NextLink href="/">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Home</a>
          </NextLink>
          <NextLink href="/code">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">Code</a>
          </NextLink>
          <NextLink href="/images">
            <a className="p-1 sm:p-4 text-gray-900 dark:text-gray-100">
              Images
            </a>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col items-center bg-white dark:bg-black px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
};
