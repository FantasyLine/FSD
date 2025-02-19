import React from "react";
class TestState extends React.Component {
 constructor(props) {
  super(props);
  
  this.state = {
   count: 0,
   step: 5,
  };
  this.modulo = 0;
 }
 render () {
  
  setTimeout(() => {
   this.setState({count : this.state.count + this.state.step})
   if ((this.state.count + 1) % 10 === 0) {
    this.modulo = this.modulo + 1;
   }
  }, 1000)
  
  

  return (
   <div>
    <p> Counter : {this.state.count} </p>
    <p> Round to 10 : {this.modulo}</p>
   </div>
  )
 }
 
}

export default TestState;

//En fonction
//import {useState} from "react";
//
//const TestStateFunc = () => {
// 
// const [count, setCount] = useState(0)
// 
// const tick = () => {
//  setTimeout(() => {
//   setCount(count + 1)
//  }, 1000)
// }
// 
// tick()
// 
// return (
//  <div>
//   <p>Counter: {count}</p>
//  </div>
// )
//}
//
//export default TestStateFunc;