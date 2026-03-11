"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

interface CosmicDustProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CosmicDust({ children, className }: CosmicDustProps) {
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
          colors={["#4A148C", "#880E4F", "#1A237E"]}
          colorBack="#00000000"
          speed={0.08}
          scale={0.8}
          rotation={-90}
          offsetX={-0.1}
          offsetY={0.1}
          softness={0.9}
          intensity={0.12}
          noise={0.35}
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
