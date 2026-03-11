import { NextRequest, NextResponse } from "next/server";
import { getRegistryEntry } from "@/lib/registry";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string[] } },
) {
  const shaderId = params.name[0];

  const entry = getRegistryEntry(shaderId);

  if (!entry) {
    return NextResponse.json({ error: "Shader not found" }, { status: 404 });
  }

  return NextResponse.json(entry);
}
