import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "./svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="flext flex-col bg-black font-serif h-screen">
      <nav className="sticky-nav flex justify-between max-w-2xl lg:max-w-3xl xl:max-w-6xl  items-center p-2 lg:px-8 lg:my-8 mx-auto bg-black bg-opacity-60 xl:pl-25">
        <Link href="/">
          <a className="xl:mx-20" aria-label="Home">
            <Monogram />
          </a>
        </Link>
        <div className="flex">
          <Link href="/code">
            <a aria-label="Code Projects">
              <CodeIcon />
            </a>
          </Link>
          <Link href="/images">
            <a aria-label="Images">
              <ImageIcon />
            </a>
          </Link>
          <Link href="/links">
            <a aria-label="Links">
              <LinkIcon />
            </a>
          </Link>
        </div>
      </nav>
      <main className="flex flex-col justify-center items-center bg-black px-4">
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};
