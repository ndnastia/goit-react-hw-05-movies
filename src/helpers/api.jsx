import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9000566cda5073c05dca2ec073eeeb0d';

export const fetchTrendingNow = async () => {
    const {data} = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return data.results;
};


export const getMovieById = async movieId => {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  
    return data;
  };


  export const getCastMovie = async movieId => {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
  
    return data.cast;
  };
  export const getReviewsMovie = async movieId => {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
    );
  
    return data.results;
  };


  export const getMovieByQuery = async query => {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    );
  
    return data.results;
  };