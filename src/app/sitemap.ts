import type { MetadataRoute } from "next";

const routes = [
  "",
  "/public-gym",
  "/private-training",
  "/locations",
  "/about",
  "/contact",
  "/book-consultation"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://a2fgym.com";
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
