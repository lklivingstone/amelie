import axios from "axios";

import { BaseAxios } from "../shared/shared.services";


export const getLatestMovies = async () => {
    console.log(process.env)
    try {
        const response= await BaseAxios.get("/trending/movie/day");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getLatestTVShows = async () => {
    try {
        const response= await BaseAxios.get("/trending/tv/day");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
