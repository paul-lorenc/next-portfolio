import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getSortedPosts } from "@/lib/mdx";
import { getHeaderSlateImages, SlateImage } from "@/lib/slate";
import { ImageCard } from "@/components/ImageCard";

interface AbstractPost {
  type: string;
  object: any;
}

interface Props {
  feedarr: AbstractPost[];
}
export default function Home(props: Props) {
  let feedarr: AbstractPost[] = props.feedarr;
  return (
    <>
      <Container>
        <div className="max-w-2xl space-y-4 px-8">
          {feedarr.map((s: any) => {
            if (s.type === "post") {
              return <ProjectCard project={s.object} />;
            } else {
              return <ImageCard slateImage={s.object} />;
            }
          })}
        </div>
      </Container>
    </>
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
