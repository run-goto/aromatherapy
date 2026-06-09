import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { getGuide } from "@/data/site";

const guide = getGuide("essential-oil-safety-guide");

export const metadata: Metadata = {
  title: "精油安全指南：儿童、宠物、孕妇和日常扩香注意事项",
  description: guide.description,
  alternates: { canonical: "/essential-oil-safety-guide" },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: "/essential-oil-safety-guide",
    images: [{ url: guide.image, alt: guide.title }]
  }
};

export default function Page() {
  return <ArticlePage slug="essential-oil-safety-guide" />;
}
