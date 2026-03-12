"use client";

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
}