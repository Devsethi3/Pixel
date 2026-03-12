"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface GridMorphProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function GridMorph({
  children,
  className,
  speed = 0.12,
  intensity = 0.18,
}: GridMorphProps) {
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
          colors={["#6366F1", "#818CF8", "#334155"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.5}
          rotation={-120}
          offsetX={-0.1}
          offsetY={-0.2}
          softness={0.6}
          intensity={intensity}
          noise={0.19}
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
