import React, { useEffect } from "react";

const initialState = { result: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return { result: action.payload };
        case "multiply":
            return { result: action.payload };
        case "reset":
            return { result: 0 };
        default:
            return state;
    }
};

function Calculator() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [message, setMessage] = React.useState("");
    const isDisabled = value === "" || value2 === "";

    useEffect(() => {
        if (isDisabled) {
            
            setMessage("Please enter a number");
        } else {
            setMessage("");
        }
    }, [value, value2])

    return (
        <div>
            <input type="number" onChange={(e) => setValue(Number(e.target.value))} />
            <input type="number" onChange={(e) => setValue2(Number(e.target.value))} />
            <button onClick={() => dispatch({ type: "add", payload: value + value2 })} disabled={isDisabled}> + </button>
            <button onClick={() => dispatch({ type: "multiply", payload: value * value2 })} disabled={isDisabled}> * </button>
            <button onClick={() => {setValue(""); setValue2=(""); dispatch({ type: "reset"})}}> Reset </button>
            <p>Result: {state.result}</p>
            <p>{message}</p>
        </div>
    );
}

export default Calculator;


