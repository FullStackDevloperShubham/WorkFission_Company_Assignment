import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    console.log("product name ", productName)
    const [description, setDescription] = useState('');
    console.log("product descrion ", description)
    const [price, setPrice] = useState('');
    console.log("product price", price)
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // Save the file itself, not the URL
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a new FormData object
        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', description);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            // Send a POST request to the backend with the FormData
            const response = await axios.post('http://localhost:5000/api/add-product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle success
            console.log('Product added successfully:', response.data);
            // Reset form after submission (optional)
            setProductName('');
            setPrice('')
            setDescription('');
            setImage(null);

        } catch (error) {
            // Handle error
            console.error('Error while adding a new product', error);
        }
    };

    return (

        <>

            {/* navigation */}
            <div
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(34,34,34,0.7))",
                }}
                className="flex justify-center items-center gap-4 py-6 ">

                <Link to="/add">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300">
                        Add Product
                    </button>
                </Link>
                <Link to="/list">
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300">
                        List of Added Products
                    </button>
                </Link>
            </div>
            {/* navigation end */}
            <div
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.8), rgba(34,34,34,0.7))",
                }}
                className="min-h-screen flex items-center justify-center py-10 px-5"
            >
                <div className="bg-gray-300 p-8 rounded-2xl shadow-xl w-full max-w-lg">
                    <h1 className="text-3xl font-semibold text-center mb-6 text-black">Add Product</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Product Name */}
                        <div className="mb-6">
                            <label htmlFor="product-name" className="block text-black font-medium mb-2">Product Name</label>
                            <input
                                type="text"
                                id="product-name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                placeholder="Enter product name"
                                className="w-full p-4 border text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                                required
                            />
                        </div>

                        {/* Product Description */}
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-black font-medium mb-2">Description</label>
                            <textarea
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Enter product description"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                                rows="4"
                                required
                            />
                        </div>

                        {/* price */}
                        <div className="mb-6">
                            <label htmlFor="price" className="block text-black font-medium mb-2">Price</label>
                            <input
                                id="number"
                                value={price}
                                type="number"
                                onChange={(e) => setPrice(e.target.value)}
                                placeholder="Enter product Price"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                                required
                            />
                        </div>

                        {/* Product Image */}
                        <div className="mb-6">
                            <label htmlFor="image" className="block text-black font-medium mb-2">Product Image</label>
                            <input
                                type="file"
                                id="image"
                                onChange={handleImageChange}
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
                            />
                        </div>

                        {/* Image Preview */}
                        {image && (
                            <div className="mb-6">
                                <h3 className="text-gray-700 font-medium mb-2">Image Preview</h3>
                                <img src={URL.createObjectURL(image)} alt="Product" className="w-full h-64 object-cover rounded-lg shadow-md" />
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg transition duration-300"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;
