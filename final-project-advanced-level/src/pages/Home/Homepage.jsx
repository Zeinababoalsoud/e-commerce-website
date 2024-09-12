import './Homepage.css';
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer';
import img1 from '../../../public/assets/images/22.jpg'
import img2 from '../../../public/assets/images/1.jpg'
import img3 from '../../../public/assets/images/3.jpg'
import img4 from '../../../public/assets/images/44.jpg'
function Homepage(){
    const dataArray = [
        {
          id: 1,
          name: "electronics",
          image: img1
        },
        {
          id: 2,
          name: "women's clothing",
          image: img2
        },
        {
          id: 3,
          name: "men's clothing",
          image: img3
        }
        ,
        {
          id: 4,
          name: "jewellay",
          image: img4
        }
      ];
    return(
        <>
        <div id='homepage-container'>
            <div className="image-wrapper"></div>
            <div className="Categories-div">

                <div className='header-div'>
                  <h1>Categories</h1>
                </div>
                
                <div className="Categories-content">
                    {dataArray.map(item => (
                        <Categories 
                          key={item.id}
                          type={item.name}
                          image={item.image}/>
                             
                        ))
                    }

                </div>

            </div>
        </div>
         <Footer></Footer>
       
        </>

    )
}
export default Homepage ;