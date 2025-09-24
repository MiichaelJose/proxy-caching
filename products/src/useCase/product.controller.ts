import { Request, Response } from "express";
import { ProductRepository } from "./product.repository";
import { Product } from "./product.entitie";

export class ProductController {
  private productRepository: ProductRepository = new ProductRepository();

  create = async (req: Request, res: Response) => {
    res
      .status(201)
      .send(await this.productRepository.create(new Product(req.body)));
  };

  findAll = async (req: Request, res: Response) => {
    res.status(200).send(await this.productRepository.findAll());
  };
}
