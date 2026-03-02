"use client"

import { WifiOff, ShieldCheck, Bot, Gamepad2, Accessibility, Building2, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function SolutionSection() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation()

  const pillars = [
    {
      icon: WifiOff,
      titleKey: "solution.pillar1.title",
      subKey: "solution.pillar1.sub",
      descKey: "solution.pillar1.desc",
      features: ["PWA completa", "Service Workers", "IndexedDB"],
      color: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/30",
    },
    {
      icon: ShieldCheck,
      titleKey: "solution.pillar2.title",
      subKey: "solution.pillar2.sub",
      descKey: "solution.pillar2.desc",
      features: ["Boton de panico", "Auto-borrado 30d", "E2EE"],
      color: "bg-accent/10 text-accent",
      borderColor: "hover:border-accent/30",
    },
    {
      icon: Bot,
      titleKey: "solution.pillar3.title",
      subKey: "solution.pillar3.sub",
      descKey: "solution.pillar3.desc",
      features: ["Llama 3.1 8B", "3 idiomas", "Telefono Rosa DB"],
      color: "bg-chart-4/10 text-chart-4",
      borderColor: "hover:border-chart-4/30",
    },
    {
      icon: Gamepad2,
      titleKey: "solution.pillar4.title",
      subKey: "solution.pillar4.sub",
      descKey: "solution.pillar4.desc",
      features: ["Avatar", "Viaje de Carla", "3 min/dia"],
      color: "bg-chart-5/10 text-chart-5",
      borderColor: "hover:border-chart-5/30",
    },
    {
      icon: Accessibility,
      titleKey: "solution.pillar5.title",
      subKey: "solution.pillar5.sub",
      descKey: "solution.pillar5.desc",
      features: ["Texto a voz", "ARASAAC", "Lectura facil"],
      color: "bg-chart-3/10 text-chart-3",
      borderColor: "hover:border-chart-3/30",
    },
    {
      icon: Building2,
      titleKey: "solution.pillar6.title",
      subKey: "solution.pillar6.sub",
      descKey: "solution.pillar6.desc",
      features: ["SLIM", "CAIs", "Linea 156"],
      color: "bg-destructive/10 text-destructive",
      borderColor: "hover:border-destructive/30",
    },
  ]

  const modules = [
    { nameKey: "solution.mod1", descKey: "solution.mod1d" },
    { nameKey: "solution.mod2", descKey: "solution.mod2d" },
    { nameKey: "solution.mod3", descKey: "solution.mod3d" },
    { nameKey: "solution.mod4", descKey: "solution.mod4d" },
    { nameKey: "solution.mod5", descKey: "solution.mod5d" },
    { nameKey: "solution.mod6", descKey: "solution.mod6d" },
  ]

  return (
    <section id="solucion" className="py-24">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {t("solution.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("solution.title")}{" "}
            <span className="text-primary">{t("solution.titleHighlight")}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("solution.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.titleKey}
              className={`group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 ${pillar.borderColor} hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${pillar.color}`}>
                  <pillar.icon className="h-7 w-7" />
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
              </div>

              <h3 className="mt-6 font-serif text-xl font-bold text-card-foreground">
                {t(pillar.titleKey)}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {t(pillar.subKey)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(pillar.descKey)}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {pillar.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-center font-serif text-2xl font-bold text-foreground mb-8">
            {t("solution.modules")}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <div
                key={mod.nameKey}
                className="rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-primary/20 hover:shadow-md"
              >
                <p className="text-sm font-bold text-card-foreground">{t(mod.nameKey)}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t(mod.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
