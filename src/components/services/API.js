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
      console.log(data);
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

// export const searchMoviebyName = () => {
//   return fetch(`${BASE_URL}search/company?api_key=${KEY}&page=1`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then(data => {
//       console.log(data);
//     });
// };

// searchMoviebyName();
