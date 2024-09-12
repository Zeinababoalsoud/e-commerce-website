import './Categories.css'
import { Link } from 'react-router-dom';
function Categories(props){
    
    return(
    
        <Link to={'/ShopPage'}>
            <div className='Category-image'>
                <img src={props.image}/>
                <label className='hide'>{props.type}</label>
            </div>
        </Link> 
        
    )
}
export default Categories;