import { CodeIcon } from "@/components/svgs/CodeIcon";
import { Container } from "@/components/Container";
import { ImageIcon } from "@/components/svgs/ImageIcon";
import Image from "next/image";
import { getSortedPosts } from "@/lib/mdx";
import Link from "next/link";
import { Project } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";

interface Props {
  sortedPosts: Project[];
}

export default function Code(props: Props) {
  const sortedPosts: Project[] = props.sortedPosts;
  return (
    <>
      <Container>
        <div className="text-gray-100 space-y-4 max-w-md sm:max-w-lg md:max-w-2xl">
          {sortedPosts.map((p) => {
            return <ProjectCard project={p} />;
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
