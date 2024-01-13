import axios from "axios";

import { BaseAxios } from "../shared/shared.services";


export const getNowPlayingMovies = async () => {
    console.log(process.env)
    try {
        const response= await BaseAxios.get("/movie/now_playing");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getPopularMovies = async () => {
    console.log(process.env)
    try {
        const response= await BaseAxios.get("/movie/popular");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getTopRatedMovies = async () => {
    console.log(process.env)
    try {
        const response= await BaseAxios.get("/movie/top_rated");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export const getUpcomingMovies = async () => {
    console.log(process.env)
    try {
        const response= await BaseAxios.get("/movie/upcoming");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}