import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/Home/Home.jsx';
import AddProduct from './Components/AddProducts/AddProduct.jsx';
import ProductList from './Components/ListOfAllProducts/ListOfAllProducts.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductList />} />
    </Routes>
  );
}

export default App;
