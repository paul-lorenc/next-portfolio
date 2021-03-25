import Link from "next/link";

import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "./svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

export const ProjectContainer: React.FC = ({ children }) => {
  return (
    <div className="flext flex-col justify-center bg-black font-serif h-screen">
      <nav className="sticky-nav nav-grid max-w-4xl py-4 items-center mx-auto bg-black bg-opacity-60">
        <Link href="/">
          <a aria-label="Home">
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
      </main>
      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
};
