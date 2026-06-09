import Link from "next/link";

const nav = [
  { href: "/what-is-aromatherapy", label: "香薰入门" },
  { href: "/best-aromatherapy-for-sleep", label: "助眠香薰" },
  { href: "/guides", label: "香型指南" },
  { href: "/products", label: "产品推荐" },
  { href: "/essential-oil-safety-guide", label: "安全指南" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-ivory/88 backdrop-blur-md">
      <a className="sr-only focus:not-sr-only focus-ring absolute left-4 top-4 rounded-full bg-ivory px-4 py-2 body-font" href="#main">
        跳到正文
      </a>
      <div className="container-pad flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="focus-ring flex flex-col rounded-lg">
          <span className="text-2xl font-semibold text-moss">香息指南</span>
          <span className="body-font text-xs text-stone-500">帮你按场景选择合适的香薰</span>
        </Link>
        <nav className="hidden items-center gap-7 body-font text-sm text-stone-700 lg:flex" aria-label="主导航">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="focus-ring rounded-md hover:text-moss">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/products"
          className="focus-ring body-font inline-flex min-h-11 items-center justify-center rounded-full bg-moss px-5 text-sm font-medium text-white shadow-calm transition hover:bg-sage"
        >
          开始选择香薰
        </Link>
      </div>
    </header>
  );
}
