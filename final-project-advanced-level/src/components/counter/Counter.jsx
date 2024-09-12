import './Counter.css';
import { useState } from 'react';
import {  useEffect } from 'react'; 
function Counter(props){
    
  const [counter, setCounter] = useState(props.counter); 


    useEffect(() => {
        setCounter(props.counter);
    }, [props.counter]);

    function Increment() { 
        setCounter(prevCounter => prevCounter + 1); 
    } 

    function Decrement() { 
        if (counter > 0) { 
            setCounter(prevCounter => prevCounter - 1); 
        } 
    } 
    return(
    <>
         <div className="quantity-control">
            <button onClick={Decrement}>-</button>
            <label>{counter}</label>
            <button onClick={Increment}>+</button>
        </div>

    </>
)
}
export default Counter;