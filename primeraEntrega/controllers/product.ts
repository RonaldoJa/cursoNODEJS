// import { getTime } from "../src/lib/utils";
// import { Request, Response } from "express";

// let products: Product[] = [];

// export interface Product{
//     id: number,
//     timestamp?: typeof getTime,
//     name: string,
//     description: string,
//     code: number,
//     url: string,
//     price: number,
//     stock: number,
// }

// export const getProducts = (req: Request, res: Response) => {
//     res.json(products);
// }

// export const getProductId = (req: Request, res: Response) => {
//     const id: number = Number(req.params.id);
//     if(id) {
//         const productParam = products.filter(producto => {
//             return producto.id === id;
//         })
//         res.json(productParam);
//     } else {
//         res.json(products);
//     }
// }

// export const postProduct = (req: Request, res: Response) => {
//     if(products.length === 0) {
//         const id: number = 1;
//         const sdsdsd = { dsdsd: Product } = req.body;
//         const addNewProduct = (newProduct: Product) => {
//             products.push(newProduct);
//         }
        
//     }
// }

import express from 'express';
import {BaseParams, ProductDetails,APIResponse, Empty} from '../interface/IProduct'

type Product = BaseParams & ProductDetails;

const app = express();

let products: Product[] = [];

app.get<Empty, APIResponse<Product[]>, Empty>('api/productos', (req, res) => {
    return res.json();
})

app.post<Empty, APIResponse<Product>, ProductDetails, Empty>('api/productos', (req, res) => {
    
  })

