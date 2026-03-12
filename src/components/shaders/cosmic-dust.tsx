"use client";

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
}
