import { useEffect, useState } from "react";
import { useSearchParams  } from 'react-router-dom';

import { Navbar } from "../../shared/components/navbar/Navbar";
import { searchMovies, searchTVShows } from "../../services/search/search.services";
import { ListContainer } from "../../shared/components/listContainer/ListContainer";

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
            <ListContainer title="Movies" listItems={movies} />
            <ListContainer title="TV Shows" listItems={TVShows} />
        </>
    )
}