import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import { Player } from "./pages/player/Player";

import './App.css';
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/play/:type/:id" element={<Player />} />
        <Route path="/filter" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
