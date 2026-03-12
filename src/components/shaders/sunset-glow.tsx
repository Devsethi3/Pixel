"use client";

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
}
