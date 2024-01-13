import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Navbar } from "../../shared/components/navbar/Navbar";
import { getLatestMovies, getLatestTVShows } from "../../services/home/home.services";

import "./Home.css";
import "../../shared/style/customScrollbar/CustomScrollBar.css";
import { ListContainer } from "../../shared/components/listContainer/ListContainer";

export const Home = () => {
    const [latestMovies, setLatestMovies] = useState([]);
    const [latestTVShows, setLatestTVShows] = useState([]);

    const fetchLatestMovies = async () => {
        try {
            const latestMoviesResponse = await getLatestMovies();
            console.log(latestMoviesResponse);
            setLatestMovies(latestMoviesResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchLatestTVShows = async () => {
        try {
            const latestTVShowsResponse = await getLatestTVShows();
            console.log(latestTVShowsResponse);
            setLatestTVShows(latestTVShowsResponse);
        }
        catch (err) {
            console.log(err)
        }
    
    }

    useEffect(() => {
        fetchLatestTVShows();
        fetchLatestMovies();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="home-container">
                <ListContainer title="Latest Movies" listItems={latestMovies} />
                <ListContainer title="Latest TV Shows" listItems={latestTVShows} />
            </div>
        </div>
    )
}