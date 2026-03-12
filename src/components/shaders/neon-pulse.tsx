"use client";

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
}
