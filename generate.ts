import { existsSync } from "@std/fs/exists";

if (!existsSync("dist")) Deno.mkdirSync("dist");

for (let i = 0; i < 500; i++) {
  const content = JSON.stringify({
    name: `Blench Pass #${i}`,
    description: "The Choice We Make ⛩️",
    image: "ipfs://bafybeicg3xfkaii27beurx3wrfcxyoosbkuelt7nad2f5dez2k6lcssrqm",
    animation_url:
      "ipfs://bafybeicg3xfkaii27beurx3wrfcxyoosbkuelt7nad2f5dez2k6lcssrqm",
    attributes: [],
  });

  Deno.writeTextFileSync(`dist/${i}`, content);
}
