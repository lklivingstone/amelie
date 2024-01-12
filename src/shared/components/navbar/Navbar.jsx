import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');

    const searchQuery = (event) => {
        if (query === '') {
            return;
        }
        event.preventDefault();
        navigate(`/filter?keyword=${query}`);
        setQuery('');
    }

    const handleKeyDown = (event) => {
        if (event.code === "Enter") {
            searchQuery(event)
        }
    };


    return (
        <div className="navbar-wrapper">
            <div className="links-wrapper">
                <h1 className="logo">amelie</h1>
                <div className="links-list">
                    <a href="/">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/tvshows">TV Shows</a>
                </div>
            </div>
            <div className="search-wrapper">
                <input type="text"
                placeholder="Movie/TV Show"
                value={query}
                onKeyDown={handleKeyDown}
                onChange={(event) => setQuery(event.target.value)}
                />
                <button onClick={(event) => searchQuery(event)}>Search</button>
            </div>
        </div>
    )
}