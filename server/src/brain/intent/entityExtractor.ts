export function extractEntity(
  message: string
): string | undefined {

  const products = [

    "coffee beans",

    "rice",

    "milk",

    "sugar",

    "vanilla syrup"

  ];

  const query =
    message.toLowerCase();

  return products.find(product =>
    query.includes(product)
  );

}