import { Container } from "@/components/Container";
import { FlowerIcon } from "@/components/svgs/FlowerIcon";
import { GithubIcon } from "@/components/svgs/GithubIcon";
import { LinkedinIcon } from "@/components/svgs/LinkedinIcon";
import { SlateIcon } from "@/components/svgs/SlateIcon";
import { MailIcon } from "@/components/svgs/MailIcon";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "@/components/svgs/ImageIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { getSortedPosts } from "@/lib/mdx";
import { getHeaderSlateImages, SlateImage } from "@/lib/slate";
import { ImageCard } from "@/components/ImageCard";
import { useScrollbarSize } from "react-scrollbar-size";
import { Footer } from "@/components/Footer";

const url: string = "https://paul-lorenc.com/links";
const title: string = "Links - Paul Lorenc";
const description: string = "Index of my other webpages";

interface AbstractPost {
  type: string;
  object: any;
}

interface Props {
  feedarr: AbstractPost[];
}

export default function Links(props: Props) {
  const { height, width } = useScrollbarSize();
  var scrollStyle = {
    "--scrollbarWidth": width + "px",
  } as React.CSSProperties;
  let feedarr: AbstractPost[] = props.feedarr;
  return (
    <div className="ZRoot WindowWidth" style={scrollStyle}>
      <div className="LayoutWidth mx-auto mt-8">
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
                url: "https://paul-lorenc.com/banners/banner.png",
                alt: description,
              },
            ],
          }}
        />
        <div className="space-y-4">
          <div className="LinkMonogram">
            <Monogram styles="max-h-24 text-white hover:text-gray-600 fill-current" />
          </div>
          <div className="flex justify-between border border-gray-800 px-2 py-4 sm:p-8 ">
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
          <div className="flex justify-between border border-gray-800 hover:border-gray-700 p-4 text-white text-2xl font-semibold">
            <Link href="/code">
              <div className="LinkCard ">
                <CodeIcon />

                <h1 className="pl-4">{"Code Projects"}</h1>
              </div>
            </Link>
          </div>
          <div className="flex justify-between border border-gray-800 hover:border-gray-700 p-4 text-white text-2xl font-semibold">
            <Link href="/images">
              <div className="LinkCard ">
                <ImageIcon />

                <h1 className="pl-4">{"Images"}</h1>
              </div>
            </Link>
          </div>
          <div className="flex justify-between border border-gray-800 hover:border-gray-700 p-4 text-white text-2xl font-semibold">
            <Link href="/">
              <div className="LinkCard ">
                <Monogram
                  styles={
                    "max-h-12 text-white hover:text-gray-600 fill-current"
                  }
                />

                <h1 className="pl-4">{"Home"}</h1>
              </div>
            </Link>
          </div>
          <h1 className="text-white text-2xl font-semibold mt-5">Recent</h1>
          <div className="max-w-4xl space-y-4">
            {feedarr.map((s: any) => {
              if (s.type === "post") {
                return <ProjectCard project={s.object} />;
              } else {
                return <ImageCard slateImage={s.object} />;
              }
            })}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let posts: any = await getSortedPosts();
  const slates: SlateImage[] = await getHeaderSlateImages();
  let feedarr: AbstractPost[] = [];
  let postidx = 0;
  let slateidx = 0;
  let feed_length = Math.min(posts.length + slates.length, 10);
  for (let i = 0; i < feed_length; i++) {
    if (slateidx >= slates.length && postidx >= posts.length) {
      break;
    } else if (slateidx < slates.length && postidx >= posts.length) {
      feedarr.push({
        type: "slate",
        object: slates[slateidx],
      });
      slateidx++;
    } else if (postidx < posts.length && slateidx >= slates.length) {
      feedarr.push({
        type: "post",
        object: posts[postidx],
      });
      postidx++;
    } else {
      if (
        +new Date(posts[postidx].date) -
          +new Date(slates[slateidx].updated_at) <
        0
      ) {
        feedarr.push({
          type: "slate",
          object: slates[slateidx],
        });
        slateidx++;
      } else if (postidx < posts.length) {
        feedarr.push({
          type: "post",
          object: posts[postidx],
        });
        postidx++;
      }
    }
  }
  return { props: { feedarr } };
}
