import './Footer.css';
import { Link } from "react-router-dom";

import img1 from '../../../public/assets/images/Vector.png'
import img2 from '../../../public/assets/images/Vector1.png'
import img3 from '../../../public/assets/images/Vector2.png'
import img4 from '../../../public/assets/images/customer-support.png'
function Footer(){
    return (
        <footer>
            <div id="footer-content">
               <div className="content-container">
                    <div className='f-img'>
                        <img src={img1}/>
                    </div>
                    <div className="content">
                        <label className='lab1'>High Quality</label>
                        <label className='lab2'>crafted from top materials</label>

                    </div>
               </div>
               <div className="content-container">
                    <div className='f-img'>
                        <img src={img2}/>
                    </div>
                    <div className="content">
                        <label className='lab1'>Warranty Protection</label>
                        <label className='lab2'>Over 2 years</label>

                    </div>

               </div>
               <div className="content-container">
                        <div className='f-img'>
                            <img src={img3}/>
                        </div>
                        <div className="content">
                            <label className='lab1'>Free Shipping</label>
                            <label className='lab2'>Order over 150 $</label>

                        </div>

               </div>
               <div className="content-container">
                   <div className='f-img'>
                       <img src={img4}/>
                    </div>
                    <div className="content">
                        <label className='lab1'>24 / 7 Support</label>
                        <label className='lab2'>Dedicated support</label>

                    </div>

               </div>
                
            </div>
            <div className="footer-container">
                <div id="footer-section">

                    <div className="footer-items">
                        <h4 id='f-header' >Funiro.</h4>
                        <p className='my-p'>400 University Drive Suite 200 Coral Gables,
                        FL 33134 USA</p>
                    </div>
                    <div className="footer-items">
                    
                        <div className='links'>
                            <h4 className='links-header'>links</h4>
                            <div className='links'>
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
                        </div>
                    </div>
                    <div className="footer-items">
                        <h4 className='links-header'>help</h4>
                        <div className="links">
                            <label >Payment Options</label>
                            <label>Returns</label>
                            <label>Privacy Policies</label>
                        </div>
                    </div>
                    <div className="footer-items form">
                        <h4 className='links-header'>Newsletter</h4>
                        <form id='f-form'>
                            <input type="email" id='f-in' placeholder='Enter Your Email'/>  
                            <button id='f-btn'>SUBSCRIBE</button>
                        </form>
                        
                    </div>
                </div>
                <div className='copyright-container'>
                    <form id='f-form2'>
                        <input type="email" id='f-in2' placeholder='Enter Your Email'/>  
                        <button id='f-btn2'>SUBSCRIBE</button>
                    </form>

                    <hr />
                    <p id='p'>2023 furino. All rights reverved</p>
                </div>

            </div>
           

        </footer>
    )
}
export default Footer;