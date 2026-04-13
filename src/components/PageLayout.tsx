import { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { Helmet } from "react-helmet-async";

interface Props {
  children: ReactNode;
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: object | object[];
}

export default function PageLayout({ children, title, description, canonicalPath, schema }: Props) {
  const baseUrl = "https://plsloot.me";
  const canonical = canonicalPath ? `${baseUrl}${canonicalPath}` : undefined;
  const socialImage = `${baseUrl}/screenshot.png`;

  const schemaItems = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {canonical && <link rel="canonical" href={canonical} />}

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {canonical && <meta property="og:url" content={canonical} />}
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        {schemaItems.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
        <meta property="og:image" content={`${baseUrl}/screenshot.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseUrl}/screenshot.png`} />
      </Helmet>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
