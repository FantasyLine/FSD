import React from "react";

function ButtonCount() {
    const [count, setCount] = React.useState(0);

    const Prevent = (e) => {
        e.preventDefault();}

    const increment = (e) => {
        Prevent(e); 
        setCount(count + 1);}
        
    const decrement = (e) => {
        Prevent(e);
        if (count-1 < 0) {
            alert("Counter can't be negative");
        }else{
            setCount(count - 1);
        } 
        ;}


    
    return (
        <div>
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
        <p>Counter: {count}</p>
        </div>
    );
}
export default ButtonCount;