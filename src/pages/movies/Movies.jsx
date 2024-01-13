import { useEffect, useState } from "react"

import { ListContainer } from "../../shared/components/listContainer/ListContainer"
import { Navbar } from "../../shared/components/navbar/Navbar"
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../../services/movies/movies.services"

import "./Movies.css";

export const Movies = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const fetchNowPlayingMovies = async () => {
        try {
            const nowPlayingMoviesResponse = await getNowPlayingMovies();
            setNowPlayingMovies(nowPlayingMoviesResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchPopularMovies = async () => {
        try {
            const popularMoviesResponse = await getPopularMovies();
            setPopularMovies(popularMoviesResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchTopRatedMovies = async () => {
        try {
            const topRatedMoviesResponse = await getTopRatedMovies();
            setTopRatedMovies(topRatedMoviesResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchUpcomingMovies = async () => {
        try {
            const upcomingMoviesResponse = await getUpcomingMovies();
            setUpcomingMovies(upcomingMoviesResponse);
        }
        catch (err) {
            console.log(err)
        }
    
    }

    useEffect(() => {
        fetchNowPlayingMovies();
        fetchPopularMovies();
        fetchTopRatedMovies();
        fetchUpcomingMovies();
    }, [])

    return (
        <>
            <Navbar />
            <div className="movies-container">
                <ListContainer title='Now Playing Movies' listItems={nowPlayingMovies}/>
                <ListContainer title='Popular Movies' listItems={popularMovies}/>
                <ListContainer title='Top Rated Movies' listItems={topRatedMovies}/>
                <ListContainer title='Upcoming Movies' listItems={upcomingMovies}/>
            </div>
        </>
    )
}