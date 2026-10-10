import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SPARK — Find your frequency",
    short_name: "SPARK",
    description: "A little chemistry, right where you are.",
    start_url: "/",
    display: "standalone",
    background_color: "#160F24",
    theme_color: "#160F24",
    icons: [{ src: "/spark.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
