export const people = [
    {
        id: '0',
        name: 'Nicolas',
        age: 18,
        gender: 'female'
    },
    {
        id: '1',
        name: '1ilsang',
        age: 27,
        gender: 'male'
    }
];

export const getById = (id) => {
    const filteredPeople = people.filter(person => String(id) === person.id);
    return filteredPeople[0];
};
