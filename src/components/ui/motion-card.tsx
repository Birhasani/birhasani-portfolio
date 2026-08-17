"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function MotionCard({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className="h-full" whileHover={reduceMotion ? undefined : { y: -3 }} transition={{ duration: 0.18, ease: "easeOut" }}>{children}</motion.div>;
}
