"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Terminal } from "lucide-react";
import Link from "next/link";
import { GrainGradient } from "@paper-design/shaders-react";

import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { PixelHeading } from "./ui/pixel-heading-word";
import { PixelParagraph } from "./ui/pixel-paragraph-words";

export function LandingHero() {
  const [ready, setReady] = useState(false);

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
      <div className="relative z-10 mx-auto max-w-6xl py-20 sm:px-2 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur-sm"
          >
            <Terminal className="size-3" />
            Open Source
            <span className="hidden sm:inline text-muted-foreground">
              | shadcn CLI Compatible
            </span>
          </motion.span>

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
                className="text-6xl"
              >
                Shaders Backgrounds
              </PixelHeading>
              <br />
              <PixelHeading
                initialFont="square"
                hoverFont="circle"
                className="text-6xl"
              >
                Copy and Paste
              </PixelHeading>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-lg text-base text-muted-foreground leading-relaxed sm:text-lg"
          >
            <PixelParagraph
              text="Production-ready shader components for React & Next.js. Copy and paste with shadcn CLI. Open source. Free forever."
              pixelWords={[
                "shader",
                "components",
                "Copy",
                "Paste",
                "shadcn",
                "cli",
              ]}
              font="square"
              className="text-lg text-muted-foreground"
            />
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Button size="lg" asChild className="group">
              <Link href="/docs" className="gap-2">
                Get Started
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
