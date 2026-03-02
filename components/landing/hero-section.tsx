"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useI18n()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[150px]" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16">
        <div className={`flex flex-1 flex-col items-center text-center lg:items-start lg:text-left transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            {t("hero.title1")}{" "}
            <span className="text-primary">{t("hero.title2")}</span>{" "}
            {t("hero.title3")}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/simulacion">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#solucion">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border px-8 py-6 text-base font-semibold text-foreground hover:bg-secondary"
              >
                {t("hero.cta2")}
              </Button>
            </a>
          </div>

          <div className="mt-12 flex gap-8">
            {[
              { val: t("hero.stat1"), label: t("hero.stat1label") },
              { val: t("hero.stat2"), label: t("hero.stat2label") },
              { val: t("hero.stat3"), label: t("hero.stat3label") },
              { val: t("hero.stat4"), label: t("hero.stat4label"), accent: true },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-8">
                {i > 0 && <div className="h-12 w-px bg-border -ml-8" />}
                <div className="flex flex-col">
                  <span className={`font-serif text-2xl font-bold ${s.accent ? "text-primary" : "text-foreground"}`}>
                    {s.val}
                  </span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`relative flex-1 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <Image
                src="/images/hero-illustration.jpg"
                alt="Jovenes empoderadas con tecnologia"
                width={600}
                height={500}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <span className="text-accent font-bold text-sm">IA</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Chatbot 24/7</p>
                  <p className="text-xs text-muted-foreground">ES / AY / QU</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 rounded-xl border border-border bg-card px-4 py-2 shadow-xl">
              <p className="text-xs font-semibold text-primary">{t("app.exit")}</p>
              <p className="text-xs text-muted-foreground">Safe Tech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
