import Link from "next/link";

export function SectionHeader({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? <p className="prose-calm mt-3">{description}</p> : null}
    </div>
  );
}

export function Card({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`rounded-soft border border-stone-200/80 bg-ivory shadow-calm ${className}`}>{children}</div>;
}

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-moss text-white shadow-calm hover:bg-sage"
      : "border border-stone-300 bg-ivory text-moss hover:border-sage hover:bg-white";
  return (
    <Link
      href={href}
      className={`focus-ring body-font inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition ${styles}`}
    >
      {children}
    </Link>
  );
}

export function FaqList({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-2xl border border-stone-200 bg-ivory p-5 shadow-calm">
          <summary className="body-font flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink">
            {faq.question}
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-linen text-moss transition group-open:rotate-45">+</span>
          </summary>
          <p className="body-font mt-4 text-sm leading-7 text-stone-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
