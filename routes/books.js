var express = require('express');
var router = express.Router();
var bookdata = require('../src/bookdata.js');

router.get('/', function(req, res, next) {
  var books = bookdata.read();
  console.log('books is');
  console.log(books);
  res.render('books', {booklist: books});
});

module.exports = router;
