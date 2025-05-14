import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Add the product to the database
const Products = async (req, res) => {
  try {
    // get data from the req.body
    const { name, description, price } = req.body;

    // parse the price to a number
    // because using form data it accepts string values
    const priceFloat = parseFloat(price);

    // for cloudinary image
    const imageUrl = await req.file?.path;


    //    product creation
    const newProduct = await prisma.products.create({
      data: {
        name,
        description,
        price: priceFloat,
        imageUrl,
      },
    });

    //   save the new product to the database
    res.json({
      status: 200,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error while creating a new product", error);
    res.status(500).json({ message: "Error while creating a new product" });
  }
};

// Get all products from the database
const getAllProducts = async (req, res) => {
  try {
    const products = await prisma.products.findMany({
      orderBy:{
        createdAt: "desc",
      }
    });

    res.json({
      status: 200,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while fetching all products" });
  }
};

export { Products, getAllProducts };
