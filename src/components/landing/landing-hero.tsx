"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { GrainGradient } from "@paper-design/shaders-react";
import { ArrowUpRightIcon } from "lucide-react";

import { PixelHeading } from "../ui/pixel-heading-word";
import { PixelParagraphInverse } from "../ui/pixel-paragraph-words-inverse";
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { CodeBlockCommand } from "../ui/code-block-command";
import HeroActions from "./hero-actions";

const DESCRIPTION_TEXT =
  "Production-ready shader components for React & Next.js. Copy and paste with shadcn CLI. Open source.";

const PLAIN_WORDS = ["shader", "components", "shadcn", "CLI"];

const SHADER_CONFIG = {
  colors: ["#00FF88", "#7B2FFF", "#00BBFF"] as [string, string, string],
  colorBack: "#00000000",
  speed: 0.1,
  scale: 0.65,
  rotation: -90,
  offsetX: 0.15,
  offsetY: 0.1,
  softness: 0.6,
  intensity: 0.22,
  noise: 0.24,
  shape: "wave" as const,
} as const;

const SHADER_STYLE: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
};

const CLI_COMMANDS = {
  pnpm: "pnpm dlx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
  yarn: "yarn shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
  npm: "npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
  bun: "bunx --bun shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
} as const;

const stagger = (index: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 0.1 + index * 0.1,
    duration: 0.45,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
});

export function LandingHero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative min-h-svh overflow-hidden border-b border-border">
      {ready && <GrainGradient {...SHADER_CONFIG} style={SHADER_STYLE} />}

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl items-center px-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl space-y-8 py-24"
        >
          <motion.div {...stagger(0)}>
            <Announcement className="h-7">
              <AnnouncementTag>Latest update</AnnouncementTag>
              <AnnouncementTitle>
                New Shader
                <ArrowUpRightIcon
                  className="shrink-0 text-muted-foreground"
                  size={16}
                />
              </AnnouncementTitle>
            </Announcement>
          </motion.div>

          {/* Heading */}
          <motion.div {...stagger(1)} className="space-y-2">
            <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
              <PixelHeading initialFont="square" hoverFont="circle">
                Beautiful Shader
              </PixelHeading>
              <br />
              <PixelHeading initialFont="square" hoverFont="circle">
                Backgrounds
              </PixelHeading>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div {...stagger(2)}>
            <PixelParagraphInverse
              text={DESCRIPTION_TEXT}
              plainWords={PLAIN_WORDS}
              as="p"
              pixelFont="square"
              plainFont="sans"
              className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              plainWordClassName="text-foreground"
            />
          </motion.div>

          {/* CLI Command */}
          <motion.div {...stagger(3)} className="w-full max-w-xl">
            <CodeBlockCommand {...CLI_COMMANDS} />
          </motion.div>

          {/* Actions */}
          <motion.div {...stagger(4)}>
            <HeroActions />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
