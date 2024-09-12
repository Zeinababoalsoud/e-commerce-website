import './Categories.css'
import { Link } from 'react-router-dom';
function Categories(props){
    
    return(
    
        <Link to={'/ShopPage'}>
            <div className='Category-image'>
                <img src={props.image}/>
                <label className='hide'>{props.name}</label>
                <div className="overlay1">
                    <button className="more-detail">{props.name}</button>
                </div>
            </div>
        </Link> 
        
    )
}
export default Categories;