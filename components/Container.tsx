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
      <nav className="sticky-nav flex justify-between max-w-6xl w-full items-center my-4 pt-2 px-8 md:my-8 mx-auto bg-black bg-opacity-60">
        <NextLink href="/">
          <a className="md:pl-8 lg:pl-12 xl:pl-17" aria-label="Home">
            <Monogram />
          </a>
        </NextLink>
        <div className="flex">
          <NextLink href="/code">
            <a aria-label="Code Projects">
              <CodeIcon />
            </a>
          </NextLink>
          <NextLink href="/images">
            <a aria-label="Images">
              <ImageIcon />
            </a>
          </NextLink>
          <NextLink href="/links">
            <a aria-label="Links">
              <LinkIcon />
            </a>
          </NextLink>
        </div>
      </nav>
      <div className="flex flex-col items-center bg-black px-4">
        <div className="flex flex-col items-center bg-black">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
