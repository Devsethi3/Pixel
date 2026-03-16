"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

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

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-3 top-3 z-10 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      aria-label="Copy command"
    >
      {copied ? (
        <Check className="h-4 w-4 text-primary" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </button>
  );
}

export function TerminalProcess() {
  const [animationKey, setAnimationKey] = useState(0);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Install in seconds
          </h2>
          <p className="mt-2 text-muted-foreground">
            One command. Full source code. Ready to customize.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Terminal */}
          <div>
            <TerminalAnimationRoot
              key={animationKey}
              alwaysDark={true}
              backgroundImage={backgroundImage}
              className="relative overflow-hidden rounded-xl"
              defaultActiveTab={0}
              hideCursorOnComplete={false}
              tabs={shaderTabs}
            >
              {!backgroundImage && <TerminalAnimationBackgroundGradient />}

              <TerminalAnimationContainer className="max-w-none px-0 pt-0 pb-0">
                <TerminalAnimationWindow
                  className="rounded-xl outline-1 outline-white/20"
                  animateOnVisible={true}
                >
                  <TerminalAnimationContent className="relative min-h-[280px] px-5 py-5 sm:px-6 sm:py-6">
                    <CopyButton text="npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json" />

                    <div className="flex items-center gap-2">
                      <span className="select-none font-mono text-muted-foreground text-sm">
                        $
                      </span>
                      <TerminalAnimationCommandBar
                        className="font-mono text-foreground text-sm"
                        cursor={<TerminalAnimationBlinkingCursor />}
                      />
                    </div>

                    <TerminalAnimationOutput
                      className="mt-2"
                      renderLine={(
                        line: TerminalLine,
                        _i: number,
                        visible: boolean,
                      ) => {
                        if (!visible) return null;
                        return (
                          <div className="leading-relaxed">
                            <span
                              className={cn(
                                "font-mono text-sm",
                                line.color ?? "text-muted-foreground",
                              )}
                            >
                              {line.text || "\u00A0"}
                            </span>
                          </div>
                        );
                      }}
                    />

                    <TerminalAnimationTrailingPrompt className="mt-2 flex items-center gap-2">
                      <span className="select-none font-mono text-muted-foreground text-sm">
                        $
                      </span>
                      <TerminalAnimationBlinkingCursor />
                    </TerminalAnimationTrailingPrompt>
                  </TerminalAnimationContent>

                  {/* Replay button */}
                  <div className="flex justify-center pb-4">
                    <button
                      className="rounded-md border border-border bg-muted/50 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
          <div className="flex flex-col justify-center space-y-6">
            {/* File structure */}
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Project Structure
              </p>
              <div className="font-mono text-sm text-muted-foreground">
                <div>your-project/</div>
                <div className="ml-4">├── components/</div>
                <div className="ml-8">└── shaders/</div>
                <div className="ml-12 flex items-center gap-2">
                  <span className="text-primary">├── ocean-wave.tsx</span>
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] text-primary">
                    new
                  </span>
                </div>
                <div className="ml-12">├── sunset-glow.tsx</div>
                <div className="ml-12">└── ...</div>
                <div className="ml-4">├── package.json</div>
                <div className="ml-4">└── ...</div>
              </div>
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">Full source code</p>
                  <p className="text-sm text-muted-foreground">
                    Customize colors, speeds, and effects
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">Uses Paper Design</p>
                  <p className="text-sm text-muted-foreground">
                    Clean, lightweight and fast
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">TypeScript ready</p>
                  <p className="text-sm text-muted-foreground">
                    Full type safety out of the box
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/docs"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse All Shaders
              <svg
                className="h-4 w-4"
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
