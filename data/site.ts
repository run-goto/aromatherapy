export const siteUrl = "https://aromatherapy.miana.top";
export const pathUrl = "https://miana.top/aromatherapy";
export const subdomainUrl = "https://aromatherapy.miana.top";

export const heroImage = "/images/hero-bedroom-aromatherapy.webp";

export const sceneImages = {
  sleep: "/images/hero-bedroom-aromatherapy.webp",
  living: "/images/living-room-reed-diffuser.webp",
  desk: "/images/desk-aromatherapy-focus.webp",
  candle: "/images/evening-candle-ritual.webp"
};

export const siteFaqs = [
  {
    question: "香薰真的能助眠吗？",
    answer:
      "香薰不能被表述为治疗失眠。它更适合作为营造睡前放松氛围的生活方式工具，部分人会把柔和香味、调暗灯光和固定作息一起作为睡前仪式。"
  },
  {
    question: "卧室适合用什么香薰？",
    answer: "卧室更适合薰衣草、洋甘菊、雪松、白茶等柔和香型，建议控制浓度并保持通风。"
  },
  {
    question: "香薰机和无火香薰哪个好？",
    answer:
      "香薰机适合需要定时、调节扩香强度和短时间使用的人；无火香薰适合持续、低维护的空间香氛，例如玄关、客厅或卫生间。"
  },
  {
    question: "有宠物、儿童或孕妇的家庭可以用香薰吗？",
    answer:
      "需要谨慎。建议选择低浓度、短时间、保持通风，避免让儿童或宠物直接接触精油；孕期、呼吸系统疾病或特殊健康情况请先咨询专业人士。"
  },
  {
    question: "香薰可以每天使用吗？",
    answer: "可以作为日常氛围用品，但建议控制使用时间，保持空气流通，避免过浓或长时间封闭空间扩香。"
  },
  {
    question: "新手应该买哪种香薰？",
    answer: "新手可以从无火香薰、香薰机套装或温和香型开始，例如白茶、薰衣草、柑橘，再根据空间和场景逐步调整。"
  }
];

export const scenarios = [
  ["助眠香薰", "适合睡前放松、卧室氛围和晚间仪式感。", "/best-aromatherapy-for-sleep"],
  ["放松减压", "适合下班后、泡澡、阅读、冥想等安静场景。", "/aromatherapy-for-relaxation"],
  ["办公专注", "适合书桌、居家办公和学习时使用。", "/guides"],
  ["居家氛围", "适合客厅、玄关、卧室和日常空间香氛。", "/products"],
  ["冥想瑜伽", "适合呼吸练习、瑜伽和安静独处时刻。", "/aromatherapy-for-relaxation"],
  ["送礼推荐", "适合生日、乔迁、节日和日常礼物。", "/products"]
] as const;

export const scentGuide = [
  ["薰衣草", "适合睡前放松、卧室氛围。"],
  ["柑橘", "适合早晨、办公、清新空间。"],
  ["雪松", "适合秋冬、客厅、安静阅读。"],
  ["玫瑰", "适合卧室、礼物、柔和浪漫氛围。"],
  ["檀香", "适合冥想、瑜伽、深度放松。"],
  ["白茶", "适合客厅、玄关、日常家居氛围。"]
] as const;

export const products = [
  {
    name: "睡前放松香薰套装",
    fit: "卧室、睡前、晚间放松",
    scents: "薰衣草、洋甘菊、雪松",
    description: "适合希望建立睡前仪式感的人，优先选择扩香可控、气味柔和的组合。"
  },
  {
    name: "居家氛围扩香套装",
    fit: "客厅、玄关、日常空间",
    scents: "白茶、雪松、柑橘、玫瑰",
    description: "适合希望家里一进门有干净气味的人，无火香薰和低浓度扩香更容易维护。"
  },
  {
    name: "办公桌香薰",
    fit: "书桌、办公室、学习空间",
    scents: "薄荷、柠檬、迷迭香",
    description: "适合短时间工作或学习场景，建议选择清爽、不厚重、不打扰他人的香型。"
  },
  {
    name: "香薰礼盒",
    fit: "生日礼物、乔迁礼物、节日礼物",
    scents: "玫瑰、白茶、檀香、柑橘",
    description: "适合送给对香味偏好不明确的人，优先选择接受度高、包装克制的中性香型。"
  }
];

export type Guide = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  readTime: string;
  tag: string;
  image: string;
  quickTakeaways: string[];
  audience: string[];
  knowledge: Array<{ heading: string; body: string }>;
  usage: string[];
  cautions: string[];
  productAdvice: string[];
  faqs: Array<{ question: string; answer: string }>;
  related: string[];
};

export const guides: Guide[] = [
  {
    slug: "what-is-aromatherapy",
    title: "香薰是什么？新手如何理解精油、香薰与扩香产品",
    shortTitle: "香薰是什么？",
    description: "从定义、常见类型、使用场景和新手选择方法，系统了解香薰与居家香氛。",
    readTime: "6 分钟",
    tag: "入门",
    image: heroImage,
    quickTakeaways: [
      "香薰是通过香味营造空间氛围和使用仪式感的生活方式用品。",
      "精油、香薰机、无火香薰和香薰蜡烛的扩香方式不同，适合的空间也不同。",
      "新手选择香薰时，应先看使用场景，再看香型和空间大小。",
      "香薰不应被描述为医疗手段，使用时要注意通风和浓度。"
    ],
    audience: ["第一次购买香薰的人", "想区分精油、香薰机、蜡烛和无火香薰的人", "希望改善居家氛围但不想踩雷的人"],
    knowledge: [
      {
        heading: "香薰的核心是场景",
        body:
          "香薰并不是单一产品，而是一组围绕香味、空间和行为习惯的使用方式。卧室更重视柔和和可控，客厅更重视留香和舒适，办公桌则需要清爽、低干扰。"
      },
      {
        heading: "精油与香薰不是同一个概念",
        body:
          "精油通常指从植物中提取的芳香物质；香薰则是更广义的使用场景和产品类别，包括香薰机、香薰蜡烛、无火香薰、香氛喷雾等。"
      }
    ],
    usage: ["先确定卧室、客厅、办公桌或送礼等场景。", "选择 1-2 个接受度高的香型开始，例如白茶、薰衣草、柑橘。", "短时间试用，观察气味强度和家人接受度。"],
    cautions: ["不要在密闭空间长时间高浓度扩香。", "儿童、宠物、孕妇或呼吸敏感人群需要谨慎。", "避免把香薰描述为治疗用品。"],
    productAdvice: ["卧室优先选可定时香薰机或温和无火香薰。", "客厅可选白茶、雪松、柑橘等空间接受度高的香型。", "送礼优先选包装克制、香型中性的套装。"],
    faqs: siteFaqs.slice(0, 4),
    related: ["best-aromatherapy-for-sleep", "diffuser-vs-reed-diffuser-vs-candle", "essential-oil-safety-guide"]
  },
  {
    slug: "best-aromatherapy-for-sleep",
    title: "助眠香薰怎么选？适合睡前放松的香型与使用方法",
    shortTitle: "助眠香薰推荐哪些味道？",
    description: "了解适合卧室和睡前仪式的香型、扩香方式、使用时长和安全注意事项。",
    readTime: "7 分钟",
    tag: "助眠",
    image: sceneImages.sleep,
    quickTakeaways: [
      "助眠香薰更准确的作用是帮助营造放松的睡前氛围。",
      "薰衣草、洋甘菊、雪松、白茶更适合卧室使用。",
      "睡前建议低浓度、短时间扩香，不要整夜高强度使用。",
      "固定香味、灯光和入睡前动作，有助于形成睡前仪式感。"
    ],
    audience: ["希望睡前更容易安静下来的人", "想为卧室选择柔和香型的人", "正在建立睡前仪式的人"],
    knowledge: [
      {
        heading: "助眠香薰不是治疗失眠",
        body:
          "香薰不能替代医学建议。它适合与调暗灯光、减少屏幕使用、规律作息一起，构成更稳定的睡前环境。"
      },
      {
        heading: "卧室香味要轻，不要厚",
        body:
          "卧室香薰的重点不是存在感强，而是柔和、干净、容易散去。过甜、过辛辣或过浓的香型可能影响舒适度。"
      }
    ],
    usage: ["睡前 30-60 分钟开启香薰机或摆放低浓度扩香。", "保持房间通风，不建议整夜高强度扩香。", "把香味与阅读、拉伸、冥想等固定动作搭配。"],
    cautions: ["不要把香薰当作治疗失眠的方法。", "对气味敏感时应立即停止使用。", "宠物和儿童活动空间应降低浓度并避免误触。"],
    productAdvice: ["优先选择带定时功能的香薰机。", "无火香薰适合喜欢低维护的人，但卧室要控制藤条数量。", "香薰蜡烛适合短时间仪式感，但必须有人看管。"],
    faqs: [siteFaqs[0], siteFaqs[1], siteFaqs[4], siteFaqs[3]],
    related: ["what-is-aromatherapy", "essential-oil-safety-guide", "products"]
  },
  {
    slug: "aromatherapy-for-relaxation",
    title: "放松减压香薰指南：下班后、阅读、泡澡和冥想怎么选",
    shortTitle: "放松减压香薰",
    description: "按下班后、阅读、泡澡、冥想等场景，选择适合放松氛围的香型和扩香方式。",
    readTime: "7 分钟",
    tag: "放松",
    image: sceneImages.candle,
    quickTakeaways: [
      "放松场景适合木质、草本、茶感和柔和花香。",
      "香薰可以帮助空间从工作状态切换到休息状态。",
      "泡澡和蜡烛场景要特别注意明火与通风。",
      "下班后建议选择不刺激、不厚重、留香舒适的香型。"
    ],
    audience: ["下班后想快速切换状态的人", "喜欢阅读、泡澡、冥想的人", "想让家里更安静、有温度的人"],
    knowledge: [
      {
        heading: "放松来自环境线索",
        body:
          "香味、灯光、音乐和空间整理都会成为身体识别休息时间的线索。香薰的价值在于让这种切换更明确。"
      },
      {
        heading: "不同放松场景适合不同香型",
        body:
          "阅读可选雪松、檀香、白茶；泡澡可选薰衣草、玫瑰、柑橘；冥想瑜伽则更适合檀香、雪松和草本调。"
      }
    ],
    usage: ["下班回家先通风，再短时间扩香。", "泡澡或点蜡烛时保持人在场，远离织物。", "冥想时选择稳定、低甜度的香型，避免注意力被香味打断。"],
    cautions: ["明火香薰必须远离窗帘、纸张和木制边缘。", "不要把放松香薰描述为治疗焦虑。", "香味过浓时应减少用量或缩短时间。"],
    productAdvice: ["阅读场景适合雪松、白茶、檀香。", "泡澡场景可以选择蜡烛，但要优先考虑安全。", "冥想瑜伽可选低浓度精油扩香。"],
    faqs: [siteFaqs[4], siteFaqs[3], siteFaqs[5], siteFaqs[2]],
    related: ["best-aromatherapy-for-sleep", "diffuser-vs-reed-diffuser-vs-candle", "products"]
  },
  {
    slug: "diffuser-vs-reed-diffuser-vs-candle",
    title: "香薰机、无火香薰和香薰蜡烛怎么选？三类扩香方式对比",
    shortTitle: "香薰机、无火香薰和香薰蜡烛怎么选？",
    description: "从扩香强度、维护成本、适合空间、安全性和新手友好度，对比三类常见香薰产品。",
    readTime: "8 分钟",
    tag: "对比",
    image: sceneImages.living,
    quickTakeaways: [
      "香薰机适合需要控制时长和浓度的人。",
      "无火香薰适合持续、低维护的空间香氛。",
      "香薰蜡烛适合短时间仪式感，但需要注意明火安全。",
      "新手可从无火香薰或香薰机套装开始。"
    ],
    audience: ["不知道买香薰机还是无火香薰的人", "想为不同房间选择扩香方式的人", "关注维护和安全的新手"],
    knowledge: [
      {
        heading: "香薰机：可控但需要清洁",
        body:
          "香薰机适合卧室、书桌和短时间使用，优点是开关、定时和强度更可控；缺点是需要加水、清洁和注意精油用量。"
      },
      {
        heading: "无火香薰：稳定但不易即时关闭",
        body:
          "无火香薰适合玄关、客厅和卫生间，使用门槛低，但扩香强度主要靠藤条数量和空间通风控制。"
      },
      {
        heading: "香薰蜡烛：氛围强但有明火",
        body:
          "香薰蜡烛适合阅读、泡澡和短时间仪式感，使用时必须有人看管，并远离易燃物。"
      }
    ],
    usage: ["卧室选香薰机时使用定时功能。", "无火香薰先少放藤条，逐步增加扩香强度。", "蜡烛每次燃烧前修剪烛芯，并放在稳定隔热表面。"],
    cautions: ["香薰机要定期清洁，避免残留气味混杂。", "无火香薰瓶身应远离儿童和宠物。", "香薰蜡烛不要无人看管。"],
    productAdvice: ["怕麻烦选无火香薰。", "想控制使用时间选香薰机。", "重视仪式感且能看管明火，可以选择香薰蜡烛。"],
    faqs: [siteFaqs[2], siteFaqs[5], siteFaqs[3], siteFaqs[4]],
    related: ["what-is-aromatherapy", "best-aromatherapy-for-sleep", "products"]
  },
  {
    slug: "essential-oil-safety-guide",
    title: "精油安全指南：儿童、宠物、孕妇和日常扩香要注意什么",
    shortTitle: "香薰使用安全吗？",
    description: "了解精油浓度、通风、接触风险、特殊人群和日常扩香安全建议。",
    readTime: "8 分钟",
    tag: "安全",
    image: sceneImages.desk,
    quickTakeaways: [
      "精油和香薰产品应低浓度、短时间、保持通风使用。",
      "儿童、宠物、孕妇和呼吸敏感人群需要额外谨慎。",
      "不要直接接触高浓度精油，也不要让儿童或宠物误食。",
      "如有特殊健康情况，应咨询专业人士。"
    ],
    audience: ["家里有儿童、宠物或孕妇的人", "第一次使用精油的人", "担心香薰浓度和通风问题的人"],
    knowledge: [
      {
        heading: "安全使用的核心是浓度和通风",
        body:
          "大多数居家香薰问题来自过浓、过久或密闭空间使用。选择低浓度、短时间并保持空气流通，是更稳妥的方式。"
      },
      {
        heading: "特殊家庭成员要优先考虑",
        body:
          "宠物、儿童和孕妇对气味和成分的耐受情况不同，使用前应谨慎评估，并避免直接接触精油原液。"
      }
    ],
    usage: ["第一次使用先短时间试香。", "扩香时留出通风条件，不在密闭空间长时间使用。", "精油瓶、香薰瓶和蜡烛放在儿童与宠物接触不到的位置。"],
    cautions: ["不要口服精油。", "不要把精油原液直接用于皮肤。", "出现不适时停止使用并通风。"],
    productAdvice: ["特殊家庭优先选择低浓度、可控、易停止的扩香方式。", "卧室和儿童活动区避免过甜、过浓、刺激性强的香型。", "购买时查看成分说明和使用建议。"],
    faqs: [siteFaqs[3], siteFaqs[4], siteFaqs[0], siteFaqs[5]],
    related: ["what-is-aromatherapy", "diffuser-vs-reed-diffuser-vs-candle", "products"]
  }
];

export function getGuide(slug: string) {
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) {
    throw new Error(`Guide not found: ${slug}`);
  }
  return guide;
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
