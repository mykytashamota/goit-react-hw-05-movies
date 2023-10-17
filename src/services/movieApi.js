import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWE2YjI4NDE4NjQ2MzJjM2IxNWU2ZDRlODMyMDY0ZCIsInN1YiI6IjY1MjdhMWUxY2I2ZGI1MDBhZGJlYjZlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5Y4zTyHAohqZ-iIa2fc9-B-O64-kHEDM1rctk5tnotg';

export const getMovies = async (path, controller) => {
  const response = await axios.get(path, {
    signal: controller.signal,
  });
  return response.data;
};
