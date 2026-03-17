// 1. Liquid Chrome - Metallic liquid metal effect
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface LiquidChromeProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  reflectivity?: number;
}

export default function LiquidChrome({
  children,
  className,
  speed = 0.08,
  intensity = 0.35,
  reflectivity = 0.8,
}: LiquidChromeProps) {
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
          {/* Base metallic layer */}
          <GrainGradient
            colors={["#E8E8E8", "#A0A0A0", "#505050"]}
            colorBack="#1a1a1a"
            speed={speed}
            scale={0.4}
            rotation={45}
            offsetX={0}
            offsetY={0}
            softness={0.9}
            intensity={intensity * reflectivity}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Highlight layer */}
          <GrainGradient
            colors={["#FFFFFF", "#C0C0C0", "#808080"]}
            colorBack="#00000000"
            speed={speed * 1.5}
            scale={0.3}
            rotation={-20}
            offsetX={0.2}
            offsetY={-0.1}
            softness={0.95}
            intensity={intensity * 0.5}
            noise={0.02}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "overlay",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
