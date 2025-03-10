"use client";

import React, { useCallback, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export interface MagicCardProps {
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  [key: string]: any; // This allows for any additional props
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className,
  gradientSize = 500,
  gradientColor = "white",
  gradientOpacity = 0.15,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: React.MouseEvent) => {
      if (!ref.current) return;
      const { left, top } = ref.current.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY]
  );

  const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor} ${gradientOpacity}, transparent 80%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("relative h-full w-full overflow-hidden rounded-xl", className)}
      style={{ background }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
