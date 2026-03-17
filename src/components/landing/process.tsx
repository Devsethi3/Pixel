"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import {
  TerminalAnimationBackgroundGradient,
  TerminalAnimationBlinkingCursor,
  TerminalAnimationCommandBar,
  TerminalAnimationContainer,
  TerminalAnimationContent,
  TerminalAnimationOutput,
  TerminalAnimationRoot,
  TerminalAnimationTrailingPrompt,
  TerminalAnimationWindow,
  type TabContent,
  type TerminalLine,
} from "../ui/terminal-animation";
import Link from "next/link";
import { PixelHeading } from "../ui/pixel-heading-word";

const backgroundImage = "/terminal-animation-bg.png";

const shaderTabs: TabContent[] = [
  {
    label: "install",
    command: "npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
    lines: [
      { text: "", delay: 80 },
      {
        text: "✔ Checking registry...",
        color: "text-primary",
        delay: 300,
      },
      { text: "", delay: 80 },
      {
        text: "  Installing ocean-wave shader component",
        color: "text-muted-foreground",
        delay: 200,
      },
      { text: "", delay: 100 },
      {
        text: "✔ Created components/shaders/ocean-wave.tsx",
        color: "text-primary",
        delay: 250,
      },
      {
        text: "✔ Updated dependencies",
        color: "text-primary",
        delay: 150,
      },
      { text: "", delay: 80 },
      {
        text: "  Ready to use in your app",
        color: "text-muted-foreground",
        delay: 200,
      },
    ],
  },
];

export function TerminalProcess() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <PixelHeading
            initialFont="square"
            hoverFont="circle"
            className="text-xl font-medium tracking-tight sm:text-2xl md:text-3xl"
          >
            Install in seconds
          </PixelHeading>
          <p className="mt-1.5 sm:mt-2 text-sm sm:text-base text-muted-foreground">
            One command. Full source code. Ready to customize.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Terminal */}
          <div className="min-w-0">
            <TerminalAnimationRoot
              key={animationKey}
              alwaysDark={true}
              backgroundImage={backgroundImage}
              className="relative w-full min-w-0 overflow-hidden rounded-lg sm:rounded-xl"
              defaultActiveTab={0}
              hideCursorOnComplete={false}
              tabs={shaderTabs}
            >
              {!backgroundImage && <TerminalAnimationBackgroundGradient />}

              <TerminalAnimationContainer className="max-w-none px-0 pt-0 pb-0">
                <TerminalAnimationWindow
                  className="rounded-lg sm:rounded-xl outline-1 outline-white/20"
                  animateOnVisible={true}
                >
                  <TerminalAnimationContent className="relative min-h-[220px] sm:min-h-[280px] px-3 py-3 sm:px-5 sm:py-5 md:px-6 md:py-6">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <span className="select-none font-mono text-muted-foreground text-xs sm:text-sm flex-shrink-0">
                        $
                      </span>
                      <div className="min-w-0 overflow-x-auto scrollbar-none">
                        <TerminalAnimationCommandBar
                          className="font-mono text-foreground text-xs sm:text-sm whitespace-nowrap"
                          cursor={<TerminalAnimationBlinkingCursor />}
                        />
                      </div>
                    </div>

                    <TerminalAnimationOutput
                      className="mt-1.5 sm:mt-2"
                      renderLine={(
                        line: TerminalLine,
                        _i: number,
                        visible: boolean,
                      ) => {
                        if (!visible) return null;
                        return (
                          <div className="leading-relaxed min-w-0">
                            <span
                              className={cn(
                                "font-mono text-xs sm:text-sm break-all sm:break-normal",
                                line.color ?? "text-muted-foreground",
                              )}
                            >
                              {line.text || "\u00A0"}
                            </span>
                          </div>
                        );
                      }}
                    />

                    <TerminalAnimationTrailingPrompt className="mt-1.5 sm:mt-2 flex items-center gap-1.5 sm:gap-2">
                      <span className="select-none font-mono text-muted-foreground text-xs sm:text-sm">
                        $
                      </span>
                      <TerminalAnimationBlinkingCursor />
                    </TerminalAnimationTrailingPrompt>
                  </TerminalAnimationContent>

                  {/* Replay button */}
                  <div className="flex justify-center pb-3 sm:pb-4">
                    <button
                      className="rounded-md border border-border bg-muted/50 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[10px] sm:text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground touch-manipulation active:bg-muted"
                      onClick={() => setAnimationKey((prev) => prev + 1)}
                      type="button"
                    >
                      Replay
                    </button>
                  </div>
                </TerminalAnimationWindow>
              </TerminalAnimationContainer>
            </TerminalAnimationRoot>
          </div>

          {/* Right side content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6">
            {/* File structure */}
            <div className="rounded-lg border border-border bg-card p-3.5 sm:p-5 min-w-0 overflow-x-auto">
              <p className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project Structure
              </p>
              <div className="font-mono text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                <div>your-project/</div>
                <div className="ml-3 sm:ml-4">├── components/</div>
                <div className="ml-6 sm:ml-8">└── shaders/</div>
                <div className="ml-9 sm:ml-12 flex items-center gap-1.5 sm:gap-2">
                  <span className="text-primary">├── ocean-wave.tsx</span>
                  <span className="rounded bg-primary/10 px-1 py-0.5 sm:px-1.5 text-[8px] sm:text-[10px] text-primary">
                    new
                  </span>
                </div>
                <div className="ml-9 sm:ml-12">├── sunset-glow.tsx</div>
                <div className="ml-9 sm:ml-12">└── ...</div>
                <div className="ml-3 sm:ml-4">├── package.json</div>
                <div className="ml-3 sm:ml-4">└── ...</div>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Full source code
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Customize colors, speeds, and effects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    Uses Paper Design
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Clean, lightweight and fast
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium">
                    TypeScript ready
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Full type safety out of the box
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/docs"
              className="inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-md bg-primary px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 touch-manipulation active:bg-primary/80"
            >
              Browse All Shaders
              <svg
                className="size-3.5 sm:size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
