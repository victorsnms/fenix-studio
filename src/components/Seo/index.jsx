import { useMemo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Seo = ({ seoData }) => {
  const defaultImageURL = useMemo(() => "http://fenix-studios.com/src/images/logo.png", []);

  return (
    <HelmetProvider context={seoData}>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.imageURL || defaultImageURL} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
