import { Container } from "@/components/Container";
import { getSortedPosts } from "@/lib/mdx";
import { Project } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "@/components/svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";
import { useScrollbarSize } from "react-scrollbar-size";

const url: string = "https://paul-lorenc.com/code";
const title: string = "Code Projects - Paul Lorenc";
const description: string =
  "Portfolio of software projects I have completed over the years, along with writeups highlighting details about different projects.";

interface Props {
  sortedPosts: Project[];
}

export default function Code(props: Props) {
  const sortedPosts: Project[] = props.sortedPosts;
  const { height, width } = useScrollbarSize();
  var scrollStyle = {
    "--scrollbarWidth": width + "px",
  } as React.CSSProperties;
  return (
    <div className="ZRoot" style={scrollStyle}>
      <div className="WindowWidth">
        <div className="LinkLayout">
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
          <NextSeo
            title={title}
            description={description}
            canonical={url}
            openGraph={{
              url,
              title,
              description,
              images: [
                {
                  url: "https://paul-lorenc.com/banners/code-banner.png",
                  alt: description,
                },
              ],
            }}
          />
          <div className="text-gray-100 w-full space-y-4">
            {sortedPosts.map((p) => {
              return <ProjectCard project={p} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const sortedPosts = getSortedPosts();
  return {
    props: {
      sortedPosts,
    },
  };
}
