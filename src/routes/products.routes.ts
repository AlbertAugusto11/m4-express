import { Router } from "express";
import { ProductsControllers, UsersControllers } from "../controllers/products.controllers";
import { IsProductsIdValid } from "../middleware/products.middleware";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.post("/", productsControllers.createProduct);

productsRouter.delete("/:id", IsProductsIdValid.execute, productsControllers.deleteProduct);

productsRouter.patch("/:id", IsProductsIdValid.execute, productsControllers.updateProduct)

export const usersRouter = Router();

const usersControllers = new UsersControllers();

usersRouter.post("/", usersControllers.addUser)
usersRouter.get("/", usersControllers.getUsers)