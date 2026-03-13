"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Terminal } from "lucide-react";
import Link from "next/link";
import { GrainGradient } from "@paper-design/shaders-react";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { PixelHeading } from "./ui/pixel-heading-word";
import { PixelParagraphInverse } from "./ui/pixel-paragraph-words-inverse";

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from "@/components/kibo-ui/announcement";
import { ArrowUpRightIcon } from "lucide-react";
import { TextureButton } from "./ui/texture-button";
import { CodeBlockCommand } from "./ui/code-block-command";

const DEFAULT_TEXT =
  "Production-ready shader components for React & Next.js. Copy and paste with shadcn CLI. Open source.";
const DEFAULT_PLAIN_WORDS = "shader,components,Open, source, shadcn, CLI";

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
          colors={["#9F8EEC", "#6696EA", "#3F7CFF"]}
          colorBack="#00000000"
          speed={0.17}
          scale={0.57}
          rotation={-143}
          offsetX={0.2}
          offsetY={-0.27}
          softness={0.67}
          intensity={0.16}
          noise={0.21}
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
      <div className="relative z-10 mx-auto max-w-6xl py-20 px-2 sm:py-28">
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
              <PixelHeading
                initialFont="square"
                hoverFont="circle"
              >
                Shaders Backgrounds
              </PixelHeading>
              <br />
              <PixelHeading
                initialFont="square"
                hoverFont="circle"
              >
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

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <TextureButton asChild className="group">
              <Link href="/docs" className="gap-2 flex items-center">
                <span>Get Started</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </TextureButton>
            <TextureButton variant="accent" asChild>
              <Link
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2 flex items-center"
              >
                <Github className="size-4" />
                GitHub
              </Link>
            </TextureButton>
          </motion.div>

          {/* Stats */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center gap-4 pt-4 text-xs text-muted-foreground"
          >
            <span>10 shaders</span>
            <span className="text-border">·</span>
            <span>4 categories</span>
            <span className="text-border">·</span>
            <span>shadcn CLI ready</span>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
