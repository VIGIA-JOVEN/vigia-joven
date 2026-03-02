"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ChevronDown } from "lucide-react"

export function FaqSection() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { qKey: "faq.1.q", aKey: "faq.1.a" },
    { qKey: "faq.2.q", aKey: "faq.2.a" },
    { qKey: "faq.3.q", aKey: "faq.3.a" },
    { qKey: "faq.4.q", aKey: "faq.4.a" },
    { qKey: "faq.5.q", aKey: "faq.5.a" },
  ]

  return (
    <section className="py-24 bg-card">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {t("faq.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("faq.title")}{" "}
            <span className="text-primary">{t("faq.titleHighlight")}</span>
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.qKey}
                className={`overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 ${
                  isOpen ? "shadow-lg shadow-primary/5 border-primary/20" : "hover:border-primary/10"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3 text-base font-semibold text-foreground">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </span>
                    {t(faq.qKey)}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 pl-17 text-sm leading-relaxed text-muted-foreground">
                    {t(faq.aKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
