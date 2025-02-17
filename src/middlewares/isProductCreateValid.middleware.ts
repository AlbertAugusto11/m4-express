import { NextFunction, Request, Response } from "express";
import { createProductValid } from "../schemasZod/createProductValid";

export class IsProductCreateValid{
    static execute(req: Request, res: Response, next: NextFunction){
        try{
            createProductValid.parse(req.body)

            next()
        }catch(error){
            return res.status(409).json({menssage: "Dados recebidos não são validos"})
        }
    }
}