import { Metadata } from "next";

export const siteConfig = {
  name: "J☺︎mIG",
  domain: "go.jomig.my",
  shortName: "J☺︎mIG",
  creator: "Suresh Kaleyannan",
  description:
    "Fast, free, and no login required. Just paste the URL and download.",
  ogDescription:
    "Fast, free, and no login required. Just paste the URL and download.",
  url: "https://jomig.my",
};

export const siteMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.ogDescription,
    creator: siteConfig.creator,
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/webmanifest.json",
};
