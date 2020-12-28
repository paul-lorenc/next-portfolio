import "../styles/tailwind.css";
import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import MDXComponents from "@/data/MDXComponents";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
