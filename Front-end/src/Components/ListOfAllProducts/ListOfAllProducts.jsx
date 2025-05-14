import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";

const ListOfAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/get-all-products");
        setProducts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  // Filter products based on search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">

      {/* navigation */}
      <div className="mb-10 flex flex-col sm:flex-row sm:justify-center gap-4">
        <Link to="/add">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
            Add Product
          </button>
        </Link>
        <Link to="/list">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 w-full sm:w-auto">
            List of Added Products
          </button>
        </Link>
      </div>
      {/* navigation end */}
      
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🛍️ All Products
      </h1>



      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg w-1/2 sm:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              {product.imageUrl ? (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 flex items-center justify-center bg-gray-200 text-gray-500 text-lg">
                  🖼️ No Image
                </div>
              )}

              <div className="p-5 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Product Name: {product.name}
                </h2>

                <div className="flex items-center text-gray-600 text-base">
                  <span className="mr-2 text-xl">📝</span>
                  <span>Description: {product.description}</span>
                </div>

                <div className="flex items-center text-lg font-semibold text-green-600">
                  <span className="mr-2 text-2xl">💸</span>
                  <span className="ml-1">Price: ${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListOfAllProducts;
