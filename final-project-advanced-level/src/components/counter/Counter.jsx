import './Counter.css';
import { useState } from 'react';
function Counter(){
    
    const [counter, setCounter] = useState(0);
    function Increament() {
        console.log('in');
        setCounter(counter + 1);
      }
    
      function Decreament() {
        if (counter > 0) {
          console.log('de');
          setCounter(counter - 1);
        }
      }
    return(
    <>
         <div className="quantity-control">
            <button onClick={Decreament}>-</button>
            <label>{counter}</label>
            <button onClick={Increament}>+</button>
        </div>

    </>
)
}
export default Counter;