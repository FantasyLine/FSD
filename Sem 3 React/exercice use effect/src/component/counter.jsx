import React, { useEffect } from "react";

function ButtonCount() {
    const [count, setCount] = React.useState(0);
    const [message , setMessage] = React.useState("");
    const [message2 , setMessage2] = React.useState("");
    function Increment(){
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("useEffect initialisation");
        setMessage("Initialisation...");
    }, []);

    useEffect(() => {
        if(count === 10){
        setMessage2("You reached 10 clicks");
        }
    }, [count]);
    return(
        <div>
            <h1>{message}</h1>
            <p>Counter: {count}</p>
            <button onClick={Increment}>Click me</button>
            <p>{message2}</p>
        </div>
    )
}

export default ButtonCount;

