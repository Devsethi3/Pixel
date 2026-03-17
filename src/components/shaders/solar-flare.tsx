// 8. Solar Flare - Intense solar surface with eruptions
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface SolarFlareProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  eruption?: number;
}

export default function SolarFlare({
  children,
  className,
  speed = 0.2,
  intensity = 0.35,
  eruption = 0.8,
}: SolarFlareProps) {
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
          {/* Solar surface */}
          <GrainGradient
            colors={["#FF6600", "#FF8800", "#FFAA00"]}
            colorBack="#CC4400"
            speed={speed}
            scale={0.45}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.5}
            intensity={intensity}
            noise={0.25}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Corona */}
          <GrainGradient
            colors={["#FFCC00", "#FFDD44", "#FFEE88"]}
            colorBack="#00000000"
            speed={speed * eruption * 1.5}
            scale={0.35}
            rotation={30}
            offsetX={0.15}
            offsetY={-0.1}
            softness={0.6}
            intensity={intensity * eruption}
            noise={0.2}
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
          {/* Flare burst */}
          <GrainGradient
            colors={["#FFFFFF", "#FFFFCC", "#FFFF88"]}
            colorBack="#00000000"
            speed={speed * eruption * 2}
            scale={0.25}
            rotation={-45}
            offsetX={-0.1}
            offsetY={0.15}
            softness={0.7}
            intensity={intensity * eruption * 0.5}
            noise={0.15}
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
