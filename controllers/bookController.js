var bookdata = require('../src/bookdata.js');


exports.index_get = function(req, res, next) {
    var books = bookdata.read();
    res.render('books', {booklist: books});
};

exports.book_get = function(req, res, next) {
    var books = bookdata.read();
    res.render('book', {book: books[req.params.id]});
};   

exports.book_add = function(req, res, next) {
    var book = {};
    book.title_author = req.params.title + ' - ' + req.params.author;
    book.rating = req.params.rating;
    book.blurb = req.params.blurb;
    bookdata.write(book);
    var book_id = books.length -1;
    books = null;
    book_get({params: book_id}, res);
};

