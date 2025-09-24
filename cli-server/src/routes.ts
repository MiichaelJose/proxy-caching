import axios from "axios";
import { Router, Request, Response } from "express";
import { getOrigin } from "./server.js";

const ProductsRouter = Router();

const products: Array<object> = []

ProductsRouter.get('/', async (req: Request, res: Response) => {
    if (products.length) {
        res.set("X-Cache", "HIT").status(200).send(products);
    } else {
        const response = await axios.get(getOrigin());
        products.push(response.data)
        res.set("X-Cache", "MISS").status(200).send(response.data);
    }
});

// ProductsRouter.post('/', (req: Request, res: Response) => {
//     products.push(req.body)
//     res.send(`Produto cadastrado!`).status(201);
// });

export default ProductsRouter;
