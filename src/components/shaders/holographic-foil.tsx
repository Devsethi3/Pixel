// 3. Holographic Foil - Iridescent rainbow holographic effect
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface HolographicFoilProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  shimmer?: number;
}

export default function HolographicFoil({
  children,
  className,
  speed = 0.12,
  intensity = 0.28,
  shimmer = 0.7,
}: HolographicFoilProps) {
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
          {/* Rainbow base */}
          <GrainGradient
            colors={["#FF0080", "#7928CA", "#0070F3"]}
            colorBack="#1a1a2e"
            speed={speed}
            scale={0.35}
            rotation={-15}
            offsetX={0}
            offsetY={0}
            softness={0.85}
            intensity={intensity}
            noise={0.08}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Secondary spectrum */}
          <GrainGradient
            colors={["#00DFD8", "#007CF0", "#7928CA"]}
            colorBack="#00000000"
            speed={speed * 1.3}
            scale={0.45}
            rotation={30}
            offsetX={0.15}
            offsetY={-0.1}
            softness={0.9}
            intensity={intensity * shimmer}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "color-dodge",
            }}
          />
          {/* Shimmer highlights */}
          <GrainGradient
            colors={["#FFFFFF", "#E0E0FF", "#FFE0F0"]}
            colorBack="#00000000"
            speed={speed * 2}
            scale={0.25}
            rotation={60}
            offsetX={-0.2}
            offsetY={0.15}
            softness={0.95}
            intensity={intensity * 0.4 * shimmer}
            noise={0.03}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}
