import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN= "5e335cccbea7af313ed41b38985aecd9"

const latestAxios= axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTMzNWNjY2JlYTdhZjMxM2VkNDFiMzg5ODVhZWNkOSIsInN1YiI6IjY1OWVhNDU3OTU5MGUzMDBmMGFkMDRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SoD9Vj8oKRPplpcQS8GPN4jBIcMgSINObrz5qxeriNo'
    }
})


export const getLatestMovies= async () => {
    try {
        const response= await latestAxios.get("/trending/movie/day");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}



export const getLatestTVShows= async () => {
    try {
        const response= await latestAxios.get("/trending/tv/day");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

