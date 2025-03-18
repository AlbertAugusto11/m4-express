import { generateId, productsDatabase } from "../database/database";
import { IProduct } from "../interfaces/products.interfaces";

export class ProductsServices{
    getProducts(){
        return productsDatabase;
    }

    getOneProduct(id: string){
        const findProduct = productsDatabase.find(product => product.id === Number(id));

        return findProduct;
    }

    createProduct(name: string, price: number){
        const newProduct: IProduct = { id: generateId(), name, price };
        
        productsDatabase.push(newProduct);

        return newProduct;
    }

    updateProduct(id: string, body: IProduct) {
        const findIndex = productsDatabase.findIndex(element => element.id === Number(id))
        productsDatabase.splice(findIndex,1,{...body, id: Number(id)})
        const newProduct = productsDatabase[findIndex]

        return newProduct
    }

    deleteProduct(id: string){
        const index = productsDatabase.findIndex(product => product.id === Number(id));

        productsDatabase.splice(index, 1);
    }
}