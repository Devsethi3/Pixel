"use client";

import { useId, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { usePackageManager } from "@/hooks/use-package-manager";
import type { PackageManager } from "@/lib/constants";
import { PACKAGE_MANAGERS } from "@/lib/constants";
import { CopyButton } from "@/components/docs/copy-button";
import { cn } from "@/lib/utils";

export { convertNpmCommand } from "@/lib/convert-npm-command";
export type { ConvertNpmCommandResult } from "@/lib/convert-npm-command";

export interface CodeBlockCommandProps {
  pnpm?: string;
  yarn?: string;
  npm?: string;
  bun?: string;
}

const PM_ICONS: Record<PackageManager, React.ReactNode> = {
  pnpm: (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
      <path d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z" />
    </svg>
  ),
  npm: (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
    </svg>
  ),
  yarn: (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0z" />
    </svg>
  ),
  bun: (
    <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor">
      <path d="M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001Z" />
    </svg>
  ),
};

export function CodeBlockCommand({
  pnpm,
  yarn,
  npm,
  bun,
}: CodeBlockCommandProps) {
  const instanceId = useId();
  const [packageManager, setPackageManager] = usePackageManager();

  const tabs = useMemo(
    () => ({
      pnpm: pnpm ?? "",
      yarn: yarn ?? "",
      npm: npm ?? "",
      bun: bun ?? "",
    }),
    [pnpm, yarn, npm, bun],
  );

  const currentCommand = tabs[packageManager] || "";

  return (
    <LayoutGroup id={instanceId}>
      <div className="relative overflow-hidden rounded-xl border border-border bg-code">
        {/* Tab Bar */}
        <div className="flex items-center gap-0 border-b border-border px-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={packageManager}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.12 }}
              className="mr-2 flex items-center text-muted-foreground"
            >
              {PM_ICONS[packageManager]}
            </motion.div>
          </AnimatePresence>

          <div className="relative flex items-center">
            {PACKAGE_MANAGERS.map((pm) => {
              const isActive = packageManager === pm;
              return (
                <button
                  key={pm}
                  onClick={() => setPackageManager(pm)}
                  className={cn(
                    "relative px-2 py-2.5 font-mono text-xs transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {pm}
                  {isActive && (
                    <motion.div
                      layoutId="pm-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-foreground"
                      style={{ borderRadius: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 35,
                        mass: 0.5,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Command Content */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.pre
              key={packageManager}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="overflow-x-auto overscroll-x-contain p-4 pr-12"
            >
              <code
                data-language="bash"
                className="font-mono text-sm leading-relaxed text-muted-foreground"
              >
                <span className="select-none text-muted-foreground/50">$ </span>
                {currentCommand}
              </code>
            </motion.pre>
          </AnimatePresence>

          <CopyButton
            className="absolute right-2 top-1/2 -translate-y-1/2"
            text={currentCommand}
          />
        </div>
      </div>
    </LayoutGroup>
  );
}
