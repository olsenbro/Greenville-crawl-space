"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { HomeFaqItem } from "@/lib/home-faq";
import { cn } from "@/lib/utils";

type HomeFaqAccordionProps = {
  items: HomeFaqItem[];
};

export function HomeFaqAccordion({ items }: HomeFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className={cn(
              "rounded-xl border border-primary/10 bg-neutral transition-colors",
              isOpen && "bg-white shadow-sm",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
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
  );
}
