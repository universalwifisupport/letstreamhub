import { useEffect } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: object | object[];
};

export default function SEO({ title, description, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    if (jsonLd) {
      const id = "site-json-ld";
      const existing = document.getElementById(id);
      if (existing) existing.remove();
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      s.text = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
  }, [title, description, canonical, JSON.stringify(jsonLd)]);

  return null;
}
