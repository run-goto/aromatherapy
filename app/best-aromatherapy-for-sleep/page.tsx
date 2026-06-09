import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { getGuide } from "@/data/site";

const guide = getGuide("best-aromatherapy-for-sleep");

export const metadata: Metadata = {
  title: "助眠香薰怎么选？适合睡前放松的香型推荐",
  description: guide.description,
  alternates: { canonical: "/best-aromatherapy-for-sleep" },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: "/best-aromatherapy-for-sleep",
    images: [{ url: guide.image, alt: guide.title }]
  }
};

export default function Page() {
  return <ArticlePage slug="best-aromatherapy-for-sleep" />;
}
