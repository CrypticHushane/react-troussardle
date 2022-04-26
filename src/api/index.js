import axios from "axios";

const axiosRequest = axios.create({
    baseUrl: "https://api.football-data.org/v2/",
});

axiosRequest.defaults.baseURL = 'https://api.football-data.org/v2/';
axiosRequest.defaults.headers.common['X-Auth-Token'] = 'f872c10352604a04acf98d845da453ff';

export default axiosRequest;