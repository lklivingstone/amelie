import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

export const BaseAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})
