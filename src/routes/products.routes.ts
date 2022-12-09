import {Router} from 'express';
const router= Router();


router.get('/products', (req, res)=> res.json('getting products'));

export default router;