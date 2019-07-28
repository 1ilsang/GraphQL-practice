import {getMovie, getMovies, getSuggestions} from './db';

const resolvers = {
    Query: {
        // _ 는 변수이름임. 아무거나 써도 되는 듯.
        movies: (_, {limit, rating}) => getMovies({limit, rating}),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestions(id)
    }
};

export default resolvers;
