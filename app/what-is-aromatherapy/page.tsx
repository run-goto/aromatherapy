import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { getGuide } from "@/data/site";

const guide = getGuide("what-is-aromatherapy");

export const metadata: Metadata = {
  title: "香薰是什么？新手香薰、精油与扩香产品入门",
  description: guide.description,
  alternates: { canonical: "/what-is-aromatherapy" },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: "/what-is-aromatherapy",
    images: [{ url: guide.image, alt: guide.title }]
  }
};

export default function Page() {
  return <ArticlePage slug="what-is-aromatherapy" />;
}
