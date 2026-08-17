"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export function HeroMediaStack() {
  const reduceMotion = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      aria-label="Selected product work from Telusur Mahija, Widya Robotics, and BECATUR"
      className="hero-enter hero-enter-delay-3 relative mx-auto min-h-[23rem] w-full max-w-[39rem] sm:min-h-[31rem] lg:min-h-[36rem]"
      initial={false}
      onPointerMove={(event) => {
        if (reduceMotion || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({ x: (event.clientX - bounds.left) / bounds.width - 0.5, y: (event.clientY - bounds.top) / bounds.height - 0.5 });
      }}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      role="img"
    >
      <motion.span aria-hidden="true" className="pointer-events-none absolute inset-[12%] rounded-full bg-[var(--orange-glow)] blur-3xl" animate={reduceMotion ? undefined : { x: pointer.x * 10, y: pointer.y * 8 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} />
      <div className="hero-float-slow absolute left-0 top-[7%] z-10 w-[78%] overflow-hidden rounded-[1.25rem] border border-white/80 bg-white p-2 shadow-[0_28px_70px_rgba(32,40,46,0.16)] sm:p-3">
        <Image alt="" src="/images/projects/mahija/mahija-cover-dashboard.webp" width={1672} height={941} priority sizes="(max-width: 640px) 74vw, 440px" className="h-auto w-full rounded-xl" />
        <span className="absolute left-5 top-5 rounded-lg bg-white/95 px-2.5 py-1 text-[0.65rem] font-bold text-dark-blue shadow-sm">Production platform</span>
      </div>
      <div className="hero-float-slower absolute bottom-[5%] right-0 z-20 w-[67%] overflow-hidden rounded-[1.15rem] border border-white/80 bg-white p-2 shadow-[0_24px_64px_rgba(32,40,46,0.15)] sm:p-3">
        <Image alt="" src="/images/projects/widya/widya-cover.webp" width={3600} height={2025} priority sizes="(max-width: 640px) 64vw, 380px" className="h-auto w-full rounded-xl" />
        <span className="absolute bottom-5 right-5 rounded-lg bg-soft-orange/95 px-2.5 py-1 text-[0.65rem] font-bold text-primary-text shadow-sm">Implemented AI product</span>
      </div>
      <div className="absolute bottom-[13%] left-[4%] z-30 w-[34%] overflow-hidden rounded-2xl border border-white/90 bg-white p-1.5 shadow-[0_18px_44px_rgba(32,40,46,0.14)] sm:p-2">
        <Image alt="" src="/images/projects/becatur/becatur-cover.webp" width={1672} height={941} sizes="(max-width: 640px) 32vw, 190px" className="h-auto w-full rounded-[0.65rem]" />
      </div>
      <span aria-hidden="true" className="absolute right-[3%] top-[2%] size-2 rounded-full bg-orange" />
      <span aria-hidden="true" className="absolute right-[8%] top-[2%] h-px w-16 bg-blue" />
      <span aria-hidden="true" className="dot-grid absolute -right-3 top-[16%] h-20 w-20 opacity-30" />
    </motion.div>
  );
}
