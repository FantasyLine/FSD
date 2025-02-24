// path : dice-game/src/page/Stats/index.page.jsx
import "./style.scss";
import {useNavigate, useOutletContext} from "react-router";

const StatsPage = () => {
 
 const {state, reset} = useOutletContext()
 const navigate = useNavigate()
 
 
 const handleReset = () => {
  reset()
  goBack()
 }
 
 const goBack = () => {
  navigate("/")
 }
 
 return <div className="page" id="Stats">
  <p>Nombre de partie jouée : {state.throwNumber}</p>
  <p>Nombre de brelan de 6 : {state.brelan}</p>
  <p>Pourcentage de brelan de 6 : {((state.brelan / state.throwNumber) * 100).toFixed(2)}%</p>
  <div>
   <button onClick={handleReset}>Reinitialiser</button>
   <button onClick={goBack}>Retour</button>
  </div>
 </div>
}

export default StatsPage