import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductIdValid } from "../middlewares/isProductIdValid.middleware";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createProductBodySchema } from "../schemas/createProductBody.schema";

export const productsRouter = Router();

const productsControllers = new ProductsControllers();

productsRouter.get("/", productsControllers.getProducts);

productsRouter.get("/:id", IsProductIdValid.execute, productsControllers.getOneProduct);

productsRouter.post("/", ValidateBody.execute({ body: createProductBodySchema }), productsControllers.createProduct);

productsRouter.delete("/:id", IsProductIdValid.execute, productsControllers.deleteProduct);

productsRouter.put("/:id",IsProductIdValid.execute, ValidateBody.execute({body: createProductBodySchema}), productsControllers.updateProduct);
