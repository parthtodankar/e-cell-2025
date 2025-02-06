"use client";

import { MorphingText } from "@/components/magicui/morphing-text";

const texts = [
  "E SUMMIT",
  "2025",
  "Loading..."
];

const colors = [
  "#ffd319", // Yellow
  "#ff2975", // Pink
  "#8c1eff", // Purple
  "#ff8c00", // Orange
  "#00bfff"  // Light Blue
];

const ESummitContent = () => {
  return (
    <div className="py-20">
      <MorphingText texts={texts} colors={colors} />
      <div className="h-30" />
    </div>
  );
};

export default ESummitContent;