const API_URL = "https://yts.am/api/v2/list_movies.json";

let movies = [
    {
        id: 0,
        name: 'Nicolas',
        score: 1
    },
    {
        id: 1,
        name: '1ilsang',
        score: 99
    },
    {
        id: 2,
        name: 'bloooooog',
        score: 55
    },
    {
        id: 3,
        name: 'filter',
        score: 33
    },
    {
        id: 4,
        name: 'wow',
        score: 86
    }
];

export const getMoives = () => movies;

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => id !== movie.id);
    if (cleanedMovies.length < movies.length) {
        movies = cleanedMovies;
        return true;
    } else return false;
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};
