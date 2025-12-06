import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Products from "./pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
