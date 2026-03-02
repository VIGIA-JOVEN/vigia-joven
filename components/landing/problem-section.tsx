"use client"

import { WifiOff, Globe, ShieldAlert, MapPinOff } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProblemSection() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation()

  const barriers = [
    {
      icon: WifiOff,
      titleKey: "problem.barrier1.title",
      descKey: "problem.barrier1.desc",
      statKey: "problem.barrier1.stat",
      statLabelKey: "problem.barrier1.statLabel",
    },
    {
      icon: Globe,
      titleKey: "problem.barrier2.title",
      descKey: "problem.barrier2.desc",
      statKey: "problem.barrier2.stat",
      statLabelKey: "problem.barrier2.statLabel",
    },
    {
      icon: ShieldAlert,
      titleKey: "problem.barrier3.title",
      descKey: "problem.barrier3.desc",
      statKey: "problem.barrier3.stat",
      statLabelKey: "problem.barrier3.statLabel",
    },
    {
      icon: MapPinOff,
      titleKey: "problem.barrier4.title",
      descKey: "problem.barrier4.desc",
      statKey: "problem.barrier4.stat",
      statLabelKey: "problem.barrier4.statLabel",
    },
  ]

  return (
    <section id="problema" className="py-24 bg-card">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-semibold text-destructive">
            {t("problem.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("problem.title")}{" "}
            <span className="text-primary">{t("problem.titleHighlight")}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("problem.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {barriers.map((barrier, i) => (
            <div
              key={barrier.titleKey}
              className={`group relative rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <barrier.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                {t(barrier.titleKey)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(barrier.descKey)}
              </p>
              <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-6">
                <span className="font-serif text-3xl font-bold text-primary">
                  {t(barrier.statKey)}
                </span>
                <span className="text-sm text-muted-foreground">{t(barrier.statLabelKey)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
