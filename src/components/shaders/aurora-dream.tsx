"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";

interface AuroraDreamProps {
  children?: React.ReactNode;
  className?: string;
}

export default function AuroraDream({ children, className }: AuroraDreamProps) {
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
          colors={["#00FFA3", "#03E1FF", "#DC1FFF"]}
          colorBack="#00000000"
          speed={0.2}
          scale={0.45}
          rotation={90}
          offsetX={0.15}
          offsetY={-0.15}
          softness={0.75}
          intensity={0.2}
          noise={0.25}
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
