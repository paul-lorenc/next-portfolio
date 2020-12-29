import Link from "next/link";
import Image from "next/image";
import { FooterIcon } from "./svgs/FooterIcon";

export const Footer: React.FC<any> = () => {
  return (
    <footer className="bg-black max-w-2xl mt-8 mb-4">
      <FooterIcon />
    </footer>
  );
};
