import { existsSync } from "@std/fs/exists";

if (!existsSync("dist")) Deno.mkdirSync("dist");

for (let i = 0; i < 500; i++) {
  const content = JSON.stringify({
    name: `Blench Pass #${i}`,
    description: "The Choice We Make",
    image:
      "ipfs://bafybeid5vttf6ltqw3eo5fnbjwqtzm7vuth3perjqilm4yzlp34y2i4psa/blench-pass.mp4",
    animation_url:
      "ipfs://bafybeid5vttf6ltqw3eo5fnbjwqtzm7vuth3perjqilm4yzlp34y2i4psa/blench-pass.mp4",
    attributes: [],
  });

  Deno.writeTextFileSync(`dist/${i}`, content);
}
