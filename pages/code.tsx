import { CodeIcon } from "@/components/CodeIcon";
import { Container } from "@/components/Container";
import { ImageIcon } from "@/components/ImageIcon";
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
        <div className="text-gray-100 space-y-3 max-w-2xl">
          {sortedPosts.map((p) => {
            console.log(p.excerpt);
            return (
              <div
                key={p.slug}
                className="flex items-center border border-gray-800 rounded p-3"
              >
                <div className="h-8 w-8 ml-3 mr-3">
                  <Image src="/logos/p5js.png" width="25" height="25" />
                </div>
                <div>
                  <h4 className="text-lg font-bold tracking-tight text-gray-100">
                    {p.title}
                  </h4>
                  <p className="leading-5 text-gray-300">{p.excerpt}</p>
                </div>
              </div>
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
