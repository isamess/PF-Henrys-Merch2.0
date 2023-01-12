import {Router, Request, Response} from 'express'
import { addNewCategory, getAllCategories, getCategoryById } from '../Controllers/categoryController'

const routes= Router();



routes.get('/', async(req: Request, res: Response)=>{
    try {
        const result= await getAllCategories();
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({error_message: error.message})
    }
});

routes.get('/:id', async(req: Request, res: Response)=>{
    try {
        const result= await getCategoryById(req.params.id);
        res.status(200).json(result)
    } catch (error:any) {
        res.status(500).json({error_message: error.message});
    }
});

routes.post ('admin',  async(req: Request, res: Response)=>{
    try {
        const newCategory= req.body;
        const result= await addNewCategory(newCategory);
        res.status(200).json(result)
    } catch (error:any) {
        res.status(500).json({error_message: error.message})
        
    }
    });
    
export default routes; 