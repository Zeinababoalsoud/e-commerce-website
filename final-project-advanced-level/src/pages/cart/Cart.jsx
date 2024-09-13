import './Cart.css'
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import logoImg from'../../../public/assets/images/logo-img.png'
function Cart(){
    return(

        <>
        
      
            <div className="wrapper">
                <div className='cart-child'>
                        <img src={logoImg} alt="" />
                        <h2>Cart</h2>
                        <div className='cart-links'>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <span>&gt;</span>
                                <li>
                                    <Link to="/Cart">Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                
            </div>
            <div className='cart-container'>
                <div className="right">
                    <div className="row row1">
                        <div className="cell">Product</div>
                        <div className="cell">Price</div>
                        <div className="cell">quantity</div>
                        <div className="cell">Subtotal</div>
                    </div>
                    <div className="row">
                        <div className="cell">Label 5</div>
                        <div className="cell">Label 6</div>
                        <div className="cell">Label 7</div>
                        <div className="cell">Label 8</div>
                    </div>
             </div>
            <div className="left">
            <div className='left-div'>
                <h5>Cart Total</h5>
                <div className="column">
                    <div className="item">Item 1</div>
                    <div className="item">Item 2</div>
                </div>
                <button className="checkout-button">Check Out</button>
            </div>
                
            </div>

        </div>

        
        <Footer></Footer>
        </>
    )
}
export default Cart;