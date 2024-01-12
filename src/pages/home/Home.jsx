import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Navbar } from "../../shared/components/navbar/Navbar";
import { getLatestMovies, getLatestTVShows } from "../../services/home/home.services";

import "./Home.css";

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
                <div className="list-container">
                    <h2>Latest Movies</h2>
                    <div className="scrollable-container">
                        {latestMovies?.results?.map((movie) => {
                            return (
                                <Link to={`/play/movie/${movie.id}`}>
                                    <div key={movie.id} className="movie-card">
                                        <img className="poster" src={'https://image.tmdb.org/t/p/original'+movie.poster_path} alt={movie.original_title} />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>

                <div className="list-container">
                    <h2>Latest Shows</h2>
                    <div className="scrollable-container">
                        {latestTVShows?.results?.map((show) => {
                            return (
                                <Link to={`/play/tv/${show.id}`}>
                                    <div key={show.id} className="movie-card">
                                        <img
                                        className="poster"
                                        src={'https://image.tmdb.org/t/p/original'+show.poster_path}
                                        alt={show.original_title}
                                        
                                        />
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}