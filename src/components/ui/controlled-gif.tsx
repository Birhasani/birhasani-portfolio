"use client";

import { Pause, Play } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";

type ControlledGifProps = {
  alt: string;
  gifSrc: string;
  posterSrc: string;
  className?: string;
};

export function ControlledGif({ alt, gifSrc, posterSrc, className }: ControlledGifProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const showAnimation = isPlaying && !prefersReducedMotion;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="grid aspect-square w-full max-w-[200px] place-items-center overflow-hidden rounded-full bg-soft-orange">
        <Image
          alt={alt}
          className="size-full object-contain"
          height={200}
          key={showAnimation ? gifSrc : posterSrc}
          sizes="200px"
          src={showAnimation ? gifSrc : posterSrc}
          unoptimized={showAnimation}
          width={200}
        />
      </div>
      <button
        aria-pressed={showAnimation}
        className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-primary-text transition-colors hover:border-blue hover:bg-soft-blue"
        disabled={Boolean(prefersReducedMotion)}
        onClick={() => setIsPlaying((current) => !current)}
        type="button"
      >
        {showAnimation ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
        {prefersReducedMotion ? "Motion reduced" : showAnimation ? "Pause animation" : "Play animation"}
      </button>
    </div>
  );
}
