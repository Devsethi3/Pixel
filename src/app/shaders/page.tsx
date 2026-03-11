"use client";

import { useState, useMemo } from "react";
import { ShaderCard } from "@/components/shader-card";
import { ShaderPreview } from "@/components/shader-preview";
import { SHADERS } from "@/lib/shaders-config";
import { useFavoritesStore } from "@/lib/favorites-store";
import { useSearchParams } from "next/navigation";

// Import all shader components
import OceanWave from "@/components/shaders/ocean-wave";
import SunsetGlow from "@/components/shaders/sunset-glow";
import AuroraDream from "@/components/shaders/aurora-dream";
import CosmicDust from "@/components/shaders/cosmic-dust";
import MeshGradient from "@/components/shaders/mesh-gradient";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Search01Icon,
  SlidersHorizontalIcon,
} from "@hugeicons/core-free-icons";

const SHADER_COMPONENTS = {
  "ocean-wave": OceanWave,
  "sunset-glow": SunsetGlow,
  "aurora-dream": AuroraDream,
  "cosmic-dust": CosmicDust,
  "mesh-gradient": MeshGradient,
};

export default function ShadersPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { favorites } = useFavoritesStore();

  const showFavoritesOnly = searchParams.get("filter") === "favorites";

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    SHADERS.forEach((shader) => shader.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags);
  }, []);

  // Filter shaders
  const filteredShaders = useMemo(() => {
    return SHADERS.filter((shader) => {
      // Search filter
      const matchesSearch =
        shader.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shader.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Tag filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => shader.tags.includes(tag));

      // Favorites filter
      const matchesFavorites =
        !showFavoritesOnly || favorites.includes(shader.id);

      return matchesSearch && matchesTags && matchesFavorites;
    });
  }, [searchQuery, selectedTags, showFavoritesOnly, favorites]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Shader Gallery</h1>
          <p className="text-muted-foreground">
            {showFavoritesOnly
              ? `${filteredShaders.length} favorited shader${filteredShaders.length !== 1 ? "s" : ""}`
              : `${SHADERS.length} beautiful shader backgrounds ready to use`}
          </p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <HugeiconsIcon
              icon={Search01Icon}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search shaders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={SlidersHorizontalIcon}
              className="h-4 w-4 text-muted-foreground"
            />
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredShaders.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            {showFavoritesOnly
              ? "No favorites yet. Start exploring and save your favorites!"
              : "No shaders found. Try adjusting your filters."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShaders.map((shader) => (
            <ShaderCard
              key={shader.id}
              shader={shader}
              preview={
                SHADER_COMPONENTS[
                  shader.component as keyof typeof SHADER_COMPONENTS
                ]
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
