// path : dice-game/src/page/Root/index.page.jsx
import "./style.scss";
import Nav from "../../component/Nav/index.jsx";
import {Outlet} from "react-router";
import useGameReducer from "../../store/gameReducer.jsx";

const RootPage = () => {
 
 const game = useGameReducer()
 
 return <div className="page" id="Root">
  <h1>Le jeu du dès</h1>
  <Nav />
  <Outlet context={game} />
 </div>
}

export default RootPage