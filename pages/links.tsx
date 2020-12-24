import { Container } from "@/components/Container";
import { CodeIcon } from "@/components/svgs/CodeIcon";

export default function Links() {
  return (
    <>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <h1 className="font-bold text-md md:text-lg tracking-tight mb-4 text-white">
            About Me
          </h1>
          <div className="mb-8 prose leading-6 text-gray-300 space-y-2">
            <p>
              My name is Paul Lorenc, I am a recent graduate from the University
              of Pennsylvania, where I received a Bachelor of Science and
              Engineering degree from the Computer Science program.{" "}
            </p>
            <p>
              Within computer science I am particularly interested in
              practically solving non-polynomial problems using SAT-solvers. I
              am also interested in using machine learning to analyze
              complicated "human problems" like music and visual art. In my free
              time I like producing music and creating animations using Blender.
            </p>
          </div>
          <div className="flex space-x-6">
            <div className="border border-gray-800 hover:border-gray-700 p-8">
              <CodeIcon />
            </div>
            <div className="border border-gray-800 hover:border-gray-700 p-8">
              <CodeIcon />
            </div>
            <div className="border border-gray-800 hover:border-gray-700 p-8">
              <CodeIcon />
            </div>
            <div className="border border-gray-800 hover:border-gray-700 p-8">
              <CodeIcon />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
