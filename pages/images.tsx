import { Container } from "@/components/Container";
import { ImageCard } from "@/components/ImageCard";
import { getHeaderSlateImages, SlateImage } from "@/lib/slate";
import Image from "next/image";
import Link from "next/link";

interface Props {
  slates: SlateImage[];
}

export default function Images(props: Props) {
  let slates: SlateImage[] = props.slates;
  return (
    <>
      <Container>
        <div className="max-w-2xl space-y-4 px-8">
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
