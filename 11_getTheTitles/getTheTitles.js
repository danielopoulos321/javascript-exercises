const getTheTitles = function(books) {
    let titleArr = [];
    books.forEach(book => {
        titleArr.push(book.title);
    });
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
