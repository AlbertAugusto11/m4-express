import { IProduct, IUser } from "../interfaces/products.interfaces";

export const productsDatabase: IProduct[] = [];
export const usersDataBese: IUser[] = [];

let id = 0;

export const generateId = () => {
    id++;
    return id;
}