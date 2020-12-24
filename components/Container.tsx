import NextLink from "next/link";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "./svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="flext flex-col bg-black font-serif h-screen">
      <nav className="sticky-nav flex justify-between max-w-6xl w-full items-center mb-8 p-8 md:my-8 mx-auto bg-black bg-opacity-60">
        <NextLink href="/">
          <a className="md:pl-4 lg:pl-10 xl:pl-17">
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
          <NextLink href="/links">
            <a>
              <LinkIcon />
            </a>
          </NextLink>
        </div>
      </nav>
      <div className="flex flex-col items-center bg-black">{children}</div>
      <Footer />
    </div>
  );
};
