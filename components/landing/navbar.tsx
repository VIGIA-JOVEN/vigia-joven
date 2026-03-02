"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useI18n()

  const navLinks = [
    { label: t("nav.inicio"), href: "#inicio" },
    { label: t("nav.problema"), href: "#problema" },
    { label: t("nav.solucion"), href: "#solucion" },
    { label: t("nav.evidencia"), href: "#evidencia" },
    { label: t("nav.impacto"), href: "#impacto" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">
            VIGIA JOVEN
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <LanguageSelector variant="light" />
          <Link href="/simulacion">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              {t("nav.probar")}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSelector variant="light" />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-card/95 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <Link href="/simulacion" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                {t("nav.probar")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
