"use client"

import { useI18n } from "@/lib/i18n"
import { DollarSign } from "lucide-react"

export function BudgetSection() {
  const { t } = useI18n()

  const items = [
    { nameKey: "budget.item1", amountKey: "budget.item1.amount", descKey: "budget.item1.desc", pct: 40 },
    { nameKey: "budget.item2", amountKey: "budget.item2.amount", descKey: "budget.item2.desc", pct: 12 },
    { nameKey: "budget.item3", amountKey: "budget.item3.amount", descKey: "budget.item3.desc", pct: 18 },
    { nameKey: "budget.item4", amountKey: "budget.item4.amount", descKey: "budget.item4.desc", pct: 15 },
    { nameKey: "budget.item5", amountKey: "budget.item5.amount", descKey: "budget.item5.desc", pct: 15 },
  ]

  const colors = [
    "bg-primary",
    "bg-chart-4",
    "bg-accent",
    "bg-chart-3",
    "bg-chart-5",
  ]

  return (
    <section className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-chart-3/10 px-4 py-1.5 text-sm font-semibold text-chart-3">
            {t("budget.tag")}
          </span>
          <h2 className="mt-6 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            {t("budget.title")}{" "}
            <span className="text-primary">{t("budget.titleHighlight")}</span>
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("budget.subtitle")}
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Total circle */}
          <div className="flex flex-col items-center">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-4 border-primary/20 bg-background">
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary/10" />
              <div className="text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <p className="font-serif text-4xl font-bold text-primary">{t("budget.total")}</p>
                <p className="text-sm font-medium text-muted-foreground">{t("budget.currency")}</p>
                <p className="mt-1 text-xs text-muted-foreground">{t("budget.totalLabel")}</p>
              </div>
            </div>
            {/* Progress bar visualization */}
            <div className="mt-6 flex h-3 w-56 overflow-hidden rounded-full">
              {items.map((item, i) => (
                <div
                  key={item.nameKey}
                  className={`${colors[i]} transition-all`}
                  style={{ width: `${item.pct}%` }}
                />
              ))}
            </div>
          </div>

          {/* Items list */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            {items.map((item, i) => (
              <div
                key={item.nameKey}
                className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div className={`h-10 w-1.5 rounded-full ${colors[i]}`} />
                <div className="flex-1">
                  <p className="text-sm font-bold text-foreground">{t(item.nameKey)}</p>
                  <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-lg font-bold text-foreground">${t(item.amountKey)}</p>
                  <p className="text-xs text-muted-foreground">{item.pct}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
