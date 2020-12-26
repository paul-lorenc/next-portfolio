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
        url: "https://leerob.io/static/images/banner.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
