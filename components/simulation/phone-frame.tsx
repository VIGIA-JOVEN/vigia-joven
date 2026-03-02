"use client"

import type { ReactNode } from "react"

export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto" style={{ width: 375, height: 812 }}>
      {/* Outer shell */}
      <div className="absolute inset-0 rounded-[3rem] bg-foreground shadow-2xl shadow-foreground/30" />
      {/* Screen bezel */}
      <div className="absolute inset-[3px] rounded-[2.8rem] bg-foreground" />
      {/* Screen */}
      <div className="absolute inset-[4px] overflow-hidden rounded-[2.7rem] bg-card">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-50 flex -translate-x-1/2 items-center justify-center">
          <div className="h-[28px] w-[100px] rounded-full bg-foreground" />
        </div>
        {/* Screen content */}
        <div className="relative h-full w-full overflow-hidden">
          {children}
        </div>
      </div>
      {/* Side button right */}
      <div className="absolute right-[-2px] top-[140px] h-[36px] w-[3px] rounded-r-sm bg-foreground/80" />
      {/* Side buttons left */}
      <div className="absolute left-[-2px] top-[120px] h-[28px] w-[3px] rounded-l-sm bg-foreground/80" />
      <div className="absolute left-[-2px] top-[170px] h-[48px] w-[3px] rounded-l-sm bg-foreground/80" />
      <div className="absolute left-[-2px] top-[225px] h-[48px] w-[3px] rounded-l-sm bg-foreground/80" />
    </div>
  )
}
