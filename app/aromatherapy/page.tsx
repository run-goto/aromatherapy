import type { Metadata } from "next";
import Home from "@/app/page";

export const metadata: Metadata = {
  title: "香薰知识指南与场景化产品推荐",
  description:
    "香息指南帮助中文用户按助眠、放松、专注、居家氛围和送礼场景选择香薰、精油、香薰机、无火香薰与香薰蜡烛。",
  alternates: { canonical: "/aromatherapy" },
  openGraph: {
    title: "香息指南｜香薰知识指南与场景化产品推荐",
    description: "从香薰入门到助眠、放松、扩香方式和安全使用，一站式了解如何选择香薰。",
    url: "/aromatherapy",
    images: [
      {
        url: "/images/hero-bedroom-aromatherapy.png",
        alt: "卧室床头柜上的香薰机、精油瓶与柔和灯光"
      }
    ]
  }
};

export default function AromatherapyPathPage() {
  return <Home />;
}
