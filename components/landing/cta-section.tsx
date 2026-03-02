"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Mail } from "lucide-react"

export function CtaSection() {
  const { t } = useI18n()
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#7C3AED] via-[#6D28D9] to-[#5B21B6] p-12 md:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#10B981]/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/3 blur-[120px]" />

          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
              {t("cta.title")}{" "}
              <span className="text-[#10B981]">{t("cta.titleHighlight")}</span>
            </h2>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-white/70 text-pretty">
              {t("cta.subtitle")}
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/simulacion">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-[#7C3AED] hover:bg-white/90 px-8 py-6 text-base font-bold shadow-xl shadow-black/20"
                >
                  <Smartphone className="mr-2 h-5 w-5" />
                  {t("cta.button")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:contacto@vigiajoven.org">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-base font-semibold backdrop-blur-sm"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("cta.contact")}
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              {["E2EE", "HIPAA-aligned", "GDPR", "100% Offline"].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
