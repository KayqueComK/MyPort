import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://meuportifolio-flax-three.vercel.app/sitemap.xml",
  };
}
