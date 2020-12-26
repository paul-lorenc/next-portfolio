import Link from "next/link";
import { Project } from "@/lib/mdx";
import Image from "next/image";
interface Props {
  project: Project;
}
export const ProjectCard: React.FC<any> = (props: Props) => {
  let p: Project = props.project;
  return (
    <Link key={p.slug} href={`/code/${p.slug}`}>
      <a
        key={p.slug}
        className="flex items-center border border-gray-800 hover:border-gray-700 px-5 py-3"
      >
        <div className="pr-4">
          <Image
            src={p.src}
            height={32}
            width={32}
            quality={40}
            alt=""
            priority
            layout="fixed"
          />
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
};
