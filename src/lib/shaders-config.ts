export interface ShaderConfig {
  name: string;
  id: string;
  description: string;
  tags: string[];
  colors: string[];
  performance: "high" | "medium" | "low";
  mobileOptimized: boolean;
  component: string;
}

export const SHADERS: ShaderConfig[] = [
  {
    name: "Ocean Wave",
    id: "ocean-wave",
    description: "Smooth blue gradient waves with grain texture",
    tags: ["gradient", "animated", "blue"],
    colors: ["#9F8EEC", "#6696EA", "#3F7CFF"],
    performance: "high",
    mobileOptimized: true,
    component: "ocean-wave",
  },
  {
    name: "Sunset Glow",
    id: "sunset-glow",
    description: "Warm sunset colors with gentle movement",
    tags: ["gradient", "warm", "animated"],
    colors: ["#FF6B9D", "#FFA07A", "#FFD700"],
    performance: "high",
    mobileOptimized: true,
    component: "sunset-glow",
  },
  {
    name: "Aurora Dream",
    id: "aurora-dream",
    description: "Vibrant aurora-inspired gradient animation",
    tags: ["gradient", "vibrant", "animated"],
    colors: ["#00FFA3", "#03E1FF", "#DC1FFF"],
    performance: "medium",
    mobileOptimized: true,
    component: "aurora-dream",
  },
  {
    name: "Cosmic Dust",
    id: "cosmic-dust",
    description: "Deep space-inspired dark gradient",
    tags: ["gradient", "dark", "space"],
    colors: ["#4A148C", "#880E4F", "#1A237E"],
    performance: "high",
    mobileOptimized: true,
    component: "cosmic-dust",
  },
  {
    name: "Mesh Gradient",
    id: "mesh-gradient",
    description: "Modern mesh gradient with smooth transitions",
    tags: ["gradient", "modern", "animated"],
    colors: ["#667eea", "#764ba2", "#f093fb"],
    performance: "medium",
    mobileOptimized: true,
    component: "mesh-gradient",
  },
];
