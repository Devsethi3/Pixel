import { SHADERS, ShaderConfig } from "./shaders-config";

export interface RegistryEntry {
  name: string;
  type: "registry:ui";
  files: string[];
  dependencies: string[];
}

export function getRegistryEntry(shaderId: string): RegistryEntry | null {
  const shader = SHADERS.find((s) => s.id === shaderId);
  if (!shader) return null;

  return {
    name: shader.id,
    type: "registry:ui",
    files: [`components/shaders/${shader.component}.tsx`],
    dependencies: ["@paper-design/shaders-react"],
  };
}

export function getAllShaders(): ShaderConfig[] {
  return SHADERS;
}
