import { getAllProjectSlugs, getProjectBySlug } from "@/lib/mdx";
import Head from "next/head";
import matter from "gray-matter";
import { Container } from "@/components/Container";
// @ts-ignore
import renderToString from "next-mdx-remote/render-to-string";
// @ts-ignore
import hydrate from "next-mdx-remote/hydrate";
import MDXComponents from "@/data/MDXComponents";

export default function Code({ source, frontMatter }: any) {
  const content = hydrate(source, { MDXComponents });
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Container>
        <div className="text-gray-100 max-w-md md:max-w-xl md:max-w-2xl">
          <div className="text-center p-4">
            <h1 className="text-3xl font-semibold">{frontMatter.title}</h1>
            <span className="font-thin">{frontMatter.date}</span>
          </div>
          <div>{content}</div>
        </div>
      </Container>
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
      source: mdxSource,
      frontMatter: data,
    },
  };
}
