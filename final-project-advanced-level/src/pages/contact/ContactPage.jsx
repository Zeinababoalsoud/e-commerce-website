import './ContactPage.css';
import addressImg from '../../../public/assets/images/address.png';
import phoneImg from '../../../public/assets/images/phone.png';
import workImg from '../../../public/assets/images/working-time.png'
import logoImg from'../../../public/assets/images/logo-img.png'
import Footer from '../../components/footer/Footer'
import { Link } from "react-router-dom";
function ContactPage(){
    return(
        <>
        
        <div id='contact-page-container'>
            <div className="contact-wrapper">
                <div className='contact-child'>
                    <img src={logoImg} alt="" />
                    <h2>Contact</h2>
                    <div className='contact-links'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <span>&gt;</span>
                            <li>
                                <Link to="/ContactPage">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="child">
                <h1>Get In Touch With Us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="content-contactpage">
                <div className="left">
                    <div className="box">
                        
                        <div className='image-container'>
                            <img src={addressImg}/> 
                        </div>
                        <div className='labels-container'>
                            <label className="label11">Address</label>
                            <label  className="contact-label">236 5th SE Avenue, New York NY10000, United States</label>
                        </div>
                        
                    </div>
                    <div className="box">
                        
                        <div className='image-container'>
                              <img src={phoneImg}/>
                        </div>
                        <div className='labels-container'>
                            <label className="label11">Phone</label>
                            <label className="contact-label">Mobile: +(84) 546-6789</label>
                            <label  className="contact-label">Hotline: +(84) 456-6789</label>
                        </div>
                    </div>
                    <div className="box">
                        <div className='image-container'>
                            <img src={workImg}/>
                        </div>
                        
                        <div className='labels-container'>
                            <label className="label11">Working Time</label>
                            <label  className="contact-label">Monday-Friday: 9:00 - 22:00</label>
                            <label  className="contact-label">Saturday-Sunday: 9:00 - 21:00</label>
                        </div>
                    </div>
                </div>
                <form className="right">
                    <div className="form-group">
                        <label >Your Name</label>
                        <input type="text" id="name" placeholder="abc"/>
                    </div>
                    <div className="form-group">
                        <label >Email Address</label>
                        <input type="email" id="email" placeholder="Abc@def.com"/>
                    </div>
                    <div className="form-group">
                        <label >Subject</label>
                        <input type="text" id="subject" placeholder="Enter This is an optional"/>
                    </div>
                    <div className="form-group">
                        <label >Message</label>
                        <textarea id="message" placeholder="Hi! i’d like to ask about" rows='4'></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" id='btn'>Submit</button>
                    </div>
                </form>
        </div>

        </div>
       <Footer></Footer>
       </>

       

    )
}
export default ContactPage;