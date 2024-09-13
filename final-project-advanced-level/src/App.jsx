import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from "./pages/layout/Layout";
import Homepage from "./pages/Home/Homepage";
import ShopPage from './pages/shop/ShopPage';
import ContactPage from "./pages/contact/ContactPage";
import Cart from './pages/cart/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <main>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout></Layout>}>
            <Route index element={<Homepage></Homepage>}/>
            <Route path="ShopPage" element={<ShopPage></ShopPage>}/>
            <Route path="ContactPage" element={<ContactPage></ContactPage>}/>
            <Route path="Cart" element={<Cart></Cart>}/>
            <Route path="/product/:id" element={<ProductDetails></ProductDetails>}/>
            {/* <Route path="/ShopPage/:category" element={<ShopPage></ShopPage>} /> */}

            
          </Route>
          
      </Routes>
    </BrowserRouter>
     
    </main>
  )
}

export default App
