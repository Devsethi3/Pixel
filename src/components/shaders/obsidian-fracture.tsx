// 5. Obsidian Fracture - Cracked obsidian with molten glow
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface ObsidianFractureProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  heatLevel?: number;
}

export default function ObsidianFracture({
  children,
  className,
  speed = 0.04,
  intensity = 0.4,
  heatLevel = 0.6,
}: ObsidianFractureProps) {
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
          {/* Obsidian base */}
          <GrainGradient
            colors={["#0F0F0F", "#1A1A1A", "#2D2D2D"]}
            colorBack="#000000"
            speed={speed * 0.3}
            scale={0.6}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={intensity * 0.5}
            noise={0.3}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Molten core */}
          <GrainGradient
            colors={["#FF4500", "#FF6B00", "#FFD700"]}
            colorBack="#00000000"
            speed={speed * heatLevel * 2}
            scale={0.35}
            rotation={15}
            offsetX={0.05}
            offsetY={0}
            softness={0.4}
            intensity={intensity * heatLevel}
            noise={0.2}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "hard-light",
            }}
          />
          {/* Heat distortion */}
          <GrainGradient
            colors={["#FF0000", "#FF4500", "#8B0000"]}
            colorBack="#00000000"
            speed={speed * heatLevel * 1.5}
            scale={0.5}
            rotation={-45}
            offsetX={-0.1}
            offsetY={0.1}
            softness={0.6}
            intensity={intensity * heatLevel * 0.3}
            noise={0.15}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "color-dodge",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}
