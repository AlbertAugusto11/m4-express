import { Request, Response } from "express";
import { IProduct, IUser } from "../interfaces/products.interfaces";
import { generateId, productsDatabase, usersDataBese } from "../database/database";

export class ProductsControllers{
    getProducts(req: Request, res: Response): Response{
        if(productsDatabase.length == 0){    
            return res.status(200).json({menssge: "A lista está vazia", productsDatabase})
        }else{
            return res.status(200).json(productsDatabase)
        }
    }

    createProduct(req: Request, res: Response): Response{
        const newProduct: IProduct = { id: generateId(), name: req.body.name, price: Number(req.body.price) };
        
        productsDatabase.push(newProduct);

        return res.status(201).json(newProduct);
    }

    deleteProduct(req: Request, res: Response): Response{
        const index = productsDatabase.findIndex(product => product.id === Number(req.params.id));

        productsDatabase.splice(index, 1);
        return res.status(200).json({menssage:"Item Excluido com sucesso"});
    }

    updateProduct(req: Request, res: Response): Response{
        const index = productsDatabase.findIndex(product => product.id === Number(req.params.id))
        const newProduct: IProduct = {id: Number(req.params.id), name: req.body.name, price: req.body.price}

        productsDatabase.splice(index,1,newProduct)

        return res.status(201).json({...newProduct,mensage:"Produto Atualizado com Sucesso"})
    }
}

export class UsersControllers {
    addUser (req: Request, res: Response): Response {
        let newUser: IUser = { id: generateId(), name: req.body.name, email: req.body.email }
        usersDataBese.push(newUser)
        let userOk = {...newUser, mensage: "Usuário Criado com Sucesso"}

        return res.status(201).json(userOk)
    }
    getUsers (req: Request, res: Response): Response {
        return res.status(200).json(usersDataBese)
    }
}