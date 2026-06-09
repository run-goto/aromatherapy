import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Card, FaqList, SectionHeader } from "@/components/ui";
import { faqSchema, products, sceneImages, siteFaqs, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "香薰产品推荐：按助眠、居家氛围、办公和送礼选择",
  description: "按卧室、客厅、办公桌和礼物场景推荐香薰套装、扩香产品和适合香型，帮助新手自然选择。",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "香薰产品推荐｜香息指南",
    description: "按场景选择香薰产品，不硬广，先看使用场景和香型。",
    url: "/products",
    images: [{ url: sceneImages.living, alt: "客厅自然光与居家香氛产品" }]
  }
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "香薰产品推荐",
          url: `${siteUrl}/products`,
          description: "按场景选择香薰产品。"
        }}
      />
      <JsonLd data={faqSchema(siteFaqs)} />
      <div className="container-pad py-8">
        <Breadcrumbs items={[{ label: "产品推荐" }]} />
      </div>
      <section className="container-pad grid gap-10 pb-14 pt-4 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-ink">按场景选择香薰产品</h1>
          <p className="prose-calm mt-5 max-w-3xl">
            香薰产品不适合只按“销量”选择。更稳妥的方式是先确定空间、使用时长、气味强度和家庭成员情况，再选择香薰机、无火香薰、蜡烛或礼盒。
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] shadow-soft">
          <Image src={sceneImages.living} alt="自然光客厅中的居家香氛和木质托盘" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
        </div>
      </section>
      <section className="container-pad pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          {products.map((product) => (
            <Card key={product.name} className="p-6">
              <h2 className="text-3xl font-semibold text-ink">{product.name}</h2>
              <div className="body-font mt-5 grid gap-3 text-sm leading-7 text-stone-700 sm:grid-cols-2">
                <p className="rounded-2xl bg-linen p-4">适合：{product.fit}</p>
                <p className="rounded-2xl bg-[#EEF3EA] p-4">推荐香型：{product.scents}</p>
              </div>
              <p className="prose-calm mt-5">{product.description}</p>
              <Link href="/diffuser-vs-reed-diffuser-vs-candle" className="focus-ring body-font mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-stone-300 px-5 text-sm font-medium text-moss">
                先看扩香方式对比
              </Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="container-pad section">
        <SectionHeader title="产品选择前先问自己" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["用在卧室、客厅还是办公桌？", "需要即时关闭还是持续留香？", "家里是否有宠物、儿童或孕妇？", "更喜欢清爽、木质、花香还是茶感？"].map((item) => (
            <Card key={item} className="p-5">
              <h2 className="body-font text-base font-semibold leading-7 text-ink">{item}</h2>
            </Card>
          ))}
        </div>
      </section>
      <section className="container-pad section">
        <SectionHeader title="产品页常见问题" />
        <FaqList faqs={siteFaqs} />
      </section>
    </>
  );
}
