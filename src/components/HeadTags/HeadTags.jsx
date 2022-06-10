import Head from "next/head";

const HeadTags = ({ metadata = {} }) => {
  const SEO = {
    title: metadata.title || "Frantisek Klucar - Fero",
    description: metadata.description || "Personal web",
    slug: metadata.slug || "",
    image: "/assets/default.jpg",
    date: metadata.date || new Date().toISOString(),
    domain: "https://web-wolfero.vercel.app/",
    site_name: "Frantisek Klucar",
  };

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={SEO.description} name="description" />
      <meta property="og:url" content={`${SEO.domain}/${SEO.slug}`} />
      <link rel="canonical" href={`${SEO.domain}/${SEO.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SEO.site_name} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:image" content={SEO.image} />
      <meta property="article:published_time" content={SEO.date} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="shortcut icon" href="/wolfero.ico" />
    </Head>
  );
};

export default HeadTags;
