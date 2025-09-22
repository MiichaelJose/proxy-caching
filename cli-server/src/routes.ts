import { Router, Request, Response } from "express";

const ProductsRouter = Router();

const products: Array<object> = []

ProductsRouter.get('/', (req: Request, res: Response) => {
    res.send(products).status(200);
});

ProductsRouter.post('/', (req: Request, res: Response) => {
    products.push(req.body)
    res.send(`Produto cadastrado!`).status(201);
});

ProductsRouter.get('/memory', (req: Request, res: Response) => {
  const memory = process.memoryUsage();
  // Converte bytes para MB para ficar legível
  const memoryMB = {
    rss: (memory.rss / 1024 / 1024).toFixed(2),
    heapTotal: (memory.heapTotal / 1024 / 1024).toFixed(2),
    heapUsed: (memory.heapUsed / 1024 / 1024).toFixed(2),
    external: (memory.external / 1024 / 1024).toFixed(2)
  };
  
  res.json([memoryMB, ]);
});


export default ProductsRouter;
