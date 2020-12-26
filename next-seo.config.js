const title = "Paul Lorenc";
const description = "Software Developer";

const SEO = {
  title,
  description,
  canonical: "https://paul-lorenc.com",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://paul-lorenc.com",
    title,
    description,
    images: [
      {
        url: "https://paul-lorenc/banners/home-banner.png",
        alt: title,
        width: 1280,
        height: 640,
      },
    ],
  },
};

export default SEO;
