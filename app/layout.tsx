import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://xiangxizhinan.com"),
  title: {
    default: "香息指南｜香薰怎么选，精油、香薰机与居家香氛指南",
    template: "%s｜香息指南"
  },
  description:
    "香息指南是面向中文用户的香薰知识指南，帮助你按助眠、放松、专注、居家氛围和送礼场景选择香薰、精油、香薰机、无火香薰与香薰蜡烛。",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "香息指南",
    title: "香息指南｜帮你按场景选择合适的香薰",
    description: "一站式了解香薰、精油、香薰机、无火香薰和香薰蜡烛。",
    images: [
      {
        url: "/images/hero-bedroom-aromatherapy.png",
        width: 1200,
        height: 630,
        alt: "床头柜上的香薰机、精油瓶与柔和灯光"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
