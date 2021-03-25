import { ProjectContainer } from "@/components/ProjectContainer";
import ProjectSeo from "@/components/ProjectSeo";

export default function ProjectgLayout({ children, frontMatter }: any) {
  return (
    <ProjectContainer>
      <ProjectSeo {...frontMatter} />
      <article className="prose w-full mx-auto">
        <h1>{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <div>{children}</div>
      </article>
    </ProjectContainer>
  );
}
