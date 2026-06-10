import Link from "next/link";
import { VisitCounter } from "@/components/VisitCounter";

const groups = [
  {
    title: "香薰入门",
    links: [
      ["香薰是什么", "/what-is-aromatherapy"],
      ["安全说明", "/essential-oil-safety-guide"],
      ["常见问题", "/guides"]
    ]
  },
  {
    title: "场景指南",
    links: [
      ["助眠香薰", "/best-aromatherapy-for-sleep"],
      ["放松减压", "/aromatherapy-for-relaxation"],
      ["扩香对比", "/diffuser-vs-reed-diffuser-vs-candle"]
    ]
  },
  {
    title: "内容推荐",
    links: [
      ["产品推荐", "/products"],
      ["全部指南", "/guides"],
      ["关于本站", "/what-is-aromatherapy"]
    ]
  }
];

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#F3EADF]">
      <div className="container-pad py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="text-3xl font-semibold text-moss">香息指南</p>
            <p className="body-font mt-3 max-w-sm text-sm leading-6 text-stone-600">
              面向中文用户的香薰知识指南，以清晰、克制、场景化的方式帮助你理解香薰与居家香氛。
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="body-font text-sm font-semibold text-ink">{group.title}</h2>
                <ul className="mt-4 space-y-3 body-font text-sm text-stone-600">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link className="focus-ring rounded hover:text-moss" href={href}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="body-font mt-10 border-t border-stone-300/70 pt-6 text-xs leading-6 text-stone-500">
          本站内容仅用于香薰、家居香氛和生活方式参考，不提供医疗诊断、治疗建议或处方建议。如有孕期、儿童、宠物、呼吸系统疾病或特殊健康情况，请咨询专业人士。
        </p>
        <p className="body-font mt-3 text-xs text-stone-500">
          <VisitCounter />
        </p>
      </div>
    </footer>
  );
}
