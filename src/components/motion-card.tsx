"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionCard({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className="match-card" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>{children}</motion.div>;
}
