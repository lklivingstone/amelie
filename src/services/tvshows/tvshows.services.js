import axios from "axios";

import { BaseAxios } from "../shared/shared.services";


export const getAiringTodayTVShows = async () => {
    try {
        const response= await BaseAxios.get("/tv/airing_today");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getOnTheAirTVShows = async () => {
    try {
        const response= await BaseAxios.get("/tv/on_the_air");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getPopularTVShows = async () => {
    try {
        const response= await BaseAxios.get("/tv/popular");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getTopRatedTVShows = async () => {
    try {
        const response= await BaseAxios.get("/tv/top_rated");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}