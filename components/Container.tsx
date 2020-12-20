import NextLink from "next/link";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/Monogram";
import { CodeIcon } from "@/components/CodeIcon";
import { ImageIcon } from "./ImageIcon";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="bg-black font-serif h-screen">
      <nav className="sticky-nav flex justify-between max-w-5xl w-full items-center mb-8 p-8 md:my-8 mx-auto bg-black bg-opacity-60">
        <NextLink href="/">
          <a>
            <Monogram />
          </a>
        </NextLink>
        <div className="flex">
          <NextLink href="/code">
            <a>
              <CodeIcon />
            </a>
          </NextLink>
          <NextLink href="/images">
            <a>
              <ImageIcon />
            </a>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col items-center bg-black">
        {children}
        <Footer />
      </main>
    </div>
  );
};
