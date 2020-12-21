import { CodeIcon } from "@/components/svgs/CodeIcon";
import { Container } from "@/components/Container";
import { ImageIcon } from "@/components/svgs/ImageIcon";
import Image from "next/image";
import { getSortedPosts } from "@/lib/mdx";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

interface Props {
  sortedPosts: Post[];
}

export default function Code(props: Props) {
  const sortedPosts: Post[] = props.sortedPosts;
  return (
    <>
      <Container>
        <div className="text-gray-100 space-y-3 max-w-xs sm:max-w-lg md:max-w-2xl">
          {sortedPosts.map((p) => {
            return (
              <Link href={`/code/${p.slug}`}>
                <a
                  key={p.slug}
                  className="flex items-center border border-gray-800 hover:border-gray-700 rounded p-3"
                >
                  <div className="h-8 w-8 ml-0 mr-2">
                    <Image src="/logos/p5js.png" width="50" height="50" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-gray-100">
                      {p.title}
                    </h4>
                    <p className="leading-5 text-gray-300">{p.excerpt}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </Container>
    </>
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
