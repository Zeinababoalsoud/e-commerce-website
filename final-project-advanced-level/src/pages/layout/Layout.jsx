import { Outlet, Link } from "react-router-dom";
import logoImg from  '../../../public/assets/images/logo-img.png'
import cartImg from '../../../public/assets/images/cart-img.png'

import './Layout.css';
function Layout (){
    return(
        <>
        <nav>
            <div id="logo-container">
                <img src={logoImg} alt="logo" />
                <span>Furniro</span>
            </div>
            <div id="links-container">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/ShopPage">Shop</Link>
                    </li>
                    <li>
                    <Link to="/ContactPage">Contact</Link>
                    </li>
                </ul>
            </div>
            <div id="cart-container">
                <img src={cartImg} alt="cartTmg" />

            </div>
            
        </nav>
        
        <Outlet />
          
      </>
    )
}
export default Layout;