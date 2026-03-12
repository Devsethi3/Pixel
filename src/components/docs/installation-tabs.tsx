"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CodeBlockCommand } from "./code-block-command";
import { convertNpmCommand } from "@/lib/convert-npm-command";
import { CodeBlock } from "./code-block";
import { BASE_URL } from "@/lib/constants";

interface InstallationTabsProps {
  shaderId: string;
  componentCode: string;
  dependencies?: string[];
}

const tabs = [
  { id: "cli", label: "CLI" },
  { id: "manual", label: "Manual" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function toPascalCase(str: string): string {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

export function InstallationTabs({
  shaderId,
  componentCode,
  dependencies = ["@paper-design/shaders-react"],
}: InstallationTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("cli");

  const registryUrl = `${BASE_URL}/r/${shaderId}.json`;

  return (
    <div className="space-y-4">
      {/* Tab Selector */}
      <div className="flex items-center gap-1 rounded-lg bg-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="install-tab-bg"
                className="absolute inset-0 rounded-md bg-background shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === "cli" ? (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Run the following command to install the shader component:
            </p>
            <CodeBlockCommand
              {...convertNpmCommand(`npx shadcn add ${registryUrl}`)}
            />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">
                Step 1: Install dependencies
              </h4>
              <CodeBlockCommand
                {...convertNpmCommand(`npm install ${dependencies.join(" ")}`)}
              />
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">
                Step 2: Copy the component
              </h4>
              <p className="text-sm text-muted-foreground">
                Copy the following code into{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  components/shaders/{shaderId}.tsx
                </code>
              </p>
              <CodeBlock
                code={componentCode}
                language="tsx"
                filename={`components/shaders/${shaderId}.tsx`}
              />
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Step 3: Import and use</h4>
              <CodeBlock
                code={`import ${toPascalCase(shaderId)} from "@/components/shaders/${shaderId}"

export default function Page() {
  return (
    <${toPascalCase(shaderId)} className="min-h-screen">
      <div className="p-8">
        <h1>Your content here</h1>
      </div>
    </${toPascalCase(shaderId)}>
  )
}`}
                language="tsx"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
