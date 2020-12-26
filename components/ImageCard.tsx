import { Slate, SlateImage } from "@/lib/slate";
import Image from "next/image";
import Link from "next/link";
interface Props {
  slateImage: SlateImage;
}

export const ImageCard: React.FC<any> = (props: Props) => {
  let s: SlateImage = props.slateImage;
  return (
    <Link key={s.slatename} href={`/images/${encodeURIComponent(s.slatename)}`}>
      <div className="p-6 border border-gray-800 hover:border-gray-700 min-w-2xl">
        <Image src={s.url} width="1000" height="1000" quality={100} />
      </div>
    </Link>
  );
};
