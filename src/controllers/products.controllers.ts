import { Request, Response } from "express";
import { ProductsServices } from "../services/products.services";

export class ProductsControllers{
    getProducts(req: Request, res: Response): Response{
        const productsService = new ProductsServices();

        const response = productsService.getProducts();

        return res.status(200).json(response);
    }

    getOneProduct(req: Request, res: Response): Response{
        const productsService = new ProductsServices();

        const response = productsService.getOneProduct(req.params.id);

        return res.status(200).json(response);
    }

    createProduct(req: Request, res: Response): Response{
        const productsService = new ProductsServices();

        const response = productsService.createProduct(req.body.name, req.body.price);

        return res.status(201).json(response);
    }

    updateProduct(req: Request, res: Response): Response {
        const productsService = new ProductsServices()

        const response = productsService.updateProduct(req.params.id, req.body)

        return res.status(201).json(response)
    }

    deleteProduct(req: Request, res: Response): Response{
        const productsService = new ProductsServices();
       
        productsService.deleteProduct(req.params.id);

        return res.status(204).json();
    }
}