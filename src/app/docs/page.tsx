import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Package, Terminal, Palette } from "lucide-react";
import { CodeBlockCommand } from "@/components/docs/code-block-command";
import { CodeBlock } from "@/components/docs/code-block";
import { convertNpmCommand } from "@/lib/convert-npm-command";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Learn how to install and use Pixel shader backgrounds in your React and Next.js projects.",
};

export default function DocsPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Getting Started</h1>
      <p className="lead text-lg text-muted-foreground">
        Pixel provides beautiful, production-ready shader background components
        for React & Next.js. Install individually with the shadcn CLI or
        copy-paste manually.
      </p>

      <hr className="my-8" />

      {/* Prerequisites */}
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Package className="size-5" />
        Prerequisites
      </h2>
      <p>Before you start, make sure you have:</p>
      <ul>
        <li>
          A <strong>React</strong> or <strong>Next.js</strong> project
        </li>
        <li>
          <strong>Tailwind CSS</strong> configured
        </li>
        <li>
          <strong>shadcn/ui</strong> initialized (for CLI installation)
        </li>
      </ul>

      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Terminal className="size-5" />
        Quick Start
      </h2>
      <p>Install any shader component with a single command:</p>

      <div className="not-prose my-6">
        <CodeBlockCommand
          {...convertNpmCommand(
            "npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
          )}
        />
      </div>

      <p>Then import and use it in your component:</p>

      <div className="not-prose my-6">
        <CodeBlock
          code={`import OceanWave from "@/components/shaders/ocean-wave"

export default function Hero() {
  return (
    <OceanWave className="min-h-screen">
      <div className="flex items-center justify-center h-full p-8">
        <h1 className="text-5xl font-bold text-white">
          Hello World
        </h1>
      </div>
    </OceanWave>
  )
}`}
          language="tsx"
          filename="app/page.tsx"
        />
      </div>

      <hr className="my-8" />

      {/* Browse */}
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Palette className="size-5" />
        Browse Shaders
      </h2>
      <p>
        Explore all available shader components in the{" "}
        <Link href="/" className="font-medium underline underline-offset-4">
          gallery
        </Link>{" "}
        or browse the docs sidebar to find the perfect background for your
        project.
      </p>

      <div className="not-prose mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Browse Gallery
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
