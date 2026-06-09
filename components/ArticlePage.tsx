import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Card, FaqList, SectionHeader } from "@/components/ui";
import { faqSchema, getGuide, guides, siteUrl } from "@/data/site";

export function ArticlePage({ slug }: { slug: string }) {
  const guide = getGuide(slug);
  const related = guide.related
    .filter((item) => item !== "products")
    .map((item) => guides.find((guideItem) => guideItem.slug === item))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    inLanguage: "zh-CN",
    author: { "@type": "Organization", name: "香息指南" },
    publisher: { "@type": "Organization", name: "香息指南" },
    mainEntityOfPage: `${siteUrl}/${guide.slug}`,
    image: guide.image
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema(guide.faqs)} />
      <article>
        <div className="container-pad py-8">
          <Breadcrumbs items={[{ label: "香薰指南", href: "/guides" }, { label: guide.shortTitle }]} />
        </div>
        <header className="container-pad grid gap-10 pb-12 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">{guide.tag}指南 / {guide.readTime}阅读</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-ink sm:text-5xl">{guide.title}</h1>
            <p className="prose-calm mt-5 max-w-2xl">{guide.description}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] bg-clay shadow-soft">
            <Image src={guide.image} alt={guide.title} fill priority sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
          </div>
        </header>

        <section className="container-pad pb-8">
          <Card className="bg-[#EEF3EA] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold text-moss">快速结论</h2>
            <ul className="body-font mt-5 grid gap-3 text-stone-700 sm:grid-cols-2">
              {guide.quickTakeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <div className="container-pad grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-14">
            <section>
              <h2 className="text-3xl font-semibold text-ink">适合人群</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {guide.audience.map((item) => (
                  <div key={item} className="body-font rounded-2xl border border-stone-200 bg-ivory p-4 text-sm leading-6 text-stone-700 shadow-calm">
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionHeader title="核心知识解释" />
              <div className="space-y-6">
                {guide.knowledge.map((item) => (
                  <div key={item.heading}>
                    <h3 className="text-2xl font-semibold text-moss">{item.heading}</h3>
                    <p className="prose-calm mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <InfoList title="使用方法" items={guide.usage} />
            <InfoList title="注意事项" items={guide.cautions} muted />
            <InfoList title="产品选择建议" items={guide.productAdvice} />

            <section>
              <SectionHeader title="常见问题 FAQ" />
              <FaqList faqs={guide.faqs} />
            </section>

            <section>
              <SectionHeader title="内部链接推荐" description="如果你正在比较不同香薰产品，可以从这些页面继续了解。" />
              <div className="flex flex-wrap gap-3 body-font">
                <Link className="focus-ring rounded-full bg-moss px-5 py-3 text-sm text-white" href="/products">
                  查看产品推荐
                </Link>
                <Link className="focus-ring rounded-full border border-stone-300 bg-ivory px-5 py-3 text-sm text-moss" href="/guides">
                  浏览全部指南
                </Link>
                <Link className="focus-ring rounded-full border border-stone-300 bg-ivory px-5 py-3 text-sm text-moss" href="/essential-oil-safety-guide">
                  阅读安全指南
                </Link>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Card className="p-5">
              <h2 className="body-font text-sm font-semibold text-ink">相关文章推荐</h2>
              <div className="mt-4 space-y-4">
                {related.map((item) =>
                  item ? (
                    <Link key={item.slug} href={`/${item.slug}`} className="focus-ring block rounded-xl p-3 hover:bg-linen">
                      <span className="body-font text-xs text-sage">{item.tag}</span>
                      <span className="mt-1 block text-base font-semibold leading-snug text-ink">{item.shortTitle}</span>
                    </Link>
                  ) : null
                )}
              </div>
            </Card>
          </aside>
        </div>
      </article>
    </>
  );
}

function InfoList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-ink">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item} className={`body-font rounded-2xl p-5 text-sm leading-7 shadow-calm ${muted ? "bg-[#F3E7D8] text-stone-700" : "bg-ivory text-stone-700"}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
