import { useEffect, useState } from "react";

import { Navbar } from "../../shared/components/navbar/Navbar";
import { getLatestMovies, getLatestTVShows } from "../../services/home/home.services";
import { ListContainer } from "../../shared/components/listContainer/ListContainer";

import "./Home.css";
import "../../shared/style/customScrollbar/CustomScrollBar.css";

export const Home = () => {
    const [latestMovies, setLatestMovies] = useState([]);
    const [latestTVShows, setLatestTVShows] = useState([]);
    const [loadingState, setLoadingState] = useState({
        latestMovies: true,
        latestTVShows: true
    });
    

    const fetchLatestMovies = async () => {
        try {
            const latestMoviesResponse = await getLatestMovies();
            console.log(latestMoviesResponse);
            setLatestMovies(latestMoviesResponse);
            setLoadingState({ ...loadingState, latestMovies: false })
        }
        catch (err) {
            console.log(err)
            setLoadingState({ ...loadingState, latestMovies: false })
        }
    }

    const fetchLatestTVShows = async () => {
        try {
            const latestTVShowsResponse = await getLatestTVShows();
            console.log(latestTVShowsResponse);
            setLatestTVShows(latestTVShowsResponse);
            setLoadingState({ ...loadingState, latestTVShows: false })
        }
        catch (err) {
            console.log(err)
            setLoadingState({ ...loadingState, latestTVShows: false })
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
                <ListContainer title="Latest Movies" listItems={latestMovies} type="movie"/>
                <ListContainer title="Latest TV Shows" listItems={latestTVShows} type="tv"/>
            </div>
        </div>
    )
}
