import {addMovie, getById, getMoives, deleteMovie} from './db';

const resolvers = {
    Query: {
        movies: () => getMoives(),
        // 첫 번째 인자 _ 는 현재 오브젝트를 의미. 이후 더 자세히 설명
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};

export default resolvers;
