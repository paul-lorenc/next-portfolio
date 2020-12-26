import { Container } from "@/components/Container";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

export default function Links() {
  return (
    <>
      <Container>
        <div className="flex flex-col space-y-4 max-w-2xl ">
          <div className="flex flex-col border border-gray-800 px-6 pb-6 pt-2">
            <h1 className="font-bold text-md md:text-lg tracking-tight mb-2 text-white">
              About Me
            </h1>
            <div className="prose leading-6 text-gray-300 space-y-2 text-justify">
              <p>
                Hello, my name is Paul Lorenc, thank you for stopping by my
                website. I currently work as a software engineer for&nbsp;
                <a
                  href="https://www.ethosce.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                >
                  EthosCE
                </a>
                &nbsp;in Philadelphia, using technologies like React.js and
                Drupal.
              </p>
              <p>
                Outside of work, I enjoy building full stack web applications
                using Next.js and Apollo, as well as producing music, and making
                visual art. If you have any questions about any of my projects,
                please feel free to contact me at my email linked below.
              </p>
            </div>
          </div>
          <div className="flex justify-between px-6 py-4">
            <CodeIcon />
            <CodeIcon />
            <CodeIcon />
            <CodeIcon />
            <CodeIcon />
          </div>
        </div>
      </Container>
    </>
  );
}
