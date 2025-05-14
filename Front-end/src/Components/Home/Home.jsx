import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.8), rgba(34,34,34,0.7)), url('https://images.unsplash.com/photo-1607083209530-7bb5ef9d7ddc?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-opacity-80 rounded-2xl p-6 sm:p-10 shadow-2xl w-full max-w-md sm:max-w-lg lg:max-w-xl text-center text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Welcome to Store
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
          Explore your product collection or add something new!
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
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
      </div>
    </div>
  );
}

export default HomePage;
