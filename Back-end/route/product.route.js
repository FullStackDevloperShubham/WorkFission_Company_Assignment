import { Router } from 'express';
import { getAllProducts, Products } from '../controller/product.controller.js';
import upload from '../utils/multer.js'; // Your separated multer config

const router = Router();

// POST route with image upload middleware
router.post('/add-product', upload.single('image'), Products);

// GET route to fetch all products
router.get('/get-all-products', getAllProducts);

export default router;