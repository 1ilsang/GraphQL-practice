import {getById, people} from './db';

const resolvers = {
    Query: {
        people: () => people,
        // 첫 번째 인자 _ 는 현재 오브젝트를 의미. 이후 더 자세히 설명
        person: (_, { id }) => getById(id)
    }
};

export default resolvers;
