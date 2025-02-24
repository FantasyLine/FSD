// path : dice-game/src/page/Game/index.page.jsx
import "./style.scss";
import {Link, useOutletContext} from "react-router";

const GamePage = () => {
 
 const {state, launch, setNum} = useOutletContext()
 
 const handleChange = (e) => {
  const {value} = e.target
  setNum(value)
 }
 
 return <div className="page" id="Game">
  <div>
   <input onChange={handleChange} type={"number"} value={state.throwNumber}/>
   <button onClick={launch}>Lancé</button>
  </div>
  <div>
   {
    state.hasResult && <Link to={"/stats"}>Statistiques</Link>
   }
  </div>
 </div>
}

export default GamePage