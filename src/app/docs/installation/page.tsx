import type { Metadata } from "next";
import { CodeBlockCommand } from "@/components/docs/code-block-command";
import { CodeBlock } from "@/components/docs/code-block";
import { convertNpmCommand } from "@/lib/convert-npm-command";

export const metadata: Metadata = {
  title: "Installation",
  description: "How to install Pixel shader components in your project.",
};

export default function InstallationPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
      <p className="lead text-lg text-muted-foreground">
        There are two ways to install Pixel shader components: using the shadcn
        CLI (recommended) or manual installation.
      </p>

      <hr className="my-8" />

      <h2>Method 1: shadcn CLI (Recommended)</h2>
      <p>
        The easiest way to add a shader component is using the shadcn CLI. This
        handles dependencies and places the component in your project
        automatically.
      </p>

      <div className="not-prose my-6">
        <CodeBlockCommand
          {...convertNpmCommand(
            "npx shadcn add https://pixel.devsethi.site/r/ocean-wave.json",
          )}
        />
      </div>

      <p>
        This will install the required dependencies and create the component
        file at <code>components/shaders/ocean-wave.tsx</code>.
      </p>

      <hr className="my-8" />

      <h2>Method 2: Manual Installation</h2>

      <h3>Step 1: Install dependencies</h3>
      <p>All shader components require the Paper Design shaders library:</p>

      <div className="not-prose my-6">
        <CodeBlockCommand
          {...convertNpmCommand("npm install @paper-design/shaders-react")}
        />
      </div>

      <h3>Step 2: Copy the component</h3>
      <p>
        Browse the <a href="/docs">shader documentation</a> and copy the
        component code into your project. Each shader doc includes a full
        copy-paste component.
      </p>

      <h3>Step 3: Import and use</h3>
      <p>Import the component and wrap your content with it:</p>

      <div className="not-prose my-6">
        <CodeBlock
          code={`import OceanWave from "@/components/shaders/ocean-wave"

export default function Page() {
  return (
    <OceanWave className="min-h-screen">
      <YourContent />
    </OceanWave>
  )
}`}
          language="tsx"
        />
      </div>

      <hr className="my-8" />

      <h2>Project Structure</h2>
      <p>
        After installation, your project will include shader components in the
        following structure:
      </p>

      <div className="not-prose my-6">
        <CodeBlock
          code={`your-project/
├── components/
│   └── shaders/
│       ├── ocean-wave.tsx
│       ├── sunset-glow.tsx
│       └── ...
├── package.json
└── ...`}
          language="bash"
          filename="Project Structure"
        />
      </div>
    </article>
  );
}
