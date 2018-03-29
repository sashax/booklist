var bookdata = require('../src/bookdata.js');

exports.index_get = function(req, res, next) {
    var books = bookdata.read();
    res.render('books', {booklist: books});
  };

exports.book_get = function(req, res, next) {
    //needs to be abstracted to singleton or equiv
    var books = bookdata.read();
    res.render('book', {book: books[req.params.id]});
  }

