import { getMovies, getById, addMovie} from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, {id}) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => {
     console.log("what is _ ? ", _);
     console.log("what is { name, score } ? ", { name, score });
      return addMovie(name, score)
    },
  }
};

export default resolvers;

// resolvers: kind of view