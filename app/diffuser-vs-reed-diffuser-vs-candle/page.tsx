import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
import { getGuide } from "@/data/site";

const guide = getGuide("diffuser-vs-reed-diffuser-vs-candle");

export const metadata: Metadata = {
  title: "香薰机、无火香薰、香薰蜡烛怎么选？扩香方式对比",
  description: guide.description,
  alternates: { canonical: "/diffuser-vs-reed-diffuser-vs-candle" },
  openGraph: {
    title: guide.title,
    description: guide.description,
    url: "/diffuser-vs-reed-diffuser-vs-candle",
    images: [{ url: guide.image, alt: guide.title }]
  }
};

export default function Page() {
  return <ArticlePage slug="diffuser-vs-reed-diffuser-vs-candle" />;
}
