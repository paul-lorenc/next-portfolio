import { Container } from "@/components/Container";
import { FlowerIcon } from "@/components/svgs/FlowerIcon";
import { GithubIcon } from "@/components/svgs/GithubIcon";
import { LinkedinIcon } from "@/components/svgs/LinkedinIcon";
import { SlateIcon } from "@/components/svgs/SlateIcon";
import { MailIcon } from "@/components/svgs/MailIcon";
import { NextSeo } from "next-seo";

const url: string = "https://paul-lorenc.com/links";
const title: string = "Links - Paul Lorenc";
const description: string = "Index of my other webpages";

export default function Links() {
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
                url: "https://paul-lorenc.com/banners/link-banner.png",
                alt: description,
              },
            ],
          }}
        />
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
          <div className="flex justify-between border border-gray-800 py-4 sm:px-4">
            <a href="https://github.com/paul-lorenc" aria-label="Github">
              <GithubIcon />
            </a>
            <a href="www.linkedin.com/in/paul--lorenc" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a
              href="https://paul-lorenc.github.io/gradflower/"
              aria-label="Generative Flower Project"
            >
              <FlowerIcon />
            </a>
            <a
              href="https://slate.host/lorenc"
              aria-label="Slate Image Hosting"
            >
              <SlateIcon />
            </a>
            <a href="mailto:pjlorenc@gmail.com" aria-label="Gmail">
              <MailIcon />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
