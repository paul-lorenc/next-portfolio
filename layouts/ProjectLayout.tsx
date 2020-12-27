import { Container } from "@/components/Container";
import ProjectSeo from "@/components/ProjectSeo";

export default function ProjectgLayout({ children, frontMatter }: any) {
  return (
    <Container>
      <ProjectSeo {...frontMatter} />
      <article className="flex flex-col justify-center max-w-2xl p-4">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight  text-white">
          {frontMatter.title}
        </h1>
        <p className="text-white text-sm mb-4">{frontMatter.date}</p>
        <div className="text-white max-w-2xl w-full text-justify">
          {children}
        </div>
      </article>
    </Container>
  );
}
