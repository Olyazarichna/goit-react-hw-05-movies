// const KEY = '680a085408f54e9fb39424e6cbaf9f4f';
const BASE_URL =
  'https://api.themoviedb.org/3/movie/550?api_key=680a085408f54e9fb39424e6cbaf9f4f';

const fetchMovies = () => {
  fetch(BASE_URL)
    .then(response => {
      if (response.ok) {
        return response.json;
      }
    })
    .then(data => console.log(data));
};
fetchMovies();

export default fetchMovies;
