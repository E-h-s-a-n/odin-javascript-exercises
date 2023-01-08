const getTheTitles = function (books) {
    return (books.reduce((pre, curr) => {
        return [...pre, curr.title];
    }, []));
};

// Do not edit below this line
module.exports = getTheTitles;


const my_books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

// console.log(getTheTitles(my_books));