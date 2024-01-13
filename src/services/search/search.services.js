import axios from "axios";

import { BaseAxios } from "../shared/shared.services";


export const searchMovies= async (query) => {
    try {
        const response= await BaseAxios.get(`/search/movie?query=${query}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export const searchTVShows= async (query) => {
    try {
        const response= await BaseAxios.get(`/search/tv?query=${query}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

