import express from 'express';
import ProductsRouter from './routes.js';

const app = express();

app.use(express.json())

app.use('/products', ProductsRouter);

let origin = ''

export function inicializerServerCach(port: string, newOrigin: string) {
    origin = newOrigin
    app.listen(port, () => {
        console.log(`Servidor cach rodando em http://localhost:${port} e a origin ${newOrigin}`);
    });
}
export function getOrigin() {
    return origin;
}