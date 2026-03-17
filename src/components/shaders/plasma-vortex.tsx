// 2. Plasma Vortex - Swirling energy vortex effect
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface PlasmaVortexProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  turbulence?: number;
}

export default function PlasmaVortex({
  children,
  className,
  speed = 0.25,
  intensity = 0.3,
  turbulence = 0.6,
}: PlasmaVortexProps) {
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
          {/* Core vortex */}
          <GrainGradient
            colors={["#FF006E", "#8338EC", "#3A86FF"]}
            colorBack="#0D0221"
            speed={speed}
            scale={0.5}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.6}
            intensity={intensity}
            noise={turbulence * 0.4}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Outer energy ring */}
          <GrainGradient
            colors={["#FB5607", "#FFBE0B", "#FF006E"]}
            colorBack="#00000000"
            speed={speed * 0.7}
            scale={0.8}
            rotation={180}
            offsetX={-0.1}
            offsetY={0.1}
            softness={0.75}
            intensity={intensity * 0.6}
            noise={turbulence * 0.3}
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
        </>
      )}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
}
