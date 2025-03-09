"use client";

import type { HTMLMotionProps } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MagicCardProps extends HTMLMotionProps<"div"> {
  icon: React.ReactNode;
  description: string;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className,
  icon,
  description,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative flex overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props} // Ensures Framer Motion recognizes motion event types
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6">
        <motion.div
          className="text-4xl mb-4"
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: isHovered ? 0.8 : 1, y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <motion.div
          className="text-2xl font-semibold text-center mb-4"
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="text-sm text-center text-zinc-400 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};