// 6. Quantum Flux - Abstract quantum interference pattern
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface QuantumFluxProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  complexity?: number;
}

export default function QuantumFlux({
  children,
  className,
  speed = 0.15,
  intensity = 0.26,
  complexity = 0.7,
}: QuantumFluxProps) {
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
        <>
          {/* Quantum field base */}
          <GrainGradient
            colors={["#0D1B2A", "#1B263B", "#415A77"]}
            colorBack="#000814"
            speed={speed * 0.5}
            scale={0.55}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.75}
            intensity={intensity}
            noise={0.12}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Wave function A */}
          <GrainGradient
            colors={["#00F5FF", "#00D4FF", "#0099FF"]}
            colorBack="#00000000"
            speed={speed * complexity}
            scale={0.3}
            rotation={60}
            offsetX={0.2}
            offsetY={-0.2}
            softness={0.65}
            intensity={intensity * 0.7}
            noise={0.08}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "screen",
            }}
          />
          {/* Wave function B (interference) */}
          <GrainGradient
            colors={["#BF00FF", "#8000FF", "#4000FF"]}
            colorBack="#00000000"
            speed={speed * complexity * 1.2}
            scale={0.3}
            rotation={-60}
            offsetX={-0.2}
            offsetY={0.2}
            softness={0.65}
            intensity={intensity * 0.7}
            noise={0.08}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "screen",
            }}
          />
          {/* Superposition highlight */}
          <GrainGradient
            colors={["#FFFFFF", "#E0FFFF", "#FFE0FF"]}
            colorBack="#00000000"
            speed={speed * complexity * 2}
            scale={0.2}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.9}
            intensity={intensity * 0.25}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 3,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 4 }}>{children}</div>
    </div>
  );
}
