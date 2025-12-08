import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Products from "./pages/Products";
import AddProducts from "./pages/AddProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/products/list" element={<Products />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
