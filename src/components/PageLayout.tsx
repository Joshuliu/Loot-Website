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
        {schemaItems.map((s, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(s)}
          </script>
        ))}
      </Helmet>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
