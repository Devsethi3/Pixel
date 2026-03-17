// 4. Bioluminescent - Deep sea creature glow effect
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface BioluminescentProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  pulseRate?: number;
}

export default function Bioluminescent({
  children,
  className,
  speed = 0.06,
  intensity = 0.32,
  pulseRate = 0.5,
}: BioluminescentProps) {
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
        <>
          {/* Deep ocean base */}
          <GrainGradient
            colors={["#001219", "#005F73", "#0A9396"]}
            colorBack="#000508"
            speed={speed * 0.5}
            scale={0.7}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.8}
            intensity={intensity * 0.7}
            noise={0.15}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Bioluminescent glow */}
          <GrainGradient
            colors={["#94D2BD", "#00F5D4", "#00BBF9"]}
            colorBack="#00000000"
            speed={speed * pulseRate * 2}
            scale={0.4}
            rotation={45}
            offsetX={0.1}
            offsetY={-0.15}
            softness={0.7}
            intensity={intensity}
            noise={0.1}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "screen",
            }}
          />
          {/* Accent sparks */}
          <GrainGradient
            colors={["#E0AAFF", "#9EF01A", "#70E000"]}
            colorBack="#00000000"
            speed={speed * pulseRate * 3}
            scale={0.2}
            rotation={-30}
            offsetX={-0.2}
            offsetY={0.2}
            softness={0.6}
            intensity={intensity * 0.4}
            noise={0.25}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "screen",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}
