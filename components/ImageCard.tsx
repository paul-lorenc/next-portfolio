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
      <div className=" border border-gray-800 hover:border-gray-600">
        <Image
          src={s.url}
          width="1000"
          height="1000"
          quality={100}
          alt={s.body}
        />
      </div>
    </Link>
  );
};
