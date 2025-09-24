import express from "express";
import ProductsRouter from "./routes";
// import os from "node:os";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/products", ProductsRouter);

// setInterval(() => {
//   const memory = process.memoryUsage();
//   console.log(`Heap usado: ${(memory.heapUsed / 1024 / 1024).toFixed(2)} MB`);
//   console.log(`Memória total: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
//   console.log(`Memória livre: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
// }, 5000);

app.listen(PORT, () => {
  console.log(`Servidor cach rodando em http://localhost:${PORT}`);
});
