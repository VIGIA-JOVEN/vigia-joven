"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"
import { useI18n, langMeta, type Lang } from "@/lib/i18n"

export function LanguageSelector({ variant = "light" }: { variant?: "light" | "dark" }) {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const isDark = variant === "dark"

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all ${
          isDark
            ? "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
            : "bg-[#F3F0FF] text-[#5B21B6] hover:bg-[#E8E4FF]"
        }`}
        aria-label="Cambiar idioma"
      >
        <Globe className="h-4 w-4" />
        <span className="text-xs font-bold">{langMeta[lang].flag}</span>
      </button>

      {open && (
        <div
          className={`absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border shadow-xl ${
            isDark
              ? "border-white/10 bg-[#1A1040]"
              : "border-[#E5E7EB] bg-white"
          }`}
        >
          {(Object.keys(langMeta) as Lang[]).map((l) => {
            const isActive = lang === l
            return (
              <button
                key={l}
                onClick={() => {
                  setLang(l)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-all ${
                  isDark
                    ? isActive
                      ? "bg-[#7C3AED]/20 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                    : isActive
                    ? "bg-[#F3F0FF] text-[#7C3AED]"
                    : "text-[#1A1A2E] hover:bg-[#F9FAFB]"
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                    isActive
                      ? "bg-[#7C3AED] text-white"
                      : isDark
                      ? "bg-white/10 text-white/60"
                      : "bg-[#F3F0FF] text-[#5B21B6]"
                  }`}
                >
                  {langMeta[l].flag}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{langMeta[l].native}</span>
                  <span
                    className={`text-[10px] ${
                      isDark ? "text-white/40" : "text-[#6B7280]"
                    }`}
                  >
                    {langMeta[l].label}
                  </span>
                </div>
                {isActive && (
                  <div className="ml-auto h-2 w-2 rounded-full bg-[#10B981]" />
                )}
              </button>
            )
          })}
          <div
            className={`border-t px-4 py-2 ${
              isDark ? "border-white/5" : "border-[#E5E7EB]"
            }`}
          >
            <p
              className={`text-[10px] ${
                isDark ? "text-white/30" : "text-[#6B7280]"
              }`}
            >
              {lang === "es"
                ? "Audio disponible para baja alfabetizacion"
                : lang === "ay"
                ? "Ist'awinakaw utji jan qillqt'ir jakitataki"
                : "Uyarinakunayuq mana qillqay yachaqkunapaq"}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
