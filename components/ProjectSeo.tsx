import { NextSeo, ArticleJsonLd } from "next-seo";

interface Props {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
}

const ProjectSeo = ({ title, date, author, excerpt, slug }: Props) => {
  const url: string = `https://paul-lorenc.com/code/${slug}`;
  const projImage: any = {
    url: "https://paul-lorenc/banners/code-banner.png",
    alt: slug,
  };
  return (
    <>
      <NextSeo
        title={`${title} – Paul Lorenc`}
        description={excerpt}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: excerpt,
          images: [projImage],
        }}
      />
      <ArticleJsonLd
        authorName={author}
        dateModified={date}
        datePublished={date}
        description={excerpt}
        images={[projImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Paul Lorenc"
        title={title}
        url={url}
      />
    </>
  );
};

export default ProjectSeo;
