import { Router } from "express";
import { ProductsControllers, UsersControllers } from "../controllers/products.controllers";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.post("/", productsControllers.createProduct);

productsRouter.delete("/:id", productsControllers.deleteProduct);

export const usersRouter = Router();

const usersControllers = new UsersControllers();

usersRouter.post("/", usersControllers.addUser)
usersRouter.get("/", usersControllers.getUsers)