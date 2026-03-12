import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import { SHADERS_CONFIG } from "../lib/shaders-config";
import { generateRegistryItem } from "../lib/registry";

const OUTPUT_DIR = join(process.cwd(), "public", "r");

function main() {
  // Ensure output directory exists
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let generated = 0;
  let failed = 0;

  for (const shader of SHADERS_CONFIG) {
    const registryItem = generateRegistryItem(shader.id);

    if (!registryItem) {
      console.error(`❌ Failed to generate registry for: ${shader.id}`);
      failed++;
      continue;
    }

    const outputPath = join(OUTPUT_DIR, `${shader.id}.json`);
    writeFileSync(outputPath, JSON.stringify(registryItem, null, 2));
    console.log(`✅ Generated: ${outputPath}`);
    generated++;
  }

  console.log(
    `\n📦 Registry generation complete: ${generated} generated, ${failed} failed`,
  );
}

main();
