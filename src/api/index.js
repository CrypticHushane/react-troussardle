import axios from "axios";

const axiosRequest = axios.create({
    baseUrl: "http://api.football-data.org/v2/",
});

axiosRequest.defaults.baseURL = 'http://api.football-data.org/v2/';
axiosRequest.defaults.headers.common['X-Auth-Token'] = 'f872c10352604a04acf98d845da453ff';

export default axiosRequest;