// 7. Ethereal Mist - Dreamy fog with subtle color shifts
"use client";

import { useEffect, useState } from "react";
import { GrainGradient } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

interface EtherealMistProps {
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  intensity?: number;
  density?: number;
}

export default function EtherealMist({
  children,
  className,
  speed = 0.05,
  intensity = 0.2,
  density = 0.6,
}: EtherealMistProps) {
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
          {/* Soft base */}
          <GrainGradient
            colors={["#F8F9FA", "#E9ECEF", "#DEE2E6"]}
            colorBack="#FFFFFF"
            speed={speed * 0.3}
            scale={0.9}
            rotation={0}
            offsetX={0}
            offsetY={0}
            softness={0.98}
            intensity={intensity * 0.4}
            noise={0.03}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          />
          {/* Mist layer 1 */}
          <GrainGradient
            colors={["#DDD6FE", "#C4B5FD", "#A78BFA"]}
            colorBack="#00000000"
            speed={speed}
            scale={0.6}
            rotation={-10}
            offsetX={0.1}
            offsetY={0}
            softness={0.95}
            intensity={intensity * density}
            noise={0.06}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              mixBlendMode: "multiply",
            }}
          />
          {/* Mist layer 2 */}
          <GrainGradient
            colors={["#FBCFE8", "#F9A8D4", "#F472B6"]}
            colorBack="#00000000"
            speed={speed * 0.7}
            scale={0.7}
            rotation={15}
            offsetX={-0.15}
            offsetY={0.1}
            softness={0.95}
            intensity={intensity * density * 0.7}
            noise={0.05}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              mixBlendMode: "multiply",
            }}
          />
        </>
      )}
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </div>
  );
}
