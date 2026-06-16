import type { HomeFaqItem } from "@/lib/home-faq";

type HomeFaqAccordionProps = {
  items: HomeFaqItem[];
};

export function HomeFaqAccordion({ items }: HomeFaqAccordionProps) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <article
          key={item.question}
          className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm"
        >
          <h3 className="font-display text-lg font-semibold text-primary sm:text-xl">
            {item.question}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
        </article>
      ))}
    </div>
  );
}
