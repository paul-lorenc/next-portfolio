import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC<any> = () => {
  return (
    <footer className="flex flex-col items-center p-10 text-gray-100 bg-black">
      <Image
        src="/static/images/portfolio-footer.png"
        height={120}
        width={640}
        layout="intrinsic"
        priority
      />
    </footer>
  );
};
