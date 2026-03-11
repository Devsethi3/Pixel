"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

interface SunsetGlowProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SunsetGlow({ children, className }: SunsetGlowProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {ready && (
        <GrainGradient
          colors={["#FF6B9D", "#FFA07A", "#FFD700"]}
          colorBack="#00000000"
          speed={0.12}
          scale={0.65}
          rotation={45}
          offsetX={0}
          offsetY={0}
          softness={0.8}
          intensity={0.14}
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
