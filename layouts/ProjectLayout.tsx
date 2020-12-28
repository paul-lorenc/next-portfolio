import { Container } from "@/components/Container";
import ProjectSeo from "@/components/ProjectSeo";

export default function ProjectgLayout({ children, frontMatter }: any) {
  return (
    <Container>
      <ProjectSeo {...frontMatter} />
      <article className="flex flex-col justify-center items-center max-w-2xl">
        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl ">
          {frontMatter.title}
        </h1>
        <p className="text-white text-sm mb-4">{frontMatter.date}</p>
        <div className="max-w-none w-full">{children}</div>
      </article>
    </Container>
  );
}
