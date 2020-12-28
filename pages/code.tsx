import { Container } from "@/components/Container";
import { getSortedPosts } from "@/lib/mdx";
import { Project } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import { NextSeo } from "next-seo";

const url: string = "https://paul-lorenc.com/code";
const title: string = "Code Projects - Paul Lorenc";
const description: string =
  "Portfolio of software projects I have completed over the years, along with writeups highlighting details about different projects.";

interface Props {
  sortedPosts: Project[];
}

export default function Code(props: Props) {
  const sortedPosts: Project[] = props.sortedPosts;
  return (
    <>
      <Container>
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
        <div className="text-gray-100 max-w-2xl space-y-4">
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
