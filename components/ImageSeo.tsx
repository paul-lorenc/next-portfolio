import { NextSeo, ArticleJsonLd } from "next-seo";
import { SlateImage } from "@/lib/slate";

interface Props {
  slateimg: SlateImage;
}

const ImageSeo = ({ slateimg }: Props) => {
  const url: string = `https://paul-lorenc.com/images/${slateimg.slatename}`;
  const projImage: any = {
    url: slateimg.url,
    alt: slateimg.slatename,
  };
  return (
    <>
      <NextSeo
        title={`${slateimg.slatename} – Paul Lorenc`}
        description={slateimg.slatename}
        canonical={url}
        openGraph={{
          url,
          title: slateimg.slatename,
          description: "Work by Paul Lorenc",
          images: [projImage],
        }}
      />
    </>
  );
};

export default ImageSeo;
