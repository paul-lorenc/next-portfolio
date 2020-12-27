import {
  getAllSlateSlugs,
  getSlateBySlug,
  Slate,
  SlateImage,
} from "@/lib/slate";
import { Container } from "@/components/Container";
import Link from "next/link";
import Image from "next/image";
import ImageSeo from "@/components/ImageSeo";

interface Props {
  slateimgs: SlateImage[];
  slatename: string;
}

export default function Images(props: Props) {
  let slateimgs: SlateImage[] = props.slateimgs;
  if (slateimgs.length == 0) {
    return <Container></Container>;
  }
  let seoprops: SlateImage = { ...slateimgs[0], slatename: props.slatename };
  return (
    <>
      <Container>
        <ImageSeo slateimg={seoprops} />
        <div className="flex flex-col">
          <p className="text-gray-200 font-bold text-lg pb-5 pl-8">
            {props.slatename}
          </p>
          <div className="max-w-2xl space-y-4 px-8">
            {slateimgs.map((s: SlateImage) => {
              return (
                <a>
                  <img src={s.url} width="100%" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
}
export async function getStaticPaths() {
  const paths = getAllSlateSlugs();
  return paths;
}
export async function getStaticProps({ params }: any) {
  let slate: Slate | null = await getSlateBySlug(params.slug);
  slate = slate as Slate;
  const slateimgs: SlateImage[] = slate.data.objects;
  const slatename: string = slate.slatename;
  return {
    props: { slateimgs, slatename },
  };
}
