"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GrainGradient } from "@paper-design/shaders-react";

import { PixelHeading } from "../ui/pixel-heading-word";
import { PixelParagraphInverse } from "../ui/pixel-paragraph-words-inverse";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { ArrowUpRightIcon } from "lucide-react";
import { CodeBlockCommand } from "../ui/code-block-command";
import HeroActions from "./hero-actions";

const DEFAULT_TEXT =
  "Production-ready shader components for React & Next.js. Copy and paste with shadcn CLI. Open source.";
const DEFAULT_PLAIN_WORDS = "shader,components, shadcn, CLI";

const PIXEL_FONTS = ["square", "grid", "circle", "triangle", "line"] as const;
type PixelFont = (typeof PIXEL_FONTS)[number];
const PLAIN_FONTS = ["sans", "mono"] as const;
type PlainFont = (typeof PLAIN_FONTS)[number];
const WRAPPER_TAGS = ["p", "span", "div"] as const;

export function LandingHero() {
  const [ready, setReady] = useState(false);
  const [text, setText] = useState(DEFAULT_TEXT);
  const [plainWordsInput, setPlainWordsInput] = useState(DEFAULT_PLAIN_WORDS);
  const [pixelFont, setPixelFont] = useState<PixelFont>("square");
  const [plainFont, setPlainFont] = useState<PlainFont>("sans");
  const [wrapperTag, setWrapperTag] =
    useState<(typeof WRAPPER_TAGS)[number]>("p");
  const plainWords = plainWordsInput
    .split(",")
    .map((w) => w.trim())
    .filter(Boolean);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Shader Background */}
      {ready && (
        <GrainGradient
          colors={["#00FF88", "#7B2FFF", "#00BBFF"]}
          colorBack="#00000000"
          speed={0.1}
          scale={0.65}
          rotation={-90}
          offsetX={0.15}
          offsetY={0.1}
          softness={0.6}
          intensity={0.22}
          noise={0.24}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-2 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Announcement className="h-7">
              <AnnouncementTag>Latest update</AnnouncementTag>
              <AnnouncementTitle>
                New feature added
                <ArrowUpRightIcon
                  className="shrink-0 text-muted-foreground"
                  size={16}
                />
              </AnnouncementTitle>
            </Announcement>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <PixelHeading initialFont="square" hoverFont="circle">
                Shaders Backgrounds
              </PixelHeading>
              <br />
              <PixelHeading initialFont="square" hoverFont="circle">
                Copy and Paste
              </PixelHeading>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-lg text-base text-muted-foreground leading-relaxed sm:text-lg"
          >
            <PixelParagraphInverse
              text={text}
              plainWords={plainWords}
              as={wrapperTag}
              pixelFont={pixelFont}
              plainFont={plainFont}
              className="max-w-xl text-lg leading-relaxed text-muted-foreground"
              plainWordClassName="text-foreground"
            />
          </motion.div>

          <div className="w-full max-w-xl">
            <CodeBlockCommand
              pnpm="pnpm dlx shadcn add https://pixel.devsethi.site/r/ocean-wave.json"
              yarn="yarn shadcn add https://pixel.devsethi.site/r/ocean-wave.json"
              npm="npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json"
              bun="bunx --bun shadcn add https://pixel.devsethi.site/r/ocean-wave.json"
            />
          </div>

          <HeroActions />
        </motion.div>
      </div>
    </section>
  );
}
