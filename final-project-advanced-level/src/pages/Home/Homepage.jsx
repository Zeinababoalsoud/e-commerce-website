import './Homepage.css';
import Categories from '../../components/categories/Categories'
import Footer from '../../components/footer/Footer';
function Homepage(){
    const dataArray = [
        {
          id: 1,
          name: "electronics",
          image: '../../../public/assets/images/22.jpg'
        },
        {
          id: 2,
          name: "women's clothing",
          image: '../../../public/assets/images/1.jpg'
        },
        {
          id: 3,
          name: "men's clothing",
          image: '../../../public/assets/images/3.jpg'
        }
        ,
        {
          id: 4,
          name: "jewellay",
          image: '../../../public/assets/images/44.jpg'
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