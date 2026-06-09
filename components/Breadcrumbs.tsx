import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href?: string }> }) {
  return (
    <nav aria-label="面包屑导航" className="body-font text-sm text-stone-500">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="focus-ring rounded hover:text-moss" href="/">
            首页
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link className="focus-ring rounded hover:text-moss" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-stone-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
