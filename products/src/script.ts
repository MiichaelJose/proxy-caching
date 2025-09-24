import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const product = await prisma.product.create({
    data: {
      name: "Celular",
      price: 10,
    },
  });
  console.log(product);

  const products = await prisma.product.findMany();
  console.log(products);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
