import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
}

const Seo = ({ title, description, canonicalPath, noindex }: SeoProps) => {
  const canonicalUrl = `https://www.sriainfotech.com${canonicalPath === "/" ? "/" : canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
