import './ContactPage.css';
import { useState } from 'react';
import addressImg from '../../../public/assets/images/address.png';
import phoneImg from '../../../public/assets/images/phone.png';
import workImg from '../../../public/assets/images/working-time.png'
import logoImg from'../../../public/assets/images/logo-img.png'
import Footer from '../../components/footer/Footer'
import { Link } from "react-router-dom";
import * as yup from 'yup';
function ContactPage(){
        const [ formData , setFormData ] = useState({
            fristName:'',
            emailAddres:'',
            subject:'',
            message:''

        })
        const userSchema = yup.object().shape({
            fristName:yup.string().required("Your Name is Required"),
            emailAddres:yup.string().email().required("Your Email is Required"),
            subject:yup.string(),
            message:yup.string().required("Please , Enter a Massage")
        })
        async function testValidation() {
            try {
              await userSchema.validate(formData, { abortEarly: false });
              console.log("Validation passed");
            } catch (err) {
              if (err instanceof yup.ValidationError) {
                err.inner.forEach((error) => {
                  alert(`${error.path}: ${error.message}`);
                });}
            }
          }

        function onHandleSubmit(event){
            
            console.log(formData);
            testValidation();
            event.preventDefault();
            setFormData({
                fristName:'',
                emailAddres:'',
                subject:'',
                message:''
        });
        }
        function handleOnChange(event){
            var value = event.target.value;
            const key   =event.target.name;
            setFormData({
                ...formData ,
                [key] :value,
            });
        }
    
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
                <form className="right" onSubmit={onHandleSubmit} id="form">
                    <div className="form-group">
                        <label htmlFor='name' >Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="abc"
                            name="fristName"
                            onChange={handleOnChange}
                            className='inputs'
                            value={formData.fristName}
                            
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='email'>Email Address</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="Abc@def.com"
                        value={formData.emailAddres}
                        name="emailAddres"
                        onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input 
                            type="text" 
                            id="subject" 
                            placeholder="Enter This is an optional"
                            name="subject"
                            onChange={handleOnChange}
                            value={formData.subject}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor='message'>Message</label>
                        <textarea 
                            id="message" 
                            placeholder="Hi! i’d like to ask about"
                            rows='4'
                            name="message" 
                            value={formData.message}
                            onChange={handleOnChange}
                            />
                    </div>
                    <div className="form-group">
                        <button 
                            type="submit" 
                            id='btn'
                            >Submit</button>
                    </div>
                </form>
        </div>

        </div>
       <Footer></Footer>
       </>

       

    )
}
export default ContactPage;