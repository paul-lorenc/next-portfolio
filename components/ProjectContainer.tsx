import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "./svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

export const ProjectContainer: React.FC = ({ children }) => {
  return (
    <div className="flext flex-col bg-black font-serif h-screen">
      <nav className="sticky-nav flex justify-between max-w-6xl w-full items-center my-4 pt-2 px-8 md:my-8 mx-auto bg-black bg-opacity-60">
        <Link href="/">
          <a className="md:pl-8 lg:pl-12 xl:pl-17" aria-label="Home">
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
      <main className="flex flex-col justify-center bg-black px-4">
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
};
