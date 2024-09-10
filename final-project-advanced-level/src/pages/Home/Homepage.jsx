import './Homepage.css';
import imageCategory1 from '../../../public/assets/images/Mask Group.png'
import imageCategory2 from '../../../public/assets/images/Image-living room.png'
import imageCategory3 from '../../../public/assets/images/bedroom.png'
import Footer from '../../components/footer/Footer';
function Homepage(){
    return(
        <>
        <div id='homepage-container'>
            <div className="image-wrapper"></div>
            <div className="Categories-div">

                <div className='header-div'>
                <h3>Categories</h3>
                </div>
                
                <div className="Categories-content">
                    <div className='Category-image'>
                        <img src={imageCategory1}/>
                        <label className='hide'>Dining</label>
                    </div>
                    <div className='Category-image'>
                        <img src={imageCategory2}/>
                        <label className='hide'>Living</label>
                    </div>
                    <div className='Category-image'>
                        <img src={imageCategory3}/>
                        <label className='hide'>Bedroom</label>
                    </div>
                    
                </div>

            </div>
        </div>
        <Footer></Footer>
        </>
    )
}
export default Homepage ;