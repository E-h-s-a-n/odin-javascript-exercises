const findTheOldest = function (people) {
    const oldest = people.reduce((pre, curr) => {
        let a = (pre.yearOfDeath ?? 2022) - pre.yearOfBirth;
        let b = (curr.yearOfDeath) - curr.yearOfBirth;
        pre = a > b ? pre : curr
        return pre;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

// console.log(findTheOldest(people));