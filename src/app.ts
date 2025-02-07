import express, { json, Request, Response } from "express";
import { productsRouter, usersRouter } from "./routes/products.routes";

const app = express();

app.use(json());

app.use("/products", productsRouter);
app.use("/users", usersRouter);

const port = 5173;

app.listen(port, () => {
    console.log(`API sucessfully started on port ${port}`);
})