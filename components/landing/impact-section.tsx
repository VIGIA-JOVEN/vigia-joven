"use client"

import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n"

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let start = 0
    const increment = target / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return { count, ref }
}

export function ImpactSection() {
  const { t } = useI18n()

  const metrics = [
    {
      valueKey: "impact.metric1.value",
      suffixKey: "impact.metric1.suffix",
      labelKey: "impact.metric1.label",
      descKey: "impact.metric1.desc",
    },
    {
      valueKey: "impact.metric2.value",
      suffixKey: "impact.metric2.suffix",
      labelKey: "impact.metric2.label",
      descKey: "impact.metric2.desc",
    },
    {
      valueKey: "impact.metric3.value",
      suffixKey: "impact.metric3.suffix",
      labelKey: "impact.metric3.label",
      descKey: "impact.metric3.desc",
    },
    {
      valueKey: "impact.metric4.value",
      suffixKey: "impact.metric4.suffix",
      labelKey: "impact.metric4.label",
      descKey: "impact.metric4.desc",
    },
  ]

  const phases = [
    {
      phase: "1",
      titleKey: "impact.phase1",
      weeksKey: "impact.phase1.weeks",
      itemsKey: "impact.phase1.items",
    },
    {
      phase: "2",
      titleKey: "impact.phase2",
      weeksKey: "impact.phase2.weeks",
      itemsKey: "impact.phase2.items",
    },
    {
      phase: "3",
      titleKey: "impact.phase3",
      weeksKey: "impact.phase3.weeks",
      itemsKey: "impact.phase3.items",
    },
    {
      phase: "4",
      titleKey: "impact.phase4",
      weeksKey: "impact.phase4.weeks",
      itemsKey: "impact.phase4.items",
    },
  ]

  return (
    <section id="impacto" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
            {t("impact.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("impact.title")}{" "}
            <span className="text-primary">{t("impact.titleHighlight")}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("impact.subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.labelKey}
              value={parseInt(t(metric.valueKey))}
              suffix={t(metric.suffixKey)}
              label={t(metric.labelKey)}
              description={t(metric.descKey)}
            />
          ))}
        </div>

        {/* Roadmap */}
        <div className="mt-20">
          <h3 className="text-center font-serif text-2xl font-bold text-foreground mb-12">
            {t("impact.roadmap")}
          </h3>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border lg:left-1/2" />
            <div className="flex flex-col gap-8">
              {phases.map((phase, i) => {
                const items = t(phase.itemsKey).split("|")
                return (
                  <div key={phase.phase} className={`relative flex ${i % 2 === 0 ? "lg:justify-start" : "lg:justify-end"}`}>
                    <div className="absolute left-8 top-6 -translate-x-1/2 lg:left-1/2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-lg shadow-primary/25">
                        {phase.phase}
                      </div>
                    </div>
                    <div className={`ml-16 lg:ml-0 lg:w-[45%] rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md ${i % 2 === 0 ? "" : "lg:mr-0"}`}>
                      <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        {t(phase.weeksKey)}
                      </span>
                      <h4 className="mt-3 font-serif text-lg font-bold text-card-foreground">
                        {t(phase.titleKey)}
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  value,
  suffix,
  label,
  description,
}: {
  value: number
  suffix: string
  label: string
  description: string
}) {
  const { count, ref } = useCountUp(value)
  return (
    <div
      ref={ref}
      className="group rounded-2xl border border-border bg-card p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="font-serif text-5xl font-bold text-primary">
        {count}
        <span className="text-3xl">{suffix}</span>
      </div>
      <p className="mt-3 text-base font-semibold text-card-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
