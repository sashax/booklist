var express = require('express');
var router = express.Router();
var bookdata = require('../src/bookdata.js');

router.get('/', function(req, res, next) {
  var books = bookdata.read();
  res.render('books', {booklist: books});
});

router.get('/:id', function(req, res, next) {
  //needs to be abstracted to singleton or equiv
  var books = bookdata.read();
  res.render('book', {book: books[req.params.id]});
});
module.exports = router;
