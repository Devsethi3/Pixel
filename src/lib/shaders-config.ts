import type { CategoryId } from "@/lib/constants";

export interface ShaderConfig {
  id: string;
  name: string;
  description: string;
  category: Exclude<CategoryId, "all" | "favorites">;
  tags: string[];
  colors: string[];
  performanceRating: "low" | "medium" | "high";
  dependencies: string[];
  props: ShaderPropConfig[];
  defaultProps: Record<string, unknown>;
}

export interface ShaderPropConfig {
  name: string;
  type: string;
  default: string;
  description: string;
  required: boolean;
}

export const SHADERS_CONFIG: ShaderConfig[] = [
  {
    id: "ocean-wave",
    name: "Ocean Wave",
    description:
      "Flowing blue gradient waves inspired by deep ocean currents. Perfect for hero sections and landing pages.",
    category: "gradients",
    tags: ["gradient", "wave", "blue", "animated", "ocean"],
    colors: ["#0066FF", "#00AAFF", "#004488"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.15",
        description: "Animation speed of the wave",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.15,
      intensity: 0.2,
    },
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    description:
      "Warm orange and pink gradients that evoke golden hour. Ideal for creative portfolios and warm-themed sites.",
    category: "gradients",
    tags: ["gradient", "warm", "orange", "pink", "sunset"],
    colors: ["#FF6B35", "#FF8E72", "#E83E8C"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.12",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.18",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.12,
      intensity: 0.18,
    },
  },
  {
    id: "aurora-dream",
    name: "Aurora Dream",
    description:
      "Vibrant multicolor aurora borealis effect with flowing gradients. Great for creative and artistic projects.",
    category: "gradients",
    tags: ["gradient", "aurora", "multicolor", "vibrant", "animated"],
    colors: ["#00FF88", "#7B2FFF", "#00BBFF"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.1",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.22",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.1,
      intensity: 0.22,
    },
  },
  {
    id: "mesh-gradient",
    name: "Mesh Gradient",
    description:
      "Modern mesh-style gradient with smooth purple and pink transitions. Perfect for SaaS and modern web applications.",
    category: "gradients",
    tags: ["gradient", "mesh", "purple", "pink", "modern"],
    colors: ["#9F8EEC", "#E879A8", "#6696EA"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.17",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.16",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.17,
      intensity: 0.16,
    },
  },
  {
    id: "cosmic-dust",
    name: "Cosmic Dust",
    description:
      "Deep space-themed shader with dark purple and starlight accents. Ideal for dark-themed applications.",
    category: "decorative",
    tags: ["space", "dark", "cosmic", "purple", "animated"],
    colors: ["#1A0533", "#6B21A8", "#C084FC"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.08",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.25",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.08,
      intensity: 0.25,
    },
  },
  {
    id: "neon-pulse",
    name: "Neon Pulse",
    description:
      "Glowing neon-inspired shader with pulsing cyan and magenta. Perfect for gaming sites and creative portfolios.",
    category: "effects",
    tags: ["neon", "glow", "cyan", "magenta", "pulse"],
    colors: ["#00FFFF", "#FF00FF", "#0A0A2E"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.2",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.2,
      intensity: 0.2,
    },
  },
  {
    id: "particle-field",
    name: "Particle Field",
    description:
      "Floating particle-style gradient creating a sense of depth. Great for tech-focused landing pages.",
    category: "decorative",
    tags: ["particles", "depth", "teal", "emerald", "animated"],
    colors: ["#0D9488", "#10B981", "#064E3B"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.1",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.1,
      intensity: 0.2,
    },
  },
  {
    id: "geometric-pattern",
    name: "Geometric Pattern",
    description:
      "Structured geometric gradient with warm amber tones. Ideal for corporate and professional designs.",
    category: "geometric",
    tags: ["geometric", "pattern", "amber", "structured", "warm"],
    colors: ["#F59E0B", "#D97706", "#92400E"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.14",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.15",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.14,
      intensity: 0.15,
    },
  },
  {
    id: "grid-morph",
    name: "Grid Morph",
    description:
      "Morphing grid-inspired gradient with cool indigo and slate tones. Perfect for developer tools and dashboards.",
    category: "geometric",
    tags: ["grid", "morph", "indigo", "slate", "technical"],
    colors: ["#6366F1", "#818CF8", "#334155"],
    performanceRating: "low",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.12",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.18",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.12,
      intensity: 0.18,
    },
  },
  {
    id: "glitch-wave",
    name: "Glitch Wave",
    description:
      "Digital distortion-style shader with bold red and dark accents. Great for edgy, modern designs.",
    category: "effects",
    tags: ["glitch", "digital", "red", "distortion", "bold"],
    colors: ["#EF4444", "#DC2626", "#1C1917"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.18",
        description: "Animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.22",
        description: "Visual intensity of the grain effect",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.18,
      intensity: 0.22,
    },
  },

  // NEW UNIQUE SHADERS

  {
    id: "liquid-chrome",
    name: "Liquid Chrome",
    description:
      "Sleek metallic liquid metal effect with realistic reflections. Perfect for luxury brands and premium product showcases.",
    category: "effects",
    tags: ["metallic", "chrome", "liquid", "premium", "luxury", "reflective"],
    colors: ["#E8E8E8", "#A0A0A0", "#505050"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.08",
        description: "Animation speed of the liquid motion",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.35",
        description: "Visual intensity of the metallic effect",
        required: false,
      },
      {
        name: "reflectivity",
        type: "number",
        default: "0.8",
        description: "Intensity of surface reflections (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.08,
      intensity: 0.35,
      reflectivity: 0.8,
    },
  },
  {
    id: "plasma-vortex",
    name: "Plasma Vortex",
    description:
      "Intense swirling plasma energy vortex with vibrant colors. Ideal for gaming, sci-fi, and high-energy applications.",
    category: "effects",
    tags: [
      "plasma",
      "vortex",
      "energy",
      "swirl",
      "vibrant",
      "gaming",
      "sci-fi",
    ],
    colors: ["#FF006E", "#8338EC", "#3A86FF", "#FB5607", "#FFBE0B"],
    performanceRating: "high",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.25",
        description: "Rotation speed of the vortex",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.3",
        description: "Visual intensity of the plasma effect",
        required: false,
      },
      {
        name: "turbulence",
        type: "number",
        default: "0.6",
        description: "Amount of chaotic turbulence in the vortex (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.25,
      intensity: 0.3,
      turbulence: 0.6,
    },
  },
  {
    id: "holographic-foil",
    name: "Holographic Foil",
    description:
      "Stunning iridescent rainbow holographic effect with dynamic shimmer. Perfect for music, fashion, and creative portfolios.",
    category: "gradients",
    tags: [
      "holographic",
      "rainbow",
      "iridescent",
      "shimmer",
      "fashion",
      "creative",
    ],
    colors: ["#FF0080", "#7928CA", "#0070F3", "#00DFD8"],
    performanceRating: "high",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.12",
        description: "Animation speed of color shifts",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.28",
        description: "Visual intensity of the holographic effect",
        required: false,
      },
      {
        name: "shimmer",
        type: "number",
        default: "0.7",
        description: "Intensity of the shimmer highlights (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.12,
      intensity: 0.28,
      shimmer: 0.7,
    },
  },
  {
    id: "bioluminescent",
    name: "Bioluminescent",
    description:
      "Mesmerizing deep-sea bioluminescent glow with organic pulsing. Perfect for nature, science, and ambient applications.",
    category: "decorative",
    tags: ["bioluminescent", "ocean", "glow", "organic", "nature", "deep-sea"],
    colors: ["#001219", "#0A9396", "#94D2BD", "#00F5D4", "#9EF01A"],
    performanceRating: "high",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.06",
        description: "Base animation speed",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.32",
        description: "Visual intensity of the glow effect",
        required: false,
      },
      {
        name: "pulseRate",
        type: "number",
        default: "0.5",
        description: "Rate of the organic pulsing animation (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.06,
      intensity: 0.32,
      pulseRate: 0.5,
    },
  },
  {
    id: "obsidian-fracture",
    name: "Obsidian Fracture",
    description:
      "Dark volcanic obsidian with glowing molten fractures. Ideal for dark themes, gaming, and dramatic presentations.",
    category: "effects",
    tags: ["obsidian", "volcanic", "molten", "dark", "dramatic", "lava"],
    colors: ["#0F0F0F", "#FF4500", "#FF6B00", "#FFD700"],
    performanceRating: "high",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.04",
        description: "Animation speed of the molten flow",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.4",
        description: "Visual intensity of the effect",
        required: false,
      },
      {
        name: "heatLevel",
        type: "number",
        default: "0.6",
        description: "Intensity of the molten glow (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.04,
      intensity: 0.4,
      heatLevel: 0.6,
    },
  },
  {
    id: "quantum-flux",
    name: "Quantum Flux",
    description:
      "Abstract quantum interference patterns with wave superposition. Perfect for tech, AI, and futuristic applications.",
    category: "geometric",
    tags: [
      "quantum",
      "abstract",
      "interference",
      "tech",
      "ai",
      "futuristic",
      "waves",
    ],
    colors: ["#0D1B2A", "#00F5FF", "#BF00FF", "#FFFFFF"],
    performanceRating: "high",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.15",
        description: "Animation speed of the wave patterns",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.26",
        description: "Visual intensity of the quantum effect",
        required: false,
      },
      {
        name: "complexity",
        type: "number",
        default: "0.7",
        description: "Complexity of the interference patterns (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.15,
      intensity: 0.26,
      complexity: 0.7,
    },
  },
  {
    id: "ethereal-mist",
    name: "Ethereal Mist",
    description:
      "Soft, dreamy fog effect with subtle pastel color shifts. Ideal for wellness, beauty, and elegant designs.",
    category: "gradients",
    tags: ["mist", "fog", "dreamy", "soft", "pastel", "elegant", "wellness"],
    colors: ["#F8F9FA", "#DDD6FE", "#FBCFE8", "#A78BFA", "#F472B6"],
    performanceRating: "medium",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.05",
        description: "Animation speed of the mist movement",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.2",
        description: "Visual intensity of the mist effect",
        required: false,
      },
      {
        name: "density",
        type: "number",
        default: "0.6",
        description: "Density of the fog layers (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.05,
      intensity: 0.2,
      density: 0.6,
    },
  },
  {
    id: "solar-flare",
    name: "Solar Flare",
    description:
      "Intense solar surface with dynamic eruptions and corona effects. Great for energy, power, and dramatic hero sections.",
    category: "effects",
    tags: ["solar", "sun", "flare", "energy", "fire", "dramatic", "corona"],
    colors: ["#FF6600", "#FF8800", "#FFAA00", "#FFCC00", "#FFFFFF"],
    performanceRating: "high",
    dependencies: ["@paper-design/shaders-react"],
    props: [
      {
        name: "children",
        type: "React.ReactNode",
        default: "-",
        description: "Content to render above the shader background",
        required: false,
      },
      {
        name: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the container",
        required: false,
      },
      {
        name: "speed",
        type: "number",
        default: "0.2",
        description: "Animation speed of the solar activity",
        required: false,
      },
      {
        name: "intensity",
        type: "number",
        default: "0.35",
        description: "Visual intensity of the solar effect",
        required: false,
      },
      {
        name: "eruption",
        type: "number",
        default: "0.8",
        description: "Intensity of solar flare eruptions (0-1)",
        required: false,
      },
    ],
    defaultProps: {
      speed: 0.2,
      intensity: 0.35,
      eruption: 0.8,
    },
  },
];

export function getShaderById(id: string): ShaderConfig | undefined {
  return SHADERS_CONFIG.find((s) => s.id === id);
}

export function getShadersByCategory(category: CategoryId): ShaderConfig[] {
  if (category === "all") return SHADERS_CONFIG;
  if (category === "favorites") return [];
  return SHADERS_CONFIG.filter((s) => s.category === category);
}

export function searchShaders(query: string): ShaderConfig[] {
  const lower = query.toLowerCase().trim();
  if (!lower) return SHADERS_CONFIG;

  return SHADERS_CONFIG.filter(
    (shader) =>
      shader.name.toLowerCase().includes(lower) ||
      shader.description.toLowerCase().includes(lower) ||
      shader.tags.some((tag) => tag.includes(lower)) ||
      shader.category.includes(lower),
  );
}
