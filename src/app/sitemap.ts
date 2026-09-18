import type { MetadataRoute } from "next";

const routes = ["", "/loesungen", "/produkte", "/lagewerk", "/unternehmen", "/kontakt", "/impressum", "/datenschutz"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://kaeryon.de${route}`,
    lastModified,
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route === "/lagewerk" ? 0.9 : 0.7,
  }));
}
