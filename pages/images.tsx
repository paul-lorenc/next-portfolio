import { Container } from "@/components/Container";
import { SlateImage } from "@/lib/slate";
import { getAllSlates } from "@/lib/slate";
import Image from "next/image";

interface Props {
  slates: SlateImage[];
}

export default function Images(props: Props) {
  let slates: SlateImage[] = props.slates;
  console.log(slates);
  return (
    <>
      <Container>
        <div className="max-w-2xl space-y-4 px-8">
          {slates.map((s: SlateImage) => {
            console.log(s.url);
            return (
              <div>
                <Image src={s.url} height="1000" width="1000" />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
export async function getStaticProps() {
  let slates = await getAllSlates();
  return slates;
}
