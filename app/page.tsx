"use client"

import { I18nProvider } from "@/lib/i18n"
import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { EvidenceSection } from "@/components/landing/evidence-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { ImpactSection } from "@/components/landing/impact-section"
import { BudgetSection } from "@/components/landing/budget-section"
import { FaqSection } from "@/components/landing/faq-section"
import { CtaSection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <I18nProvider>
      <main>
        <Navbar />
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <EvidenceSection />
        <TestimonialsSection />
        <ImpactSection />
        <BudgetSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </I18nProvider>
  )
}
