import express from "express";
import dotenv from "dotenv";

// cors
import cors from 'cors'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// enable cors
app.use(cors());

// database connection import
import pool from "./db/db.connection.js";

// import routes
import ProductsRoutes from './route/product.route.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api',ProductsRoutes)


pool.connect().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
