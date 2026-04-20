import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, url, image }) {
  const siteUrl = "https://fahriuyar.com.tr";
  const defaultDesc =
    "Fahri Uyar - Full Stack Web Developer & SEO Uzmanı. En uygun altyapının seçilmesi, SEO optimizasyonu ve Google Analytics takibi ile arama motorlarında üst sıralarda çıkma garantili projeler.";
  const defaultImage = `${siteUrl}/images/fahriuyar-og.jpg`; // Varsayılan OG image (ileride eklenebilir)

  const metaTitle = title ? `${title} | Fahri Uyar` : "Fahri Uyar | Uçtan Uca Dijital Çözümler & Web Geliştirme";
  const metaDesc = description || defaultDesc;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
  const metaImage = image ? `${siteUrl}${image}` : defaultImage;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:image" content={metaImage} />
    </Helmet>
  );
}
