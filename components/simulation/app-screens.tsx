"use client"

import { useState, useRef, useEffect } from "react"
import {
  Map,
  MessageCircle,
  Users,
  User,
  AlertTriangle,
  Shield,
  Star,
  Trophy,
  MapPin,
  ChevronRight,
  Send,
  ArrowLeft,
  Lock,
  Sparkles,
  Heart,
  BookOpen,
  Zap,
  ClipboardCheck,
  Phone,
  Volume2,
  Library,
  Headphones,
  Image as ImageIcon,
  FileText,
  WifiOff,
  Eye,
} from "lucide-react"
import { useI18n, type Lang, langMeta } from "@/lib/i18n"

type ActiveTab = "ruta" | "chat" | "foro" | "perfil" | "triage" | "biblio"

export function AppScreens() {
  const { t, lang, setLang } = useI18n()
  const [activeTab, setActiveTab] = useState<ActiveTab>("ruta")
  const [panicMode, setPanicMode] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(true)

  if (panicMode) {
    return <CalculatorScreen onBack={() => setPanicMode(false)} t={t} />
  }

  if (showOnboarding) {
    return <OnboardingScreen onComplete={() => setShowOnboarding(false)} t={t} lang={lang} setLang={setLang} />
  }

  return (
    <div className="flex h-full flex-col bg-[#F8F7FF]">
      <TopBar onPanic={() => setPanicMode(true)} t={t} lang={lang} setLang={setLang} />
      <div className="flex-1 overflow-y-auto">
        {activeTab === "ruta" && <RutaScreen t={t} />}
        {activeTab === "triage" && <TriageScreen t={t} />}
        {activeTab === "chat" && <ChatScreen t={t} lang={lang} />}
        {activeTab === "biblio" && <BibliotecaScreen t={t} />}
        {activeTab === "foro" && <ForoScreen t={t} />}
        {activeTab === "perfil" && <PerfilScreen t={t} />}
      </div>
      <BottomTabBar activeTab={activeTab} onTabChange={setActiveTab} t={t} />
    </div>
  )
}

/* ====== ONBOARDING ====== */
function OnboardingScreen({
  onComplete,
  t,
  lang,
  setLang,
}: {
  onComplete: () => void
  t: (k: string) => string
  lang: Lang
  setLang: (l: Lang) => void
}) {
  const [step, setStep] = useState(0)
  const langs: Lang[] = ["es", "ay", "qu"]

  if (step === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] px-6 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
          <Shield className="h-10 w-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white">{t("app.onboarding.title")}</h1>
        <p className="mt-3 max-w-[260px] text-[13px] leading-relaxed text-white/70">
          {t("app.onboarding.subtitle")}
        </p>

        <div className="mt-8 w-full max-w-[280px]">
          <p className="mb-3 text-[11px] font-bold text-white/60 uppercase tracking-wider">
            {t("app.onboarding.lang")}
          </p>
          <div className="flex flex-col gap-2">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                  lang === l
                    ? "bg-white text-[#7C3AED] shadow-lg"
                    : "bg-white/10 text-white/80 hover:bg-white/15"
                }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                  lang === l ? "bg-[#7C3AED] text-white" : "bg-white/10 text-white/60"
                }`}>
                  {langMeta[l].flag}
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[13px] font-bold">{langMeta[l].native}</span>
                  <span className={`text-[10px] ${lang === l ? "text-[#7C3AED]/60" : "text-white/40"}`}>
                    {langMeta[l].label}
                  </span>
                </div>
                {lang === l && <div className="ml-auto h-2.5 w-2.5 rounded-full bg-[#10B981]" />}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setStep(1)}
          className="mt-8 w-full max-w-[280px] rounded-xl bg-white py-3.5 text-[14px] font-bold text-[#7C3AED] shadow-xl active:scale-[0.98] transition-transform"
        >
          {t("app.onboarding.start")}
        </button>

        <div className="mt-4 flex gap-1.5">
          <div className="h-1.5 w-6 rounded-full bg-white" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <div className="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
      </div>
    )
  }

  if (step === 1) {
    const features = [
      { icon: Lock, titleKey: "app.onboarding.feature1", descKey: "app.onboarding.feature1d", color: "bg-[#10B981]/10 text-[#10B981]" },
      { icon: WifiOff, titleKey: "app.onboarding.feature2", descKey: "app.onboarding.feature2d", color: "bg-[#3B82F6]/10 text-[#3B82F6]" },
      { icon: AlertTriangle, titleKey: "app.onboarding.feature3", descKey: "app.onboarding.feature3d", color: "bg-[#EF4444]/10 text-[#EF4444]" },
    ]

    return (
      <div className="flex h-full flex-col bg-[#F8F7FF] px-6 pt-16 pb-8">
        <div className="flex-1">
          <h2 className="text-[18px] font-bold text-[#1A1A2E]">{t("app.onboarding.title")}</h2>
          <div className="mt-6 flex flex-col gap-3">
            {features.map((f) => (
              <div key={f.titleKey} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm border border-[#E5E7EB]">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${f.color}`}>
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[13px] font-bold text-[#1A1A2E]">{t(f.titleKey)}</p>
                  <p className="mt-0.5 text-[11px] text-[#6B7280] leading-relaxed">{t(f.descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={onComplete}
          className="w-full rounded-xl bg-[#7C3AED] py-3.5 text-[14px] font-bold text-white shadow-lg shadow-[#7C3AED]/25 active:scale-[0.98] transition-transform"
        >
          {t("app.onboarding.start")}
        </button>

        <div className="mt-4 flex justify-center gap-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/30" />
          <div className="h-1.5 w-6 rounded-full bg-[#7C3AED]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]/30" />
        </div>
      </div>
    )
  }

  return null
}

/* ====== TOP BAR ====== */
function TopBar({ onPanic, t, lang, setLang }: { onPanic: () => void; t: (k: string) => string; lang: Lang; setLang: (l: Lang) => void }) {
  const [langOpen, setLangOpen] = useState(false)
  const langs: Lang[] = ["es", "ay", "qu"]

  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-12 bg-[#F8F7FF]">
      <div className="flex items-center gap-2.5">
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/20">
            <Sparkles className="h-4 w-4 text-[#7C3AED]" />
          </div>
          <div className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#10B981] border-2 border-[#F8F7FF]" />
        </div>
        <div>
          <p className="text-[12px] font-bold text-[#1A1A2E]">{t("app.hello")}</p>
          <p className="text-[10px] text-[#6B7280]">{t("app.level")}</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex h-7 items-center gap-1 rounded-full bg-[#F3F0FF] px-2.5 text-[10px] font-bold text-[#7C3AED] transition-all hover:bg-[#E8E4FF]"
          >
            {langMeta[lang].flag}
            <ChevronRight className={`h-2.5 w-2.5 transition-transform ${langOpen ? "rotate-90" : ""}`} />
          </button>
          {langOpen && (
            <div className="absolute right-0 top-full z-50 mt-1 w-32 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-2xl">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setLangOpen(false) }}
                  className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-[11px] transition-all ${
                    lang === l ? "bg-[#F3F0FF] text-[#7C3AED] font-bold" : "text-[#1A1A2E] hover:bg-[#F9FAFB]"
                  }`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-md text-[9px] font-bold ${lang === l ? "bg-[#7C3AED] text-white" : "bg-[#F3F0FF] text-[#5B21B6]"}`}>
                    {langMeta[l].flag}
                  </span>
                  {langMeta[l].native}
                  {lang === l && <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#10B981]" />}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={onPanic}
          className="flex h-8 items-center gap-1 rounded-full bg-[#EF4444] px-3 shadow-lg shadow-[#EF4444]/30 active:scale-95 transition-transform animate-pulse hover:animate-none"
        >
          <AlertTriangle className="h-3 w-3 text-white" />
          <span className="text-[10px] font-bold text-white">{t("app.exit")}</span>
        </button>
      </div>
    </div>
  )
}

/* ====== BOTTOM TAB BAR ====== */
function BottomTabBar({
  activeTab,
  onTabChange,
  t,
}: {
  activeTab: ActiveTab
  onTabChange: (tab: ActiveTab) => void
  t: (k: string) => string
}) {
  const tabs: { id: ActiveTab; labelKey: string; icon: typeof Map; badge?: number }[] = [
    { id: "ruta", labelKey: "app.tab.ruta", icon: Map },
    { id: "triage", labelKey: "app.tab.triage", icon: ClipboardCheck },
    { id: "chat", labelKey: "app.tab.chat", icon: MessageCircle, badge: 1 },
    { id: "biblio", labelKey: "app.tab.biblio", icon: Library },
    { id: "foro", labelKey: "app.tab.foro", icon: Users },
    { id: "perfil", labelKey: "app.tab.perfil", icon: User },
  ]

  return (
    <div className="flex items-center justify-around border-t border-[#E5E7EB] bg-white px-0.5 pb-7 pt-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative flex flex-col items-center gap-0.5 px-1.5 py-1"
          >
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${
                isActive ? "bg-[#7C3AED] shadow-md shadow-[#7C3AED]/30 scale-110" : "bg-transparent"
              }`}
            >
              <tab.icon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-[#6B7280]"}`} />
            </div>
            {tab.badge && !isActive && (
              <div className="absolute -top-0.5 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#EF4444] text-[7px] font-bold text-white">
                {tab.badge}
              </div>
            )}
            <span className={`text-[8px] font-medium ${isActive ? "text-[#7C3AED]" : "text-[#6B7280]"}`}>
              {t(tab.labelKey)}
            </span>
          </button>
        )
      })}
    </div>
  )
}

/* ====== RUTA SCREEN ====== */
function RutaScreen({ t }: { t: (k: string) => string }) {
  const [expandedMap, setExpandedMap] = useState(false)

  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-2">
      {/* Progress Card */}
      <div className="rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] p-4 shadow-lg shadow-[#7C3AED]/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-medium text-white/70">{t("app.progress")}</p>
            <p className="mt-0.5 text-xl font-bold text-white">{t("app.levelNum")}</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
            <Trophy className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-white to-white/80 transition-all duration-1000" />
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <p className="text-[10px] text-white/70">{t("app.xp")}</p>
          <div className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-[#F59E0B]" />
            <span className="text-[10px] font-bold text-[#F59E0B]">7 dias</span>
          </div>
        </div>
      </div>

      {/* Daily Challenge */}
      <div className="rounded-xl border border-[#10B981]/20 bg-[#10B981]/5 p-3">
        <div className="flex items-center gap-2.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#10B981]/10">
            <Zap className="h-5 w-5 text-[#10B981]" />
            <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#F59E0B] text-[7px] font-bold text-white">!</div>
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-[#1A1A2E]">{t("app.daily")}</p>
            <p className="text-[10px] text-[#6B7280]">{t("app.dailyDesc")}</p>
          </div>
          <div className="rounded-full bg-[#10B981] px-2.5 py-1">
            <span className="text-[9px] font-bold text-white">+45 XP</span>
          </div>
        </div>
      </div>

      {/* Story Card */}
      <div className="relative overflow-hidden rounded-xl border border-[#EC4899]/20 bg-gradient-to-r from-[#EC4899]/5 to-[#7C3AED]/5 p-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EC4899]/10">
            <BookOpen className="h-5 w-5 text-[#EC4899]" />
          </div>
          <div className="flex-1">
            <p className="text-[11px] font-bold text-[#1A1A2E]">El Viaje de Carla</p>
            <p className="text-[10px] text-[#6B7280]">Cap. 3: La decision</p>
          </div>
          <ChevronRight className="h-4 w-4 text-[#EC4899]" />
        </div>
        <div className="mt-2.5 flex items-center gap-2">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#EC4899]/10">
            <div className="h-full w-[45%] rounded-full bg-[#EC4899]" />
          </div>
          <span className="text-[8px] font-medium text-[#EC4899]">45%</span>
        </div>
      </div>

      {/* Map Area */}
      <button onClick={() => setExpandedMap(!expandedMap)} className="text-left">
        <div
          className="relative overflow-hidden rounded-xl border border-[#E5E7EB] bg-[#E8E4F0]/30 transition-all duration-300"
          style={{ height: expandedMap ? 220 : 160 }}
        >
          <svg className="absolute inset-0 h-full w-full opacity-20">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <line key={`h-${i}`} x1="0" y1={i * 36} x2="100%" y2={i * 36} stroke="#7C3AED" strokeWidth="0.5" />
            ))}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <line key={`v-${i}`} x1={i * 42} y1="0" x2={i * 42} y2="100%" stroke="#7C3AED" strokeWidth="0.5" />
            ))}
            <path d="M 50 150 Q 90 110 130 100 Q 170 80 190 55 Q 220 30 260 40" fill="none" stroke="#7C3AED" strokeWidth="3" strokeDasharray="6 4" opacity="0.6" />
          </svg>
          <div className="absolute left-[12%] top-[65%]">
            <div className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7C3AED] shadow-lg shadow-[#7C3AED]/40 ring-4 ring-[#7C3AED]/20">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#10B981] text-[7px] font-bold text-white shadow">3</span>
            </div>
          </div>
          <div className="absolute left-[38%] top-[35%]">
            <div className="rounded-lg bg-white px-2 py-1 shadow-md border border-[#E5E7EB]">
              <p className="text-[8px] font-bold text-[#10B981]">Zona Segura</p>
            </div>
          </div>
          <div className="absolute right-[15%] top-[15%]">
            <div className="relative">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F59E0B] shadow-lg">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-1.5 py-0.5 text-[7px] font-medium text-[#1A1A2E] shadow border border-[#E5E7EB]">
                Centro SLIM
              </span>
            </div>
          </div>
          <div className="absolute right-[40%] top-[55%]">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3B82F6] shadow-lg">
              <span className="text-[7px] font-bold text-white">CAI</span>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 rounded-full bg-white/80 p-1.5 shadow backdrop-blur-sm">
            <Eye className="h-3 w-3 text-[#6B7280]" />
          </div>
        </div>
      </button>

      {/* Missions */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-bold text-[#1A1A2E]">{t("app.missions")}</p>
          <span className="text-[10px] text-[#7C3AED] font-medium">2/3</span>
        </div>
        {[
          { titleKey: "app.mission1", descKey: "app.mission1d", done: true, xp: "+30 XP" },
          { titleKey: "app.mission2", descKey: "app.mission2d", done: true, xp: "+45 XP" },
          { titleKey: "app.mission3", descKey: "app.mission3d", done: false, xp: "+60 XP" },
        ].map((mission) => (
          <div
            key={mission.titleKey}
            className={`flex items-center gap-2.5 rounded-xl border p-3 transition-all ${
              mission.done
                ? "border-[#10B981]/20 bg-[#10B981]/5"
                : "border-[#7C3AED]/20 bg-[#7C3AED]/5"
            }`}
          >
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${mission.done ? "bg-[#10B981]" : "bg-[#7C3AED]"}`}>
              {mission.done ? <Star className="h-4 w-4 text-white" /> : <BookOpen className="h-4 w-4 text-white" />}
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-bold text-[#1A1A2E]">{t(mission.titleKey)}</p>
              <p className="text-[9px] text-[#6B7280]">{t(mission.descKey)}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className={`text-[8px] font-bold ${mission.done ? "text-[#10B981]" : "text-[#7C3AED]"}`}>
                {mission.xp}
              </span>
              <ChevronRight className="h-3.5 w-3.5 text-[#6B7280]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ====== TRIAGE SCREEN ====== */
function TriageScreen({ t }: { t: (k: string) => string }) {
  const [step, setStep] = useState<"intro" | "q1" | "q2" | "q3" | "result" | "deep1" | "deep2" | "deep3" | "deepResult">("intro")
  const [answers, setAnswers] = useState<Record<string, boolean>>({})
  const [deepAnswers, setDeepAnswers] = useState<Record<string, boolean>>({})

  const answer = (key: string, val: boolean) => {
    setAnswers((prev) => ({ ...prev, [key]: val }))
  }

  const getNextStep = () => {
    if (step === "q1") return "q2"
    if (step === "q2") return "q3"
    if (step === "q3") return "result"
    if (step === "deep1") return "deep2"
    if (step === "deep2") return "deep3"
    if (step === "deep3") return "deepResult"
    return "intro"
  }

  const hasAlert = answers.q3 === false

  if (step === "intro") {
    return (
      <div className="flex flex-col gap-4 px-4 pb-4 pt-2">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#7C3AED]/10">
            <ClipboardCheck className="h-8 w-8 text-[#7C3AED]" />
          </div>
          <h2 className="mt-3 text-[15px] font-bold text-[#1A1A2E]">{t("app.triage.title")}</h2>
          <p className="mt-1 text-[11px] text-[#6B7280]">{t("app.triage.subtitle")}</p>
        </div>

        <div className="rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7C3AED] text-[10px] font-bold text-white">1</div>
            <div>
              <p className="text-[12px] font-bold text-[#1A1A2E]">{t("app.triage.level1")}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#F59E0B]/20 bg-[#F59E0B]/5 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F59E0B] text-[10px] font-bold text-white">2</div>
            <div>
              <p className="text-[12px] font-bold text-[#1A1A2E]">{t("app.triage.level2")}</p>
              <p className="text-[10px] text-[#6B7280]">{t("app.triage.level2note")}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setStep("q1")}
          className="w-full rounded-xl bg-[#7C3AED] py-3.5 text-[13px] font-bold text-white shadow-lg shadow-[#7C3AED]/25 active:scale-[0.98] transition-transform"
        >
          {t("app.triage.start")}
        </button>

        <div className="flex items-center justify-center gap-1.5 rounded-xl bg-[#10B981]/5 p-3">
          <Lock className="h-3 w-3 text-[#10B981]" />
          <p className="text-[10px] text-[#10B981] font-medium">{"100% anonimo - E2EE"}</p>
        </div>
      </div>
    )
  }

  if (step === "result") {
    return (
      <div className="flex flex-col gap-4 px-4 pb-4 pt-2">
        <div className="text-center">
          <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${hasAlert ? "bg-[#F59E0B]/10" : "bg-[#10B981]/10"}`}>
            {hasAlert ? <AlertTriangle className="h-8 w-8 text-[#F59E0B]" /> : <Shield className="h-8 w-8 text-[#10B981]" />}
          </div>
          <h2 className="mt-3 text-[14px] font-bold text-[#1A1A2E]">{t("app.triage.results")}</h2>
          <p className="mt-2 text-[11px] text-[#6B7280] leading-relaxed px-2">
            {hasAlert ? t("app.triage.alert") : t("app.triage.safe")}
          </p>
        </div>
        {hasAlert && (
          <>
            <button
              onClick={() => setStep("deep1")}
              className="w-full rounded-xl bg-[#F59E0B] py-3 text-[12px] font-bold text-white shadow-lg shadow-[#F59E0B]/25 active:scale-[0.98] transition-transform"
            >
              {t("app.triage.level2")}
            </button>
            <button
              onClick={() => setStep("deepResult")}
              className="w-full rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/5 py-3 text-[12px] font-bold text-[#EF4444] active:scale-[0.98] transition-transform"
            >
              {t("app.triage.callSlim")}
            </button>
          </>
        )}
        <button
          onClick={() => { setStep("intro"); setAnswers({}) }}
          className="w-full rounded-xl border border-[#E5E7EB] bg-white py-3 text-[12px] font-bold text-[#6B7280] active:scale-[0.98] transition-transform"
        >
          {t("app.triage.restart")}
        </button>
      </div>
    )
  }

  if (step === "deepResult") {
    return (
      <div className="flex flex-col gap-4 px-4 pb-4 pt-2">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EF4444]/10">
            <Phone className="h-8 w-8 text-[#EF4444]" />
          </div>
          <p className="mt-3 text-[11px] text-[#6B7280] leading-relaxed px-2">
            {t("app.triage.deepResult")}
          </p>
        </div>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#EF4444] py-3.5 text-[12px] font-bold text-white shadow-lg shadow-[#EF4444]/25 active:scale-[0.98] transition-transform">
          <Phone className="h-4 w-4" />
          {t("app.triage.callSlim")}
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#EF4444]/20 bg-[#EF4444]/5 py-3 text-[12px] font-bold text-[#EF4444] active:scale-[0.98] transition-transform">
          <Phone className="h-4 w-4" />
          {t("app.triage.call156")}
        </button>
        <button
          onClick={() => { setStep("intro"); setAnswers({}); setDeepAnswers({}) }}
          className="w-full rounded-xl border border-[#E5E7EB] bg-white py-3 text-[12px] font-bold text-[#6B7280] active:scale-[0.98] transition-transform"
        >
          {t("app.triage.restart")}
        </button>
      </div>
    )
  }

  // Question screens
  const questionMap: Record<string, { qKey: string }> = {
    q1: { qKey: "app.triage.q1" },
    q2: { qKey: "app.triage.q2" },
    q3: { qKey: "app.triage.q3" },
    deep1: { qKey: "app.triage.deepQ1" },
    deep2: { qKey: "app.triage.deepQ2" },
    deep3: { qKey: "app.triage.deepQ3" },
  }

  const currentQ = questionMap[step]
  const isDeep = step.startsWith("deep")
  const totalSteps = 3
  const currentStep = isDeep ? parseInt(step.replace("deep", "")) : parseInt(step.replace("q", ""))

  return (
    <div className="flex flex-col gap-4 px-4 pb-4 pt-4">
      <div className="flex items-center gap-2">
        <div className={`rounded-full px-2 py-0.5 text-[9px] font-bold text-white ${isDeep ? "bg-[#F59E0B]" : "bg-[#7C3AED]"}`}>
          {isDeep ? "Nivel 2" : "Nivel 1"}
        </div>
        <div className="flex-1 h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isDeep ? "bg-[#F59E0B]" : "bg-[#7C3AED]"}`}
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        <span className="text-[10px] font-medium text-[#6B7280]">{currentStep}/{totalSteps}</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center py-10">
        <p className="text-center text-[15px] font-bold text-[#1A1A2E] leading-relaxed px-4">
          {t(currentQ.qKey)}
        </p>
        <div className="mt-10 flex gap-4">
          <button
            onClick={() => {
              if (isDeep) setDeepAnswers((p) => ({ ...p, [step]: true }))
              else answer(step, true)
              setStep(getNextStep() as typeof step)
            }}
            className="flex h-16 w-28 items-center justify-center rounded-2xl border-2 border-[#10B981]/30 bg-[#10B981]/5 text-[15px] font-bold text-[#10B981] active:scale-95 transition-all hover:bg-[#10B981]/10"
          >
            {t("app.triage.yes")}
          </button>
          <button
            onClick={() => {
              if (isDeep) setDeepAnswers((p) => ({ ...p, [step]: false }))
              else answer(step, false)
              setStep(getNextStep() as typeof step)
            }}
            className="flex h-16 w-28 items-center justify-center rounded-2xl border-2 border-[#EF4444]/30 bg-[#EF4444]/5 text-[15px] font-bold text-[#EF4444] active:scale-95 transition-all hover:bg-[#EF4444]/10"
          >
            {t("app.triage.no")}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ====== CHAT SCREEN ====== */
function ChatScreen({ t, lang }: { t: (k: string) => string; lang: Lang }) {
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: t("app.chat.welcome") },
    { id: 2, from: "bot", text: t("app.chat.welcome2") },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    setMessages([
      { id: 1, from: "bot", text: t("app.chat.welcome") },
      { id: 2, from: "bot", text: t("app.chat.welcome2") },
    ])
  }, [lang, t])

  const getResponse = (userText: string): string => {
    const lower = userText.toLowerCase()
    if (lower.includes("anticonceptivo") || lower.includes("metodo") || lower.includes("condon") || lower === t("app.chat.q1").toLowerCase()) {
      return t("app.chat.response.anticonceptivos")
    }
    if (lower.includes("derecho") || lower === t("app.chat.q2").toLowerCase()) {
      return t("app.chat.response.derechos")
    }
    if (lower.includes("slim") || lower.includes("cai") || lower.includes("centro") || lower === t("app.chat.q3").toLowerCase()) {
      return t("app.chat.response.slim")
    }
    if (lower.includes("violencia") || lower.includes("golpe") || lower.includes("miedo") || lower.includes("156") || lower === t("app.chat.q4").toLowerCase() || lower === t("app.chat.q5").toLowerCase()) {
      return t("app.chat.response.violencia")
    }
    return t("app.chat.response.default")
  }

  const handleSend = () => {
    if (!input.trim()) return
    const userMsg = { id: messages.length + 1, from: "user", text: input }
    setMessages((prev) => [...prev, userMsg])
    const userText = input
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, from: "bot", text: getResponse(userText) },
      ])
    }, 1200)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Chat Header */}
      <div className="flex items-center gap-3 border-b border-[#E5E7EB] bg-white px-4 py-2.5">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/20">
          <MessageCircle className="h-5 w-5 text-[#7C3AED]" />
          <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#10B981] border-2 border-white" />
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-bold text-[#1A1A2E]">{t("app.chat.name")}</p>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <p className="text-[9px] text-[#10B981]">{t("app.chat.status")}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3F0FF] transition-all hover:bg-[#E8E4FF]">
            <Volume2 className="h-3.5 w-3.5 text-[#7C3AED]" />
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#10B981]/10">
            <Lock className="h-3.5 w-3.5 text-[#10B981]" />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <div className="flex flex-col gap-2.5">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 ${
                msg.from === "user"
                  ? "bg-[#7C3AED] text-white rounded-br-md"
                  : "bg-white border border-[#E5E7EB] text-[#1A1A2E] rounded-bl-md shadow-sm"
              }`}>
                <p className="text-[11px] leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md bg-white border border-[#E5E7EB] px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-[#7C3AED]/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 rounded-full bg-[#7C3AED]/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 rounded-full bg-[#7C3AED]/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-1.5 overflow-x-auto px-4 pb-1.5" style={{ scrollbarWidth: "none" }}>
        {[
          t("app.chat.q1"),
          t("app.chat.q2"),
          t("app.chat.q3"),
          t("app.chat.q4"),
          t("app.chat.q5"),
        ].map((q) => (
          <button
            key={q}
            onClick={() => setInput(q)}
            className="shrink-0 rounded-full border border-[#7C3AED]/20 bg-[#7C3AED]/5 px-3 py-1.5 text-[9px] font-medium text-[#7C3AED] active:bg-[#7C3AED]/15 transition-all"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex items-center gap-2 border-t border-[#E5E7EB] bg-white px-3 py-2.5">
        <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F0FF] transition-all hover:bg-[#E8E4FF]">
          <Headphones className="h-3.5 w-3.5 text-[#7C3AED]" />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder={t("app.chat.placeholder")}
          className="flex-1 rounded-full border border-[#E5E7EB] bg-[#F8F7FF] px-3.5 py-2.5 text-[11px] text-[#1A1A2E] placeholder:text-[#6B7280]/50 focus:border-[#7C3AED] focus:outline-none transition-colors"
        />
        <button
          onClick={handleSend}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] shadow-md shadow-[#7C3AED]/30 active:scale-95 transition-transform"
        >
          <Send className="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </div>
  )
}

/* ====== BIBLIOTECA SCREEN ====== */
function BibliotecaScreen({ t }: { t: (k: string) => string }) {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    { key: "app.biblio.cat1", color: "bg-[#7C3AED]" },
    { key: "app.biblio.cat2", color: "bg-[#3B82F6]" },
    { key: "app.biblio.cat3", color: "bg-[#EF4444]" },
    { key: "app.biblio.cat4", color: "bg-[#10B981]" },
  ]

  const resources = [
    {
      titleKey: "app.biblio.item1",
      descKey: "app.biblio.item1d",
      icon: ImageIcon,
      tags: ["app.biblio.pictograms", "app.biblio.audio"],
      color: "bg-[#7C3AED]/10 text-[#7C3AED]",
    },
    {
      titleKey: "app.biblio.item2",
      descKey: "app.biblio.item2d",
      icon: FileText,
      tags: ["app.biblio.audio", "app.biblio.read"],
      color: "bg-[#3B82F6]/10 text-[#3B82F6]",
    },
    {
      titleKey: "app.biblio.item3",
      descKey: "app.biblio.item3d",
      icon: MapPin,
      tags: ["app.biblio.pictograms"],
      color: "bg-[#F59E0B]/10 text-[#F59E0B]",
    },
    {
      titleKey: "app.biblio.item4",
      descKey: "app.biblio.item4d",
      icon: Shield,
      tags: ["app.biblio.audio", "app.biblio.read"],
      color: "bg-[#EF4444]/10 text-[#EF4444]",
    },
  ]

  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-2">
      <div>
        <p className="text-[15px] font-bold text-[#1A1A2E]">{t("app.biblio.title")}</p>
        <p className="text-[10px] text-[#6B7280]">{t("app.biblio.subtitle")}</p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat, i) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(i)}
            className={`shrink-0 rounded-full px-3.5 py-1.5 text-[10px] font-bold transition-all ${
              activeCategory === i
                ? `${cat.color} text-white shadow-md`
                : "bg-[#F3F0FF] text-[#6B7280]"
            }`}
          >
            {t(cat.key)}
          </button>
        ))}
      </div>

      {/* Resources */}
      <div className="flex flex-col gap-2.5">
        {resources.map((resource) => (
          <div
            key={resource.titleKey}
            className="rounded-xl border border-[#E5E7EB] bg-white p-4 transition-all hover:border-[#7C3AED]/20 hover:shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${resource.color}`}>
                <resource.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-[12px] font-bold text-[#1A1A2E]">{t(resource.titleKey)}</p>
                <p className="mt-0.5 text-[10px] text-[#6B7280] leading-relaxed">{t(resource.descKey)}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 rounded-full bg-[#F3F0FF] px-2 py-0.5 text-[8px] font-medium text-[#7C3AED]">
                      {tag === "app.biblio.audio" && <Headphones className="h-2.5 w-2.5" />}
                      {tag === "app.biblio.pictograms" && <ImageIcon className="h-2.5 w-2.5" />}
                      {tag === "app.biblio.read" && <Eye className="h-2.5 w-2.5" />}
                      {t(tag)}
                    </span>
                  ))}
                </div>
              </div>
              <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#6B7280]" />
            </div>
          </div>
        ))}
      </div>

      {/* Offline badge */}
      <div className="flex items-center justify-center gap-2 rounded-xl bg-[#10B981]/5 p-3">
        <WifiOff className="h-3.5 w-3.5 text-[#10B981]" />
        <p className="text-[10px] font-medium text-[#10B981]">{"120+ recursos disponibles offline"}</p>
      </div>
    </div>
  )
}

/* ====== FORO SCREEN ====== */
function ForoScreen({ t }: { t: (k: string) => string }) {
  const [liked, setLiked] = useState<Record<number, boolean>>({})
  const posts = [
    {
      id: 1,
      user: "AnonExplorer23",
      time: "2h",
      text: "Alguien sabe donde puedo ir a consultar en El Alto sin que me pidan documentos? Necesito informacion urgente.",
      likes: 12,
      replies: 5,
    },
    {
      id: 2,
      user: "MariposaLibre",
      time: "5h",
      text: "Gracias a esta app pude ir al SLIM y me ayudaron mucho. No tengan miedo, el servicio es confidencial.",
      likes: 34,
      replies: 8,
    },
    {
      id: 3,
      user: "LuzDelAlto",
      time: "1d",
      text: "En mi colegio nadie habla de estos temas. Aqui me siento segura para preguntar.",
      likes: 21,
      replies: 3,
    },
    {
      id: 4,
      user: "EstrellaAymara",
      time: "2d",
      text: "Ukham parlañax wal askiwa. Aka foronx janiw pipas jupar uñt'kaniti. Jark'aqat espacio.",
      likes: 18,
      replies: 6,
    },
  ]

  return (
    <div className="flex flex-col gap-3 px-4 pb-4 pt-2">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[14px] font-bold text-[#1A1A2E]">{t("app.foro.title")}</p>
          <p className="text-[10px] text-[#6B7280]">{t("app.foro.subtitle")}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-[#10B981]/10 px-2.5 py-1">
          <Lock className="h-3 w-3 text-[#10B981]" />
          <span className="text-[9px] font-medium text-[#10B981]">E2EE</span>
        </div>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="rounded-xl border border-[#E5E7EB] bg-white p-3.5 transition-all hover:shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/10 to-[#EC4899]/10">
              <User className="h-3.5 w-3.5 text-[#7C3AED]" />
            </div>
            <span className="text-[10px] font-bold text-[#1A1A2E]">{post.user}</span>
            <span className="text-[9px] text-[#6B7280]">{post.time}</span>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-[#1A1A2E]/80">{post.text}</p>
          <div className="mt-2.5 flex items-center gap-4">
            <button
              onClick={() => setLiked((p) => ({ ...p, [post.id]: !p[post.id] }))}
              className={`flex items-center gap-1 text-[9px] transition-all ${liked[post.id] ? "text-[#EC4899]" : "text-[#6B7280]"}`}
            >
              <Heart className={`h-3.5 w-3.5 transition-all ${liked[post.id] ? "fill-[#EC4899] scale-110" : ""}`} /> {post.likes + (liked[post.id] ? 1 : 0)}
            </button>
            <button className="flex items-center gap-1 text-[9px] text-[#6B7280]">
              <MessageCircle className="h-3 w-3" /> {post.replies} {t("app.foro.replies")}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ====== PERFIL SCREEN ====== */
function PerfilScreen({ t }: { t: (k: string) => string }) {
  const badges = [
    { name: "Primera Mision", color: "bg-[#7C3AED]", earned: true },
    { name: "Derechos DSDR", color: "bg-[#10B981]", earned: true },
    { name: "Mitos x10", color: "bg-[#F59E0B]", earned: true },
    { name: "Defensora", color: "bg-[#3B82F6]", earned: false },
    { name: "Lider", color: "bg-[#EC4899]", earned: false },
    { name: "Vigia Experta", color: "bg-[#8B5CF6]", earned: false },
  ]

  return (
    <div className="flex flex-col gap-4 px-4 pb-4 pt-2">
      {/* Avatar Card */}
      <div className="flex flex-col items-center rounded-2xl bg-white border border-[#E5E7EB] p-5 shadow-sm">
        <div className="relative">
          <div className="flex h-18 w-18 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#EC4899]/20 ring-4 ring-[#7C3AED]/10">
            <User className="h-9 w-9 text-[#7C3AED]" />
          </div>
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981] border-2 border-white shadow">
            <span className="text-[10px] font-bold text-white">3</span>
          </div>
        </div>
        <p className="mt-3 text-[14px] font-bold text-[#1A1A2E]">{t("app.perfil.name")}</p>
        <p className="text-[10px] text-[#6B7280]">{t("app.perfil.level")}</p>
        <div className="mt-4 flex gap-8">
          <div className="text-center">
            <p className="text-[18px] font-bold text-[#7C3AED]">345</p>
            <p className="text-[9px] text-[#6B7280]">{t("app.perfil.xp")}</p>
          </div>
          <div className="h-10 w-px bg-[#E5E7EB]" />
          <div className="text-center">
            <p className="text-[18px] font-bold text-[#10B981]">3</p>
            <p className="text-[9px] text-[#6B7280]">{t("app.perfil.medals")}</p>
          </div>
          <div className="h-10 w-px bg-[#E5E7EB]" />
          <div className="text-center">
            <p className="text-[18px] font-bold text-[#F59E0B]">7</p>
            <p className="text-[9px] text-[#6B7280]">{t("app.perfil.streak")}</p>
          </div>
        </div>
      </div>

      {/* Engagement Cycle */}
      <div className="rounded-xl border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-3.5">
        <p className="text-[11px] font-bold text-[#1A1A2E] mb-2.5">{"Ciclo de Engagement"}</p>
        <div className="flex items-center gap-1">
          {["Dia 1", "Sem 1", "Mes 1", "Mes 3+"].map((phase, i) => (
            <div key={phase} className="flex items-center gap-1">
              <div className={`rounded-lg px-2.5 py-1.5 text-[8px] font-bold transition-all ${i <= 1 ? "bg-[#7C3AED] text-white shadow-sm shadow-[#7C3AED]/20" : "bg-[#7C3AED]/10 text-[#7C3AED]"}`}>
                {phase}
              </div>
              {i < 3 && <ChevronRight className="h-2.5 w-2.5 text-[#7C3AED]/30" />}
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div>
        <p className="mb-2 text-[12px] font-bold text-[#1A1A2E]">{t("app.perfil.badgesTitle")}</p>
        <div className="grid grid-cols-3 gap-2">
          {badges.map((badge) => (
            <div
              key={badge.name}
              className={`flex flex-col items-center rounded-xl border p-3 transition-all ${
                badge.earned
                  ? "border-[#E5E7EB] bg-white shadow-sm"
                  : "border-dashed border-[#E5E7EB] bg-[#F8F7FF]/50 opacity-40"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${badge.earned ? badge.color : "bg-[#E5E7EB]"} ${badge.earned ? "shadow-sm" : ""}`}>
                <Trophy className={`h-4 w-4 ${badge.earned ? "text-white" : "text-[#6B7280]"}`} />
              </div>
              <p className="mt-1.5 text-center text-[8px] font-medium text-[#1A1A2E]">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy */}
      <div className="rounded-xl border border-[#10B981]/20 bg-[#10B981]/5 p-3.5">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-[#10B981]" />
          <p className="text-[11px] font-bold text-[#1A1A2E]">{t("app.perfil.privacy")}</p>
        </div>
        <p className="mt-1.5 text-[9px] text-[#6B7280] leading-relaxed">
          {t("app.perfil.privacyDesc")}
        </p>
      </div>
    </div>
  )
}

/* ====== CALCULATOR (PANIC MODE) ====== */
function CalculatorScreen({ onBack, t }: { onBack: () => void; t: (k: string) => string }) {
  const [display, setDisplay] = useState("0")

  const handleCalcPress = (val: string) => {
    if (val === "C") {
      setDisplay("0")
    } else if (val === "=") {
      try {
        const sanitized = display.replace(/[^0-9+\-*/.]/g, "")
        const result = new Function(`return ${sanitized}`)()
        setDisplay(String(result))
      } catch {
        setDisplay("Error")
      }
    } else {
      setDisplay((prev) => (prev === "0" ? val : prev + val))
    }
  }

  const buttons = [
    "C", "(", ")", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "=", "",
  ]

  return (
    <div className="flex h-full flex-col bg-[#F5F5F5]">
      <div className="flex items-center justify-between px-5 pb-2 pt-14">
        <p className="text-[14px] font-medium text-[#1A1A2E]">{t("app.calc")}</p>
        <button onClick={onBack} className="rounded-full bg-[#E5E7EB] p-1.5 transition-all hover:bg-[#D1D5DB]">
          <ArrowLeft className="h-4 w-4 text-[#6B7280]" />
        </button>
      </div>
      <div className="mx-5 mt-4 rounded-2xl bg-white p-5 shadow-sm border border-[#E5E7EB]">
        <p className="text-right text-3xl font-light text-[#1A1A2E] truncate">{display}</p>
      </div>
      <div className="mt-auto grid grid-cols-4 gap-2.5 px-5 pb-10 pt-6">
        {buttons.map((btn, i) => {
          if (!btn) return <div key={i} />
          const isOp = ["/", "*", "-", "+", "="].includes(btn)
          const isClear = btn === "C"
          return (
            <button
              key={i}
              onClick={() => handleCalcPress(btn)}
              className={`flex h-14 items-center justify-center rounded-2xl text-lg font-medium transition-all active:scale-95 ${
                isOp
                  ? "bg-[#7C3AED] text-white shadow-sm"
                  : isClear
                  ? "bg-[#EF4444]/10 text-[#EF4444]"
                  : "bg-white border border-[#E5E7EB] text-[#1A1A2E] shadow-sm"
              }`}
            >
              {btn}
            </button>
          )
        })}
      </div>
    </div>
  )
}
