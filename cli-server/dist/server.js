import express from 'express';
import ProductsRouter from './routes.js';
import os from 'node:os';
const app = express();
app.use(express.json());
app.use('/products', ProductsRouter);
setInterval(() => {
    const memory = process.memoryUsage();
    console.log(`Heap usado: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Memória total: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Memória livre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
}, 5000); // a cada 5 segundos
export function inicializerServerCach(port, origin) {
    app.listen(port, () => {
        console.log(`Servidor cach rodando em http://localhost:${port} e a origin ${origin}`);
    });
}
//# sourceMappingURL=server.js.map