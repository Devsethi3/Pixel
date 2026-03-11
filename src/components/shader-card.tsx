"use client";

import { useState } from "react";
import { ShaderConfig } from "@/lib/shaders-config";
import { useFavoritesStore } from "@/lib/favorites-store";
import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CopyCheckIcon,
  CopyIcon,
  FavouriteIcon,
} from "@hugeicons/core-free-icons";

interface ShaderCardProps {
  shader: ShaderConfig;
  preview: React.ComponentType<{ className?: string }>;
}

export function ShaderCard({ shader, preview: Preview }: ShaderCardProps) {
  const [copied, setCopied] = useState(false);
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorited = isFavorite(shader.id);

  const installCommand = `npx shadcn@latest add lumina.devsethi.site/r/${shader.id}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-lg border bg-card overflow-hidden transition-all hover:shadow-lg">
      {/* Preview */}
      <div className="relative h-48 overflow-hidden">
        <Preview className="w-full h-full" />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={() => toggleFavorite(shader.id)}
            className={cn(
              "p-2 rounded-md border bg-background/50 backdrop-blur-sm transition-colors",
              favorited ? "text-red-500 border-red-500/50" : "hover:bg-accent",
            )}
            aria-label={
              favorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <HugeiconsIcon
              icon={FavouriteIcon}
              className={cn("h-4 w-4", favorited && "fill-current")}
            />
          </button>

          <button
            onClick={handleCopy}
            className="p-2 rounded-md border bg-background/50 backdrop-blur-sm hover:bg-accent transition-colors"
            aria-label="Copy install command"
          >
            {copied ? (
              <HugeiconsIcon icon={CopyIcon} className="h-4 w-4 text-primary" />
            ) : (
              <HugeiconsIcon
                icon={CopyCheckIcon}
                className="h-4 w-4 text-primary"
              />
            )}
          </button>
        </div>

        {/* Performance badge */}
        <div className="absolute top-2 right-2">
          <span
            className={cn(
              "text-[10px] px-2 py-0.5 rounded-full border backdrop-blur-sm",
              shader.performance === "high"
                ? "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400"
                : "bg-yellow-500/10 border-yellow-500/20 text-yellow-600 dark:text-yellow-400",
            )}
          >
            {shader.performance === "high" ? "Fast" : "Moderate"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-medium text-sm">{shader.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {shader.description}
          </p>
        </div>

        {/* Color palette */}
        <div className="flex gap-1.5">
          {shader.colors.map((color, i) => (
            <div
              key={i}
              className="h-5 w-5 rounded-full border border-border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {shader.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Install command */}
        <div className="pt-2 border-t">
          <code className="text-[10px] text-muted-foreground break-all">
            {installCommand}
          </code>
        </div>
      </div>
    </div>
  );
}
