import type { FaqCategory } from "@/lib/faq-page-data";

type FaqAccordionProps = {
  categories: FaqCategory[];
};

export function FaqAccordion({ categories }: FaqAccordionProps) {
  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <section key={category.id} aria-labelledby={`${category.id}-heading`}>
          <h2
            id={`${category.id}-heading`}
            className="font-display text-2xl font-semibold text-primary sm:text-3xl"
          >
            {category.title}
          </h2>
          <div className="mt-6 space-y-6">
            {category.items.map((item) => (
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
        </section>
      ))}
    </div>
  );
}
