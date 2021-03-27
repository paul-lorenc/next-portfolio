import Link from "next/link";
import { useScrollbarSize } from "react-scrollbar-size";
import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "./svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

export const Container: React.FC = ({ children }) => {
  const { height, width } = useScrollbarSize();
  var scrollStyle = {
    "--scrollbarWidth": width + "px",
  } as React.CSSProperties;
  return (
    <div className="ZRoot" style={scrollStyle}>
      <div className="WindowWidth">
        <div className="LayoutWidth mx-auto mt-2 sm:mt-8">
          <nav className="sticky-nav nav-grid py-4 items-center mx-auto bg-black bg-opacity-60">
            <Link href="/">
              <a aria-label="Home">
                <Monogram styles="max-h-14 text-white hover:text-gray-600 fill-current" />
              </a>
            </Link>
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
          </nav>
          <main className="LinkLayout">
            <div>{children}</div>
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
};
