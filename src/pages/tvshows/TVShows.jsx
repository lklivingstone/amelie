import { useEffect, useState } from "react"

import { ListContainer } from "../../shared/components/listContainer/ListContainer"
import { Navbar } from "../../shared/components/navbar/Navbar"
import { getAiringTodayTVShows, getOnTheAirTVShows, getPopularTVShows, getTopRatedTVShows } from "../../services/tvshows/tvshows.services";

import "./TVShows.css";

export const TVShows = () => {
    const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);
    const [onTheAirTVShows, setOnTheAirTVShows] = useState([]);
    const [popularTVShows, setPopularTVShows] = useState([]);
    const [topRatedTVShows, setTopRatedTVShows] = useState([]);

    const fetchAiringTodayTVShows = async () => {
        try {
            const airingTodayTVShowsResponse = await getAiringTodayTVShows();
            setAiringTodayTVShows(airingTodayTVShowsResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchOnTheAirTVShows = async () => {
        try {
            const onTheAirTVShowsResponse = await getOnTheAirTVShows();
            setOnTheAirTVShows(onTheAirTVShowsResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchPopularTVShows = async () => {
        try {
            const popularTVShowsResponse = await getPopularTVShows();
            setPopularTVShows(popularTVShowsResponse);
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchTopRatedTVShows = async () => {
        try {
            const topRatedTVShowsResponse = await getTopRatedTVShows();
            setTopRatedTVShows(topRatedTVShowsResponse);
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchAiringTodayTVShows();
        fetchOnTheAirTVShows();
        fetchPopularTVShows();
        fetchTopRatedTVShows();
    }, [])

    return (
        <>
            <Navbar />
            <div className="movies-container">
                <ListContainer title='TV Shows Airing Today' listItems={airingTodayTVShows}/>
                <ListContainer title='TV Shows On The Air' listItems={onTheAirTVShows}/>
                <ListContainer title='Popular TV Shows' listItems={popularTVShows}/>
                <ListContainer title='Top Rated TV Shows' listItems={topRatedTVShows}/>
            </div>
        </>
    )
}
