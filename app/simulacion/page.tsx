"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Shield, Sparkles, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneFrame } from "@/components/simulation/phone-frame"
import { AppScreens } from "@/components/simulation/app-screens"
import { I18nProvider, useI18n } from "@/lib/i18n"
import { LanguageSelector } from "@/components/language-selector"

export default function SimulacionPage() {
  return (
    <I18nProvider>
      <SimulacionContent />
    </I18nProvider>
  )
}

function SimulacionContent() {
  const { t } = useI18n()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F0A1F]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[#7C3AED]/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#10B981]/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#EC4899]/4 blur-[150px]" />
      </div>

      {/* Back button + Language */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
        <Link href="/">
          <Button
            variant="outline"
            className="rounded-full border-white/10 bg-white/5 text-white/80 backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("sim.back")}
          </Button>
        </Link>
        <div className="flex items-center gap-3">
          <LanguageSelector variant="dark" />
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[#7C3AED]" />
            <span className="hidden font-serif text-sm font-bold text-white/80 sm:block">
              VIGIA JOVEN 2.0
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pb-10 pt-8">
        {/* Title */}
        <div className={`mb-8 text-center transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur-sm border border-white/10">
            <Sparkles className="h-4 w-4 text-[#7C3AED]" />
            <span className="text-sm font-medium text-white/60">{"Demo Interactiva"}</span>
          </div>
          <h1 className="font-serif text-2xl font-bold text-white md:text-3xl text-balance">
            {t("sim.title")}
          </h1>
          <p className="mt-3 max-w-lg text-sm text-white/40 text-pretty leading-relaxed">
            {t("sim.subtitle")}
          </p>
        </div>

        {/* Phone + Side Info */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
          {/* Left info */}
          <div className={`hidden flex-col gap-4 lg:flex transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ width: 240 }}>
            <InfoCard
              title={t("sim.info.panic")}
              description={t("sim.info.panicDesc")}
              color="bg-[#EF4444]/10 text-[#EF4444]"
            />
            <InfoCard
              title={t("sim.info.chat")}
              description={t("sim.info.chatDesc")}
              color="bg-[#7C3AED]/10 text-[#7C3AED]"
            />
            <InfoCard
              title={t("sim.info.triage")}
              description={t("sim.info.triageDesc")}
              color="bg-[#F59E0B]/10 text-[#F59E0B]"
            />
          </div>

          {/* Phone */}
          <div className={`shrink-0 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"}`}>
            <PhoneFrame>
              <AppScreens />
            </PhoneFrame>
          </div>

          {/* Right info */}
          <div className={`hidden flex-col gap-4 lg:flex transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`} style={{ width: 240 }}>
            <InfoCard
              title={t("sim.info.foro")}
              description={t("sim.info.foroDesc")}
              color="bg-[#10B981]/10 text-[#10B981]"
            />
            <InfoCard
              title={t("sim.info.offline")}
              description={t("sim.info.offlineDesc")}
              color="bg-[#3B82F6]/10 text-[#3B82F6]"
            />
            <InfoCard
              title={t("sim.info.gamification")}
              description={t("sim.info.gamificationDesc")}
              color="bg-[#EC4899]/10 text-[#EC4899]"
            />
          </div>
        </div>

        {/* Mobile info cards */}
        <div className={`mt-8 grid grid-cols-2 gap-3 lg:hidden transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ maxWidth: 375 }}>
          <InfoCardSmall title={t("sim.info.panic")} desc={t("sim.info.panicDesc").slice(0, 40) + "..."} />
          <InfoCardSmall title={t("sim.info.chat")} desc="IA 3 idiomas" />
          <InfoCardSmall title={t("sim.info.foro")} desc="E2EE" />
          <InfoCardSmall title={t("sim.info.offline")} desc="100% offline" />
        </div>

        {/* Trust row */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-3 transition-all duration-700 delay-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
          {["E2EE", "Zero-Knowledge", "HIPAA-aligned", "Auto-Delete 30d", "Open Source"].map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-medium text-white/30 border border-white/5"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function InfoCard({
  title,
  description,
  color,
}: {
  title: string
  description: string
  color: string
}) {
  return (
    <div className="group rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-white/10 hover:bg-white/8">
      <div className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold ${color}`}>
        {title}
      </div>
      <p className="text-[12px] leading-relaxed text-white/40 group-hover:text-white/50 transition-colors">{description}</p>
    </div>
  )
}

function InfoCardSmall({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/5 p-3 text-center backdrop-blur-sm">
      <p className="text-[11px] font-bold text-white/80">{title}</p>
      <p className="mt-0.5 text-[9px] text-white/30">{desc}</p>
    </div>
  )
}
