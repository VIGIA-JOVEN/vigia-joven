"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Quote, Shield, MapPin } from "lucide-react"

export function TestimonialsSection() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation()

  const testimonials = [
    {
      textKey: "testimonials.1.text",
      nameKey: "testimonials.1.name",
      locationKey: "testimonials.1.location",
      accent: "border-l-primary",
      bg: "bg-primary/5",
    },
    {
      textKey: "testimonials.2.text",
      nameKey: "testimonials.2.name",
      locationKey: "testimonials.2.location",
      accent: "border-l-accent",
      bg: "bg-accent/5",
    },
    {
      textKey: "testimonials.3.text",
      nameKey: "testimonials.3.name",
      locationKey: "testimonials.3.location",
      accent: "border-l-destructive",
      bg: "bg-destructive/5",
    },
  ]

  return (
    <section className="py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block rounded-full bg-chart-5/10 px-4 py-1.5 text-sm font-semibold text-chart-5">
            {t("testimonials.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("testimonials.title")}{" "}
            <span className="text-primary">{t("testimonials.titleHighlight")}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={item.textKey}
              className={`group relative overflow-hidden rounded-2xl border border-border ${item.bg} border-l-4 ${item.accent} p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="text-base leading-relaxed text-foreground/80 italic">
                {`"${t(item.textKey)}"`}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(item.nameKey)}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {t(item.locationKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`mt-8 text-center text-xs text-muted-foreground/60 italic transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {t("testimonials.disclaimer")}
        </p>
      </div>
    </section>
  )
}
