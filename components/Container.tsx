import NextLink from "next/link";
import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Monogram } from "@/components/Monogram";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="bg-black font-serif">
      <nav className="sticky-nav flex justify-between max-w-5xl w-full items-center mb-8 p-8 my-0 md:my-8 mx-auto bg-black bg-opacity-60">
        <NextLink href="/">
          <div>
            <Monogram />
          </div>
        </NextLink>
        <div>
          <NextLink href="/code">
            <a className="p-1 sm:p-4 text-gray-100">Code</a>
          </NextLink>
          <NextLink href="/images">
            <a className="p-1 sm:p-4 text-gray-100">Images</a>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col items-center bg-black px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
};
