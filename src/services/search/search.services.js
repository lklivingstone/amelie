import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN= "5e335cccbea7af313ed41b38985aecd9"

const latestAxios= axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTMzNWNjY2JlYTdhZjMxM2VkNDFiMzg5ODVhZWNkOSIsInN1YiI6IjY1OWVhNDU3OTU5MGUzMDBmMGFkMDRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SoD9Vj8oKRPplpcQS8GPN4jBIcMgSINObrz5qxeriNo'
    }
})


export const searchMovies= async (query) => {
    try {
        const response= await latestAxios.get(`/search/movie?query=${query}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export const searchTVShows= async (query) => {
    try {
        const response= await latestAxios.get(`/search/tv?query=${query}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

