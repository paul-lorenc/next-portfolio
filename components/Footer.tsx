import Link from "next/link";
import Image from "next/image";
import { FooterIcon } from "./svgs/FooterIcon";

export const Footer: React.FC<any> = () => {
  return (
    <footer className="flex bg-black flex-col max-w-2xl items-center p-10 text-gray-100 p-8">
      <FooterIcon />
    </footer>
  );
};
