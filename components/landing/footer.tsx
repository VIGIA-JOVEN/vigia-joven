"use client"

import { Shield, Heart } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-background">
                VIGIA JOVEN 2.0
              </span>
            </div>
            <p className="mt-4 max-w-xs text-center text-sm leading-relaxed text-background/60 lg:text-left">
              {t("footer.desc")}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-background/80">{t("footer.alliances")}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["IPAS Bolivia", "UNFPA", "OPS/OMS", "SEDES", "SLIM", "CAIs", "Linea 156"].map((org) => (
                <div
                  key={org}
                  className="rounded-lg border border-background/10 bg-background/5 px-3 py-1.5"
                >
                  <span className="text-xs font-medium text-background/60">{org}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 lg:items-end">
            <p className="text-sm font-semibold text-background/80">{t("footer.contact")}</p>
            <a
              href="mailto:contacto@vigiajoven.org"
              className="text-sm text-background/60 transition-colors hover:text-primary"
            >
              contacto@vigiajoven.org
            </a>
            <p className="text-sm text-background/60">La Paz y El Alto, Bolivia</p>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-xs text-background/40">
              {t("footer.rights")}
            </p>
            <p className="flex items-center gap-1 text-xs text-background/40">
              {t("footer.made")} <Heart className="h-3 w-3 text-primary" /> {t("footer.madeIn")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
