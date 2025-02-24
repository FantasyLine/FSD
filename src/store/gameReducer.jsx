import {useReducer} from 'react';

const initialState = {
 throwNumber: 0,
 brelan: 0,
 hasResult: false
};

const de = () => Math.floor(Math.random() * 6) + 1

const game = (nb) => {
 let brelan = 0;
 for (let i = 0; i < parseInt(nb); i++) {
  const result = [de(), de(), de()].reduce((acc, curr) => acc+curr, 0)
  if (result === 18) {
   brelan++;
  }
 }
 return brelan
}

const gameReducer = (state, action) => {
 switch (action.type) {
  
  case "SET_NUM":
   return {
    ...state,
    brelan: 0,
    throwNumber: action.payload
   }
  
  case "LAUNCH":
   return {
    ...state,
    brelan: game(state.throwNumber),
    hasResult: true
   }
   
  case "RESET":
   return {
    ...initialState
   }
  
  default:
   return state;
 }
};

const useGameReducer = () => {
 const [state, dispatch] = useReducer(gameReducer, initialState)
 
 const launch = () => {
  dispatch({
   type: "LAUNCH"
  })
 }
 
 const setNum = (payload) => {
  dispatch({
   type: "SET_NUM",
   payload
  })
 }
 
 const reset = () => {
  dispatch({
   type: "RESET"
  })
 }
 
 return {
  state,
  launch,
  setNum,
  reset
 }
}

export default useGameReducer;