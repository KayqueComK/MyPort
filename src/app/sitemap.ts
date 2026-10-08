import type { MetadataRoute } from "next";

const baseUrl = "https://meuportifolio-flax-three.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/contact"];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
