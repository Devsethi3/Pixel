import Link from "next/link";
import OceanWave from "@/components/shaders/ocean-wave";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, GithubIcon } from "@hugeicons/core-free-icons";
import { CodeBlockCommand } from "@/components/code-block-command";
import { PixelParagraph } from "@/components/ui/pixel-paragraph-words";
import { HeroHeader } from "@/components/header";
import { PixelHeading } from "@/components/ui/pixel-heading-character";

export default function Home() {
  return (
    // OceanWave acts as the immersive background for the entire page
    <OceanWave className="relative min-h-screen selection:bg-primary/30">
      <HeroHeader />

      {/* Hero Section Container */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 py-20 md:px-12 lg:px-24">
        {/* Content Wrapper - Left aligned, constrained width for readability */}
        <div className="flex w-full flex-col items-start gap-8 lg:max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            15+ High-Performance Shaders
          </div>

          {/* Headings */}
          <div className="flex flex-col gap-2 md:gap-4">
            <PixelHeading className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
              Beautiful Shaders.
            </PixelHeading>
            <PixelHeading className="text-5xl font-extrabold tracking-tighter text-muted-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Just Copy Paste.
            </PixelHeading>
          </div>

          {/* Description Paragraph */}
          <PixelParagraph
            text="A curated collection of beautiful, performant shader backgrounds for React and Next.js. Install them directly into your project via the shadcn/ui CLI."
            pixelWords={[
              "Next.js",
              "shadcn/ui",
              "React",
              "shader",
              "backgrounds",
              "collection",
            ]}
            font="square"
            className="text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl"
          />

          {/* Code Block Container */}
          <div className="w-full max-w-2xl pt-4">
            <div className="rounded-xl border border-border/50 bg-background/50 p-2 shadow-2xl backdrop-blur-sm">
              <CodeBlockCommand
                pnpm="pnpm dlx shadcn add @ncdai/code-block-command"
                yarn="yarn shadcn add @ncdai/code-block-command"
                npm="npx shadcn add @ncdai/code-block-command"
                bun="bunx --bun shadcn add @ncdai/code-block-command"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex w-full flex-col gap-4 pt-6 sm:flex-row sm:items-center">
            <Link
              href="/shaders"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:ring-4 hover:ring-primary/20 active:scale-95"
            >
              Browse Shaders
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://github.com/devsethi/lumina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border/50 bg-background/40 px-8 text-base font-medium text-foreground shadow-sm backdrop-blur-md transition-all hover:bg-accent hover:text-accent-foreground active:scale-95"
            >
              <HugeiconsIcon icon={GithubIcon} className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      {/* Next Section (Scroll target indicator or next content) */}
      <section className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center border-t border-border/20 bg-background/80 backdrop-blur-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Explore the Collection
          </h2>
          <p className="mt-4 text-muted-foreground">
            More content goes here...
          </p>
        </div>
      </section>
    </OceanWave>
  );
}
