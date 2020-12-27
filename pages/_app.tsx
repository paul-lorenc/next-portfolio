import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import MDXComponents from "@/data/MDXComponents";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
