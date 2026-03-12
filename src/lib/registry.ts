import { SHADERS_CONFIG } from "./shaders-config";
import { BASE_URL } from "./constants";

export interface RegistryItem {
  name: string;
  type: "registry:ui";
  category: string;
  files: {
    path: string;
    content: string;
    type: "registry:ui";
  }[];
  dependencies: string[];
  devDependencies: string[];
  tailwind: {
    config: Record<string, unknown>;
  };
}

// Map of shader IDs to their component source code
// In production, these would be read from the actual files
const COMPONENT_SOURCES: Record<string, string> = {
  "ocean-wave": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface OceanWaveProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function OceanWave({
  children,
  className,
  speed = 0.15,
  intensity = 0.2,
}: OceanWaveProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#0066FF", "#00AAFF", "#004488"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.6}
          rotation={-30}
          offsetX={0.1}
          offsetY={-0.15}
          softness={0.7}
          intensity={intensity}
          noise={0.2}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "sunset-glow": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface SunsetGlowProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function SunsetGlow({
  children,
  className,
  speed = 0.12,
  intensity = 0.18,
}: SunsetGlowProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#FF6B35", "#FF8E72", "#E83E8C"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.55}
          rotation={45}
          offsetX={-0.1}
          offsetY={0.2}
          softness={0.65}
          intensity={intensity}
          noise={0.18}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "aurora-dream": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface AuroraDreamProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function AuroraDream({
  children,
  className,
  speed = 0.1,
  intensity = 0.22,
}: AuroraDreamProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#00FF88", "#7B2FFF", "#00BBFF"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.65}
          rotation={-90}
          offsetX={0.15}
          offsetY={0.1}
          softness={0.6}
          intensity={intensity}
          noise={0.24}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "mesh-gradient": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface MeshGradientProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function MeshGradient({
  children,
  className,
  speed = 0.17,
  intensity = 0.16,
}: MeshGradientProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#9F8EEC", "#E879A8", "#6696EA"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.57}
          rotation={-143}
          offsetX={0.2}
          offsetY={-0.27}
          softness={0.67}
          intensity={intensity}
          noise={0.21}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "cosmic-dust": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface CosmicDustProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function CosmicDust({
  children,
  className,
  speed = 0.08,
  intensity = 0.25,
}: CosmicDustProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#1A0533", "#6B21A8", "#C084FC"]}
          colorBack="#0A001A"
          speed={speed}
          scale={0.5}
          rotation={60}
          offsetX={-0.2}
          offsetY={0.15}
          softness={0.55}
          intensity={intensity}
          noise={0.28}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "neon-pulse": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface NeonPulseProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function NeonPulse({
  children,
  className,
  speed = 0.2,
  intensity = 0.2,
}: NeonPulseProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#00FFFF", "#FF00FF", "#0A0A2E"]}
          colorBack="#05051A"
          speed={speed}
          scale={0.48}
          rotation={120}
          offsetX={0.05}
          offsetY={-0.1}
          softness={0.5}
          intensity={intensity}
          noise={0.22}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "particle-field": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function ParticleField({
  children,
  className,
  speed = 0.1,
  intensity = 0.2,
}: ParticleFieldProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#0D9488", "#10B981", "#064E3B"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.52}
          rotation={-60}
          offsetX={-0.15}
          offsetY={0.2}
          softness={0.58}
          intensity={intensity}
          noise={0.26}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "geometric-pattern": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GeometricPatternProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GeometricPattern({
  children,
  className,
  speed = 0.14,
  intensity = 0.15,
}: GeometricPatternProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#F59E0B", "#D97706", "#92400E"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.45}
          rotation={75}
          offsetX={0.25}
          offsetY={-0.05}
          softness={0.62}
          intensity={intensity}
          noise={0.15}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "grid-morph": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GridMorphProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GridMorph({
  children,
  className,
  speed = 0.12,
  intensity = 0.18,
}: GridMorphProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#6366F1", "#818CF8", "#334155"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.5}
          rotation={-120}
          offsetX={-0.1}
          offsetY={-0.2}
          softness={0.6}
          intensity={intensity}
          noise={0.19}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,

  "glitch-wave": `"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GlitchWaveProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GlitchWave({
  children,
  className,
  speed = 0.18,
  intensity = 0.22,
}: GlitchWaveProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ position: "relative" }}
    >
      {ready && (
        <GrainGradient
          colors={["#EF4444", "#DC2626", "#1C1917"]}
          colorBack="#0A0000"
          speed={speed}
          scale={0.42}
          rotation={-45}
          offsetX={0.3}
          offsetY={0.1}
          softness={0.45}
          intensity={intensity}
          noise={0.3}
          shape="wave"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}`,
};

export function getShaderComponentCode(id: string): string {
  return COMPONENT_SOURCES[id] || "// Component not found";
}

export function generateRegistryItem(shaderId: string): RegistryItem | null {
  const shader = SHADERS_CONFIG.find((s) => s.id === shaderId);
  const source = COMPONENT_SOURCES[shaderId];

  if (!shader || !source) return null;

  return {
    name: shader.id,
    type: "registry:ui",
    category: shader.category,
    files: [
      {
        path: `components/shaders/${shader.id}.tsx`,
        content: source,
        type: "registry:ui",
      },
    ],
    dependencies: shader.dependencies,
    devDependencies: [],
    tailwind: {
      config: {},
    },
  };
}
