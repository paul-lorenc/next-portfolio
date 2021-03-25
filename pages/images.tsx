import { Container } from "@/components/Container";
import { ImageCard } from "@/components/ImageCard";
import { getHeaderSlateImages, SlateImage } from "@/lib/slate";
import { NextSeo } from "next-seo";

const url: string = "https://paul-lorenc.com/images";
const title: string = "Images - Paul Lorenc";
const description: string =
  "Portfolio of visual work I have completed over the years";

interface Props {
  slates: SlateImage[];
}

export default function Images(props: Props) {
  let slates: SlateImage[] = props.slates;
  return (
    <>
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
              url: "https://paul-lorenc.com/banners/images-banner.png",
              alt: description,
            },
          ],
        }}
      />
      <Container>
        <div className="space-y-4">
          {slates.map((s: SlateImage) => {
            return <ImageCard slateImage={s} />;
          })}
        </div>
      </Container>
    </>
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
