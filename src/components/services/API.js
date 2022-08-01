const KEY = '680a085408f54e9fb39424e6cbaf9f4f';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      // console.log(data);
      const movies = data.results.map(movie => {
        const movieObj = {
          id: movie.id,
          title: movie.title,
        };
        return movieObj;
      });
      // console.log(movies);
      return movies;
    });
};

export const searchMovieByName = name => {
  return fetch(`${BASE_URL}search/movie?api_key=${KEY}&query=${name}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      const movies = data.results.map(movie => {
        const movieObj = {
          id: movie.id,
          title: movie.title,
        };
        return movieObj;
      });
      console.log(movies);
      return movies;
    });
};

export const searchMovieById = ({ id }) => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`)
    .then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      console.log(data);
      return data;
    });
};
// searchMovieById();
