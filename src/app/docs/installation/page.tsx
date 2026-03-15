import type { Metadata } from "next";
import { CodeBlockCommand } from "@/components/docs/code-block-command";
import { convertNpmCommand } from "@/lib/convert-npm-command";
import {
  InstallUsageCodeBlock,
  InstallStructureCodeBlock,
} from "@/components/docs/install-code-blocks";

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install Pixel shader components in your project.",
};

export default function InstallationPage() {
  return (
    <div className="max-w-3xl space-y-10 py-16">
      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-medium tracking-tight text-foreground lg:text-3xl">
          Installation
        </h2>
        <p className="text-base text-muted-foreground leading-8">
          There are two ways to install Pixel shader components: using the
          shadcn CLI (recommended) or manual installation.
        </p>
      </div>

      <hr className="border-border/60" />

      {/* Method 1 */}
      <section className="space-y-4">
        <h3 className="scroll-m-20 text-xl font-medium tracking-tight">
          Method 1: shadcn CLI (Recommended)
        </h3>
        <p className="text-muted-foreground leading-7">
          The easiest way to add a shader component is using the shadcn CLI.
          This handles dependencies and places the component in your project
          automatically.
        </p>

        <div className="rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
          <CodeBlockCommand
            {...convertNpmCommand(
              "npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
            )}
          />
        </div>

        <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg border">
          This will install the required dependencies and create the component
          file at{" "}
          <code className="font-semibold text-foreground">
            components/shaders/ocean-wave.tsx
          </code>
          .
        </p>
      </section>

      <hr className="border-border/60" />

      {/* Method 2 */}
      <section className="space-y-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Method 2: Manual Installation
        </h2>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-lg">
              1. Install dependencies
            </h3>
            <p className="text-muted-foreground leading-7">
              All shader components require the Paper Design shaders library:
            </p>
            <div className="rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
              <CodeBlockCommand
                {...convertNpmCommand(
                  "npm install @paper-design/shaders-react",
                )}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-lg">
              2. Copy the component
            </h3>
            <p className="text-muted-foreground leading-7">
              Browse the{" "}
              <a
                href="/docs"
                className="font-medium underline underline-offset-4 hover:text-primary"
              >
                shader documentation
              </a>{" "}
              and copy the component code into your project. Each shader doc
              includes a full copy-paste component.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-lg">
              3. Import and use
            </h3>
            <p className="text-muted-foreground leading-7">
              Import the component and wrap your content with it:
            </p>
            <div className="rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
              <InstallUsageCodeBlock />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border/60" />

      <section className="space-y-6">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Project Structure
        </h2>
        <p className="text-muted-foreground leading-7">
          After installation, your project will include shader components in the
          following structure:
        </p>

        <div className="rounded-xl overflow-hidden border bg-zinc-950 dark:bg-zinc-900 shadow-sm">
          <InstallStructureCodeBlock />
        </div>
      </section>
    </div>
  );
}
