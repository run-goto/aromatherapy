import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { getGuide } from "@/data/site";

const guide = getGuide("aromatherapy-for-relaxation");

export const metadata: Metadata = {
  title: "放松减压香薰指南：下班后、阅读、泡澡和冥想",
  description: guide.description,
  alternates: { canonical: "/aromatherapy-for-relaxation" },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: "/aromatherapy-for-relaxation",
    images: [{ url: guide.image, alt: guide.title }]
  }
};

export default function Page() {
  return <ArticlePage slug="aromatherapy-for-relaxation" />;
}
