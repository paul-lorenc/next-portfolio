import { Container } from "@/components/Container";
import { ImageCard } from "@/components/ImageCard";
import { getHeaderSlateImages, SlateImage } from "@/lib/slate";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { Monogram } from "@/components/svgs/Monogram";
import { CodeIcon } from "@/components/svgs/CodeIcon";
import { ImageIcon } from "@/components/svgs/ImageIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { getSortedPosts } from "@/lib/mdx";
import { LinkIcon } from "@/components/svgs/LinkIcon";
import { useScrollbarSize } from "react-scrollbar-size";

const url: string = "https://paul-lorenc.com/images";
const title: string = "Images - Paul Lorenc";
const description: string =
  "Portfolio of visual work I have completed over the years";

interface Props {
  slates: SlateImage[];
}

export default function Images(props: Props) {
  let slates: SlateImage[] = props.slates;
  const { height, width } = useScrollbarSize();
  var scrollStyle = {
    "--scrollbarWidth": width + "px",
  } as React.CSSProperties;
  return (
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
              url: "https://paul-lorenc.com/banners/banner.png",
              alt: description,
            },
          ],
        }}
      />
      <div className="space-y-4">
        {slates.map((s: SlateImage) => {
          return <ImageCard slateImage={s} />;
        })}
      </div>
    </Container>
  );
}
export async function getStaticProps() {
  let slates = await getHeaderSlateImages();
  return {
    props: {
      slates,
    },
  };
}
