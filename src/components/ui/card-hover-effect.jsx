"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Building } from "lucide-react";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 px-6 2xl:px-0 pt-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === idx && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-slate-800 dark:bg-slate-800/[0.8] block  rounded-3xl"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
          <Card
            className={
              hoveredIndex === idx ? "" : "bg-white/5 backdrop-blur-lg"
            }
          >
            <CardTitle
              className={
                hoveredIndex === idx ? "text-zinc-100" : "text-slate-800"
              }
            >
              {item.title}
            </CardTitle>
            <div
              className={cn(
                "flex gap-3 mt-8",
                hoveredIndex === idx ? "text-zinc-100" : "text-slate-600"
              )}
            >
              <Building size={16} className="mt-1" />
              <p className="text-sm flex flex-col gap-2 font-medium">
                {item.name}
                <span
                  className={cn(
                    "italic text-xs font-normal",
                    hoveredIndex === idx ? "text-zinc-300" : "text-slate-600"
                  )}
                >
                  {item.duration}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-8">
              {item.details.map((detail, i) => (
                <CardDescription
                  className={
                    hoveredIndex === idx ? "text-zinc-300" : "text-slate-500"
                  }
                  key={i}
                >
                  {detail}
                </CardDescription>
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "tracking-wide leading-relaxed text-sm flex gap-2",
        className
      )}
    >
      <span>{"●"}</span>
      {children}
    </p>
  );
};
