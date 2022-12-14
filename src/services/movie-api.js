import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a1f85e9db1e2675e8cb003fcc66aa9f7';

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const getSearchMovies = async query => {
  const response = await axios.get(`search/movie?api_key=${API_KEY}`, {
    params: {
      query,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(`movie/${id}?api_key=${API_KEY}`, {
    params: {
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`, {
    params: {
      language: 'en-US',
    },
  });
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`, {
    params: {
      language: 'en-US',
    },
  });
  return response.data;
};
