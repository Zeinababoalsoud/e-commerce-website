import './ShopPage.css';
import { useEffect, useState } from 'react';
import logoImg from'../../../public/assets/images/logo-img.png'
import { Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
// import { useParams } from 'react-router-dom';

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
                            <div id="labels-container">
                                <label id='title-label'>{i.title}</label>
                                <label id='category-label'>{i.category}</label>
                                <label id='price-label'>{i.price}</label>
                            </div>
                            <Link to={`/product/${i.id}`}>
                                <div className="overlay">
                                    <button className="more-details">More Details</button>
                                </div>
                            </Link>
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