import Link from "next/link";
import Image from "next/image";
import { FooterIcon } from "./svgs/FooterIcon";

export const Footer: React.FC<any> = () => {
  return (
    <footer className="flex flex-col items-center p-10 text-gray-100 bg-black">
      <FooterIcon />
    </footer>
  );
};
