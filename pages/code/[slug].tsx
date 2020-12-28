import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";
import matter from "gray-matter";
import ProjectLayout from "@/layouts/ProjectLayout";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "@/data/MDXComponents";

export default function Code({ slug, source, frontMatter }: any) {
  const content = hydrate(source, { components: MDXComponents });
  frontMatter = { ...frontMatter, slug };
  return (
    <>
      <ProjectLayout frontMatter={frontMatter}>
        <div className="flex flex-col prose max-w-none text-white">
          {content}
        </div>
      </ProjectLayout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }: any) {
  const projectContent = await getProjectBySlug(params.slug);
  const { data, content } = matter(projectContent);
  const mdxSource = await renderToString(content, {
    MDXComponents,
    scope: data,
  });
  return {
    props: {
      slug: params.slug,
      source: mdxSource,
      frontMatter: data,
    },
  };
}
