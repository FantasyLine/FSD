import './App.css'
import RootPage from "./page/Root/index.page.jsx";
import {Route, Routes} from "react-router";
import GamePage from "./page/Game/index.page.jsx";
import DescriptionPage from "./page/Description/index.page.jsx";
import StatsPage from "./page/Stats/index.page.jsx";

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<RootPage />}>
        <Route index element={<GamePage />} />
        <Route path={"/about"} element={<DescriptionPage />} />
        <Route path={"/stats"} element={<StatsPage />} />
      </Route>
    </Routes>
  )
}

export default App