"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface AuroraDreamProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
}

export default function AuroraDream({
  children,
  className,
  speed = 0.1,
  intensity = 0.22,
}: AuroraDreamProps) {
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
          colors={["#00FF88", "#7B2FFF", "#00BBFF"]}
          colorBack="#00000000"
          speed={speed}
          scale={0.65}
          rotation={-90}
          offsetX={0.15}
          offsetY={0.1}
          softness={0.6}
          intensity={intensity}
          noise={0.24}
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
