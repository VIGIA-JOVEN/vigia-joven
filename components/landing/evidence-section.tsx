"use client"

import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Globe, Sparkles, Gamepad2 } from "lucide-react"

export function EvidenceSection() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation()

  const studies = [
    {
      titleKey: "evidence.cyber.title",
      countryKey: "evidence.cyber.country",
      descKey: "evidence.cyber.desc",
      insightKey: "evidence.cyber.insight",
      icon: Globe,
      color: "bg-primary",
      lightColor: "bg-primary/10 text-primary",
    },
    {
      titleKey: "evidence.nthabi.title",
      countryKey: "evidence.nthabi.country",
      descKey: "evidence.nthabi.desc",
      insightKey: "evidence.nthabi.insight",
      icon: Sparkles,
      color: "bg-accent",
      lightColor: "bg-accent/10 text-accent",
    },
    {
      titleKey: "evidence.gonisha.title",
      countryKey: "evidence.gonisha.country",
      descKey: "evidence.gonisha.desc",
      insightKey: "evidence.gonisha.insight",
      icon: Gamepad2,
      color: "bg-chart-3",
      lightColor: "bg-chart-3/10 text-chart-3",
    },
  ]

  return (
    <section id="evidencia" className="py-24 bg-card">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block rounded-full bg-chart-4/10 px-4 py-1.5 text-sm font-semibold text-chart-4">
            {t("evidence.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("evidence.title")}{" "}
            <span className="text-primary">{t("evidence.titleHighlight")}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("evidence.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {studies.map((study, i) => (
            <div
              key={study.titleKey}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-background transition-all duration-500 hover:border-primary/30 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className={`h-2 ${study.color}`} />
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${study.lightColor}`}>
                    <study.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground">
                      {t(study.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground">{t(study.countryKey)}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {t(study.descKey)}
                </p>
                <div className="mt-6 rounded-xl bg-secondary p-4">
                  <p className="text-xs font-bold text-secondary-foreground">
                    {t(study.insightKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
