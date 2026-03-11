import { CodeBlock } from "@/components/code-block";
import {
  ComputerTerminal01Icon,
  Configuration01Icon,
  ShieldEnergyIcon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function DocsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="space-y-12">
        {/* Introduction */}
        <section className="space-y-4">
          <h1 className="text-4xl font-bold">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Learn how to install and use Lumina shader backgrounds in your React
            and Next.js projects.
          </p>
        </section>

        {/* Quick Start */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <HugeiconsIcon
              icon={ComputerTerminal01Icon}
              className="h-6 w-6 text-primary"
            />
            Quick Start
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">1. Install a shader</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Use the shadcn CLI to install any shader component:
              </p>
              <CodeBlock code="npx shadcn@latest add lumina.devsethi.site/r/ocean-wave" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">2. Import and use</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Use the shader as a wrapper around your content:
              </p>
              <CodeBlock
                language="tsx"
                code={`import OceanWave from "@/components/shaders/ocean-wave";

export default function Page() {
  return (
    <OceanWave className="min-h-screen">
      <div className="container py-16">
        <h1>Your content here</h1>
      </div>
    </OceanWave>
  );
}`}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <HugeiconsIcon icon={ZapIcon} className="h-6 w-6 text-primary" />
            Features
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border p-4 space-y-2">
              <div className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={ShieldEnergyIcon}
                  className="h-5 w-5 text-primary"
                />
                <h3 className="font-medium">Performance Optimized</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                All shaders are optimized for 60fps on modern devices with
                lazy-loading support.
              </p>
            </div>

            <div className="rounded-lg border p-4 space-y-2">
              <div className="flex items-center gap-2">
                <HugeiconsIcon
                  icon={Configuration01Icon}
                  className="h-5 w-5 text-primary"
                />
                <h3 className="font-medium">Fully Customizable</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Each shader component accepts className and children props for
                full flexibility.
              </p>
            </div>
          </div>
        </section>

        {/* Props */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Component Props</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 font-medium">Prop</th>
                  <th className="text-left p-3 font-medium">Type</th>
                  <th className="text-left p-3 font-medium">Default</th>
                  <th className="text-left p-3 font-medium">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-3 font-mono text-xs">children</td>
                  <td className="p-3 text-muted-foreground">ReactNode</td>
                  <td className="p-3 text-muted-foreground">-</td>
                  <td className="p-3 text-muted-foreground">
                    Content to render above the shader
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-xs">className</td>
                  <td className="p-3 text-muted-foreground">string</td>
                  <td className="p-3 text-muted-foreground">-</td>
                  <td className="p-3 text-muted-foreground">
                    Additional CSS classes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dependencies */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Dependencies</h2>
          <p className="text-muted-foreground">
            Lumina shaders use Paper Design's shader library. The dependency is
            automatically installed when you add a shader.
          </p>
          <CodeBlock code="npm install @paper-design/shaders-react" />
        </section>

        {/* Best Practices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Best Practices</h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <span className="text-primary font-bold">1.</span>
              <div>
                <p className="font-medium mb-1">
                  Use appropriate performance settings
                </p>
                <p className="text-muted-foreground">
                  Check the performance badge on each shader. High-performance
                  shaders work well on all devices.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-primary font-bold">2.</span>
              <div>
                <p className="font-medium mb-1">Consider mobile users</p>
                <p className="text-muted-foreground">
                  All shaders are mobile-optimized, but test on real devices for
                  the best experience.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-primary font-bold">3.</span>
              <div>
                <p className="font-medium mb-1">Ensure readable content</p>
                <p className="text-muted-foreground">
                  Make sure your text has sufficient contrast against the shader
                  background.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
