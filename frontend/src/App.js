import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSingup from "./pages/LoginSingup";
import Footer from "./components/Footer/Footer";
import mensbanner from "./components/Assets/dresses/mensbanner.png";
import womenswear from "./components/Assets/dresses/womenswear.png";
import kidswear from "./components/Assets/dresses/kidswear.png";
import nepaliornamaent from "./components/Assets/dresses/nepaliornamaent.png";

//importing route from react router dom.

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/womens"
            element={<ShopCategory banner={womenswear} category="women" />}
          />
          <Route
            path="/mens"
            element={<ShopCategory banner={mensbanner} category="men" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kidswear} category="kid" />}
          />
          <Route
            path="/ornament"
            element={
              <ShopCategory banner={nepaliornamaent} category="Ornaments" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
