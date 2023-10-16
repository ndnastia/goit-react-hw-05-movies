import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9000566cda5073c05dca2ec073eeeb0d';

export const fetchTrendingNow = async () => {
    const {data} = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return data.results;
};
