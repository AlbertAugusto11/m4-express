import { productsDatabase } from "../database/database";
import { NextFunction, Request, Response } from "express";

export class IsProductsIdValid {
    static execute (req: Request, res: Response, next: NextFunction) {
        if(!productsDatabase.some(element => element.id === Number(req.params.id))) {
            return res.status(404).json({menssage: "Produto não Encontrado"})
        }
        return next()
    }
}
