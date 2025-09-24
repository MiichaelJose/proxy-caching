import { Router } from "express";
import { ProductController } from "./useCase/product.controller";

const productController = new ProductController();
const ProductsRouter = Router();

ProductsRouter.get("/", productController.findAll);
ProductsRouter.post("/", productController.create);

// ProductsRouter.get("/memory", (req: Request, res: Response) => {
//   const memory = process.memoryUsage();
//   const memoryMB = {
//     rss: (memory.rss / 1024 / 1024).toFixed(2),
//     heapTotal: (memory.heapTotal / 1024 / 1024).toFixed(2),
//     heapUsed: (memory.heapUsed / 1024 / 1024).toFixed(2),
//     external: (memory.external / 1024 / 1024).toFixed(2),
//   };
//   res.json([memoryMB]);
// });

export default ProductsRouter;
