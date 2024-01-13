import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { Player } from "./pages/player/Player";
import { Home } from "./pages/home/Home";
import { Search } from "./pages/search/Search";
import { Movies } from "./pages/movies/Movies";
import { TVShows } from "./pages/tvshows/TVShows";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/play/:type/:id" element={<Player />} />
        <Route path="/filter" element={<Search />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
