import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Card, FaqList, SectionHeader } from "@/components/ui";
import { faqSchema, guides, scentGuide, siteFaqs, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "香薰指南文章列表：入门、助眠、放松、安全与扩香对比",
  description: "浏览香息指南的中文香薰 SEO 内容矩阵，按入门、场景、扩香方式、安全和香型选择阅读。",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "香薰指南文章列表｜香息指南",
    description: "按入门、助眠、放松、安全和产品对比阅读香薰指南。",
    url: "/guides"
  }
};

export default function GuidesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "香薰指南文章列表",
          url: `${siteUrl}/guides`,
          hasPart: guides.map((guide) => ({ "@type": "Article", headline: guide.title, url: `${siteUrl}/${guide.slug}` }))
        }}
      />
      <JsonLd data={faqSchema(siteFaqs.slice(0, 4))} />
      <div className="container-pad py-8">
        <Breadcrumbs items={[{ label: "香薰指南" }]} />
      </div>
      <section className="container-pad pb-12 pt-4">
        <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-ink">香薰新手与场景选择指南</h1>
        <p className="prose-calm mt-5 max-w-3xl">
          这里整理了香薰、精油、香薰机、无火香薰、香薰蜡烛、助眠、放松和安全使用相关内容。每篇文章都包含快速结论、适合人群、注意事项和 FAQ。
        </p>
      </section>
      <section className="container-pad pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/${guide.slug}`} className="focus-ring rounded-soft border border-stone-200 bg-ivory p-6 shadow-calm transition hover:-translate-y-1 hover:shadow-soft">
              <span className="body-font text-xs font-medium text-sage">{guide.tag} / {guide.readTime}</span>
              <h2 className="mt-3 text-2xl font-semibold leading-snug text-ink">{guide.shortTitle}</h2>
              <p className="body-font mt-3 text-sm leading-7 text-stone-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="container-pad section">
        <SectionHeader title="香型指南" description="用更直接的方式理解不同香型适合的空间与情绪氛围。" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scentGuide.map(([name, desc]) => (
            <Card key={name} className="p-5">
              <h2 className="text-2xl font-semibold text-moss">{name}</h2>
              <p className="body-font mt-2 text-sm leading-7 text-stone-600">{desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="container-pad section">
        <SectionHeader title="指南页常见问题" />
        <FaqList faqs={siteFaqs.slice(0, 4)} />
      </section>
    </>
  );
}
