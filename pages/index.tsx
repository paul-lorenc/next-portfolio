import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getSortedPosts } from "@/lib/mdx";
import { getHeaderSlateImages, SlateImage } from "@/lib/slate";
import { ImageCard } from "@/components/ImageCard";
import { useScrollbarSize } from "react-scrollbar-size";
import Link from "next/link";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "@/components/svgs/ImageIcon";
import { LinkIcon } from "@/components/svgs/LinkIcon";

interface AbstractPost {
  type: string;
  object: any;
}

interface Props {
  feedarr: AbstractPost[];
}
export default function Home(props: Props) {
  let feedarr: AbstractPost[] = props.feedarr;
  const { height, width } = useScrollbarSize();
  var scrollStyle = {
    "--scrollbarWidth": width + "px",
  } as React.CSSProperties;
  return (
    <div className="ZRoot" style={scrollStyle}>
      <div className="WindowWidth">
        <div className="LinkLayout">
          <nav className="sticky-nav nav-grid py-4 items-center mx-auto bg-black bg-opacity-60">
            <Link href="/">
              <a aria-label="Home">
                <Monogram styles="max-h-14 text-white hover:text-gray-600 fill-current" />
              </a>
            </Link>
            <Link href="/code">
              <a aria-label="Code Projects">
                <CodeIcon />
              </a>
            </Link>
            <Link href="/images">
              <a aria-label="Images">
                <ImageIcon />
              </a>
            </Link>
            <Link href="/links">
              <a aria-label="Links">
                <LinkIcon />
              </a>
            </Link>
          </nav>
          <div className="max-w-4xl space-y-4">
            {feedarr.map((s: any) => {
              if (s.type === "post") {
                return <ProjectCard project={s.object} />;
              } else {
                return <ImageCard slateImage={s.object} />;
              }
            })}
          </div>
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
