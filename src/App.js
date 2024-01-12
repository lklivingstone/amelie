import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import { Player } from "./pages/player/Player";

import './App.css';
import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/play" element={<Player />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
