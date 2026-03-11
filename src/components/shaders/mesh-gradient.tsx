"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

interface MeshGradientProps {
  children?: React.ReactNode;
  className?: string;
}

export default function MeshGradient({
  children,
  className,
}: MeshGradientProps) {
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
          colors={["#667eea", "#764ba2", "#f093fb"]}
          colorBack="#00000000"
          speed={0.15}
          scale={0.5}
          rotation={0}
          offsetX={0}
          offsetY={0}
          softness={0.7}
          intensity={0.18}
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
