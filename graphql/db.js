// mutation : db의 상태를 변화시킬때 사용
let movies = [
  {
    id: 1,
    name: "Avengers 2",
    score: 3
  },
  {
    id: 2,
    name: "Avengers 3",
    score: 2
  },
  {
    id: 3,
    name: "Godfather 1",
    score: 1
  }
];

export const getMovies = () => movies

export const getById = id => {
  console.log("temp = ", id)
  console.log("movies = ", movies)
  const filteredMovies = movies.filter(movie => movie.id === Number(id))
  return filteredMovies[0]
}

export const deleteMovie = id => {
  const cleanedMovies = movies.fillter(movie => movie.id !== Number(id));
  if (movies.length > cleanedMovies.length) {
    movie = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  console.log(name, score)
  const newMovie ={
    id: Number(`${movies.length + 1}`),
    name,
    score
  };
  movies.push(newMovie);
  console.log(movies);
  return newMovie;
}

/*
Queries : get data (Read)
Mutations : mutate database. changes of state. (Create, Update, Delete)
*/