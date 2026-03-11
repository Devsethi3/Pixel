"use client";

interface ShaderPreviewProps {
  shader: React.ComponentType<{
    children?: React.ReactNode;
    className?: string;
  }>;
  className?: string;
}

export function ShaderPreview({
  shader: Shader,
  className,
}: ShaderPreviewProps) {
  return (
    <Shader className={className}>
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-2 p-6">
          <div className="text-4xl font-bold bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
            Lumina
          </div>
          <p className="text-sm text-muted-foreground">
            Beautiful shader backgrounds
          </p>
        </div>
      </div>
    </Shader>
  );
}
