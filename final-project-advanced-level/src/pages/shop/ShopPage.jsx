import './ShopPage.css';
import { useEffect, useState } from 'react';
import logoImg from'../../../public/assets/images/logo-img.png'
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
function ShopPage(){
        const [arrayofobject, setarrayofobject] = useState([]);
        useEffect(() =>{
        function callingApi(){
        fetch('https://fakestoreapi.com/products').then((response)=>{

            return response.json();

        }).then((finalResult) =>{

            setarrayofobject(finalResult);
            
        })
        
        }
        callingApi();
        },[]);

    return(
        <>
        <div id='shop-page-container'>
            <div className="shop-wrapper">
                <div className='shop-child'>
                    <img src={logoImg} alt="" />
                    <h2>Shop</h2>
                    <div className='contact-links'>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <span>&gt;</span>
                            <li>
                                <Link to="/ShopPage">Shop</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="shop-content">
                <div className='products-container'>
                    {
                        arrayofobject.map((i) =>{
                        return <div className='products' 
                        key={i.id}>
                            <img src={i.image}/>
                            <label>{i.title}</label>
                            <label>{i.category}</label>
                            <label>{i.price}</label>
                            
                        </div> 
                        })
                    }
                </div>

                

            </div>

        </div>
        <Footer></Footer>
        </>
    )
}
export default ShopPage;