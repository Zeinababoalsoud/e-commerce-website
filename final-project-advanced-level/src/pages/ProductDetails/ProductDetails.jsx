import './ProductDetails.css'; 
import { useState } from 'react';
import icon1 from '../../../public/assets/images/icon1.png';
import icon2 from '../../../public/assets/images/icon2.png';
import icon3 from '../../../public/assets/images/icon3.png';
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Counter from "../../components/counter/Counter";
import Footer from '../../components/footer/Footer'
const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        function fetchProduct() {
            fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
                return response.json();
            }).then((data) => {
                setProduct(data);
            });
        }
        fetchProduct();

    }, [id]);

    if (!product) {
        return <div id="looding-div">Loading...</div>;
    }


    return (
        <div>

            <div className="header">
                 <Link href="/">Home</Link> &gt; <Link href="/ShopPage">Shop</Link> | <span id="header-span" href="#">{product.title}</span>
            </div>

            <div className="container">
                <div className="left">
                    <img src={product.image} />
                </div>
                <div className="right">
                    <div className="top">
                        <label className="label1">{product.title}</label>
                        <label id="lab">{product.price}</label>
                        <div className="stars">★★★★★ | <span id="special-span">{product.rating.rate} </span></div>
                        <p className='p-des'>{product.description}</p>
                        <label>Size</label>
                        <div className="sizes">
                            <span id='l-span'>L</span>
                            <span>XL</span>
                            <span>XS</span>
                        </div>
                        <label>Color</label>
                        <div className="colors">
                            <span className="color-circle lafavder"></span>
                            <span className="color-circle black"></span>
                            <span className="color-circle yellow"></span>
                        </div>
                    </div>
                    <div className="bottom">
                        <Counter counter={product.rating.count}></Counter>
                        <div className="quantity-control add-cart">
                             <button className="add-to-cart">Add to Cart</button>
                        </div>
                        
                    </div>
                    <hr className="divider line" />

                    <div className="info-section">
                        <div className="left-info">
                            <label>SKU</label>
                            <label>Category</label>
                            <label>Tags</label>
                            <label>Share</label>
                        </div>
                        <div className="right-info">
                            <label> : 00125</label>
                            <label> : {product.category}</label>
                            <label> : SKU</label>
                            <div className="social-media"> :
                                <a href="#"><img src={icon1}/></a>
                                <a href="#"><img src={icon2}/></a>
                                <a href="#"><img src={icon3}/></a>
                          </div>
                        </div>
                    </div>

                    
                </div>
            </div>

            <hr className="divider" />  
            <div className='Describtion-div'>
                <div className='des'>
                    <h1>Description</h1>
                    <p>{product.description}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;