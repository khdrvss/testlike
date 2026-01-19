import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Co-found.uz",
    short_name: "Co-found.uz",
    description: "Uzbek yechimchilar uchun PWA platforma.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F7FB",
    theme_color: "#173B8F",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml"
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml"
      }
    ]
  };
}
