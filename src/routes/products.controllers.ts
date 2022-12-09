import {RequestHandler} from 'express'; //el RequestHandler ayuda a que se reconozca el request

export const createProducts: RequestHandler= (req, res)=> {
    res.json('creating products')
} 

export const getProducts: RequestHandler= (req, res)=> {
    res.json('getting products')
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
