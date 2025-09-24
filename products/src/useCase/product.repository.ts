import prisma from "../infra/prisma";
import { Product } from "./product.entitie";

export class ProductRepository {
  async findAll() {
    return await prisma.product.findMany();
  }
  async create(props: Product) {
    return await prisma.product.create({
      data: props.getProps(),
    });
  }
}
