import { remember, recall } from "./engines/mapping/learningMemory";

async function run() {
  await remember("P.Name", "productName", 1);

  await remember("Inv Qty", "quantity", 1);

  console.log(await recall("P.Name"));

  console.log(await recall("Inv Qty"));

  console.log(await recall("Unknown Header"));
}

run();