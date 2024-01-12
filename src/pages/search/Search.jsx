import { useEffect, useState } from "react";
import { Link, useSearchParams  } from 'react-router-dom';
import { Navbar } from "../../shared/components/navbar/Navbar";
import { searchMovies, searchTVShows } from "../../services/search/search.services";

export const Search = () => {
    const [searchParams] = useSearchParams();
    const [TVShows, setTVShows] = useState([]);
    const [movies, setMovies] = useState([]);

    const keyword = searchParams.get('keyword');

    const fetchMovies = async () => {
        try {
            const moviesResponse = await searchMovies(keyword);
            setMovies(moviesResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchTVShows = async () => {
        try {
            const TVShowsResponse = await searchTVShows(keyword);
            setTVShows(TVShowsResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchMovies();
        fetchTVShows();
    }, [keyword])

    return (
        <>
            <Navbar />
            <div className="list-container">
                <h2>Movies</h2>
                <div className="scrollable-container">
                    {movies?.results?.map((movie) => {
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
                <h2>TV Shows</h2>
                <div className="scrollable-container">
                    {TVShows?.results?.map((show) => {
                        return (
                            <Link to={`/play/tv/${show.id}`}>
                                <div key={show.id} className="movie-card">
                                    <img className="poster" src={'https://image.tmdb.org/t/p/original'+show.poster_path} alt={show.original_title} />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}