import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink, Card, FaqList, SectionHeader } from "@/components/ui";
import { faqSchema, guides, heroImage, products, scenarios, scentGuide, sceneImages, siteFaqs, siteUrl } from "@/data/site";

export default function Home() {
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "香息指南",
    url: siteUrl,
    description: "帮你按场景选择合适的香薰。"
  };

  return (
    <>
      <JsonLd data={webpageSchema} />
      <JsonLd data={faqSchema(siteFaqs)} />
      <section className="container-pad grid min-h-[calc(100dvh-5rem)] gap-10 py-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-ink sm:text-6xl">
            香薰怎么选？一站式了解香薰、精油与扩香产品
          </h1>
          <p className="prose-calm mt-6 max-w-2xl">
            从助眠、放松、专注、居家氛围到送礼场景，帮你快速找到适合自己的香薰方案。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/best-aromatherapy-for-sleep">查看助眠香薰</ButtonLink>
            <ButtonLink href="/what-is-aromatherapy" variant="secondary">
              阅读香薰入门指南
            </ButtonLink>
          </div>
          <ul className="body-font mt-10 grid max-w-2xl grid-cols-2 gap-3 text-sm text-stone-600 sm:grid-cols-4">
            {["按场景选择", "中文香薰指南", "新手友好", "避免夸大功效"].map((item) => (
              <li key={item} className="rounded-full border border-stone-200 bg-ivory px-4 py-3 text-center shadow-calm">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-clay shadow-soft sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src={heroImage} alt="卧室床头柜上的香薰机、木质托盘、精油瓶和植物" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
          <div className="body-font absolute -bottom-5 left-5 right-5 rounded-3xl bg-ivory/92 p-5 text-sm leading-6 text-stone-700 shadow-soft backdrop-blur">
            卧室、客厅、办公桌和礼物场景，适合的香型与扩香方式并不相同。
          </div>
        </div>
      </section>

      <section className="container-pad section">
        <Card className="bg-[#EEF3EA] p-7 sm:p-10">
          <p className="eyebrow">AI 友好快速摘要</p>
          <h2 className="mt-3 text-3xl font-semibold text-moss">香薰适合哪些人？</h2>
          <p className="prose-calm mt-5 max-w-5xl">
            香薰适合希望改善居家氛围、睡前放松、办公专注、冥想练习或寻找礼物的人群。常见香型包括薰衣草、柑橘、雪松、玫瑰、檀香等，不同香型适合不同使用场景。选择香薰时，建议优先考虑使用场景、香味偏好、空间大小、扩香方式和家庭成员情况。
          </p>
        </Card>
      </section>

      <section className="container-pad section">
        <SectionHeader title="按使用场景选择香薰" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map(([title, desc, href]) => (
            <Link key={title} href={href} className="focus-ring group rounded-soft border border-stone-200 bg-ivory p-6 shadow-calm transition hover:-translate-y-1 hover:shadow-soft">
              <h3 className="text-2xl font-semibold text-ink group-hover:text-moss">{title}</h3>
              <p className="body-font mt-3 text-sm leading-7 text-stone-600">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-pad section">
        <SectionHeader title="香薰新手必读" />
        <GuideGrid />
      </section>

      <section className="section bg-[#EFE7DB]">
        <div className="container-pad">
          <SectionHeader title="按场景选择香薰产品" description="产品推荐以使用场景和香型逻辑为主，不做夸大承诺，更适合作为选购前的内容参考。" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card key={product.name} className="flex flex-col p-5">
                <h3 className="text-xl font-semibold text-ink">{product.name}</h3>
                <p className="body-font mt-3 text-sm leading-6 text-stone-600">适合：{product.fit}</p>
                <p className="body-font mt-2 text-sm leading-6 text-stone-600">推荐香型：{product.scents}</p>
                <p className="body-font mt-4 flex-1 text-sm leading-6 text-stone-500">{product.description}</p>
                <Link className="focus-ring body-font mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-moss px-4 text-sm font-medium text-white" href="/products">
                  查看推荐
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad section grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] shadow-soft">
          <Image src={sceneImages.living} alt="客厅中的自然光、木质桌面和居家香氛" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeader title="常见香型适合什么场景？" />
          <div className="grid gap-3 sm:grid-cols-2">
            {scentGuide.map(([name, desc]) => (
              <div key={name} className="rounded-2xl border border-stone-200 bg-ivory p-5 shadow-calm">
                <h3 className="text-xl font-semibold text-moss">{name}</h3>
                <p className="body-font mt-2 text-sm leading-6 text-stone-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad section">
        <SectionHeader title="香薰常见问题" />
        <FaqList faqs={siteFaqs} />
      </section>
    </>
  );
}

function GuideGrid() {
  const homeGuides = [
    ...guides,
    {
      slug: "what-is-aromatherapy",
      shortTitle: "精油和香薰有什么区别？",
      description: "精油是芳香物质，香薰是围绕香味使用的产品和场景。",
      readTime: "4 分钟",
      tag: "定义"
    }
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {homeGuides.slice(0, 6).map((guide) => (
        <Link key={`${guide.slug}-${guide.shortTitle}`} href={`/${guide.slug}`} className="focus-ring rounded-soft border border-stone-200 bg-ivory p-6 shadow-calm transition hover:-translate-y-1 hover:shadow-soft">
          <span className="body-font text-xs font-medium text-sage">{guide.tag} / {guide.readTime}</span>
          <h3 className="mt-3 text-2xl font-semibold leading-snug text-ink">{guide.shortTitle}</h3>
          <p className="body-font mt-3 text-sm leading-7 text-stone-600">{guide.description}</p>
        </Link>
      ))}
    </div>
  );
}
