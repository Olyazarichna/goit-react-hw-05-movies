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
      const movies = data.results.map(movie => {
        const movieObj = {
          id: movie.id,
          title: movie.title,
        };
        return movieObj;
      });
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

      return movies;
    });
};

export const searchMovieById = ({ id }) => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      return data;
    });
};

export const fetchDetailsInfo = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      const details = {
        id: data.id,
        title: data.title,
        popularity: data.popularity,
        overview: data.overview,
        poster_path: data.poster_path,
        genres: data.genres.map(genre => {
          return genre.name;
        }),
      };

      return details;
    });
};

// export const fetchCastInfo = id => {
//   return fetch(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then(data => {
//       console.log(data);
//       const actors = data.cast;
//       actors.map(cast => {
//         console.log(cast);
//         const castObj = {
//           name: cast.name,
//           character: cast.character,
//           profile_path: cast.profile_path,
//         };
//         console.log(castObj);
//         return castObj;
//       });
//       return actors;
//     });
// };

// fetchCastInfo('838330');

export const fetchReviews = id => {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(data => {
      // console.log(data);
      const reviews = data.results.map(review => {
        const info = {
          id: review.id,
          author: review.author,
          content: review.content,
        };
        // console.log(info);
        return info;
      });
      // console.log(reviews);
      return reviews;
    });
};

fetchReviews('420818');
