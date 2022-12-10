import {RequestHandler} from 'express'; //el RequestHandler ayuda a que se reconozca el request

export const createProduct: RequestHandler= (req, res)=> {
    res.json('creating product')
} 

export const getProducts: RequestHandler= (req, res)=> {
    res.json('getting all products')
}  

export const getProduct: RequestHandler= (req, res)=> {
    res.json('getting one product')
} 

export const deleteProduct: RequestHandler= (req, res)=> {
    res.json('deleting products')
} 

export const updateProduct: RequestHandler= (req, res)=> {
    res.json('updating products')
} 
