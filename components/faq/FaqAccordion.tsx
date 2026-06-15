"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqCategory } from "@/lib/faq-page-data";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  categories: FaqCategory[];
};

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category.id}>
          <h2 className="font-display text-2xl font-semibold text-primary sm:text-3xl">
            {category.title}
          </h2>
          <div className="mt-6 space-y-3">
            {category.items.map((item) => {
              const id = `${category.id}-${item.question.slice(0, 30)}`;
              const isOpen = openId === id;

              return (
                <div
                  key={id}
                  className={cn(
                    "rounded-xl border border-primary/10 bg-neutral transition-colors",
                    isOpen && "bg-white shadow-sm",
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    onClick={() => toggle(id)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-primary sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-accent transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200 ease-in-out",
                      isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <div className="border-t border-primary/10 px-6 pb-5 pt-2">
                      <p className="leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
