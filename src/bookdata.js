var fs = require('fs');
var parse = require('csv-parse/lib/sync');
var books = null;
var bookfile = __dirname + "/../public/data/books2017.csv";

module.exports.read = function() {
  if (!books) {
    var data = fs.readFileSync(bookfile);
    books = parse(data.toString(), {columns: true});
  }
  return books;
};

module.exports.write = function(book) {
  var booktext = book.title_author + ',' + book.blurb + ',' + book.rating + '\n';
  try{
    fs.appendFileSync(bookfile, booktext);
    books = null;
  } catch (err) {
    console.log('write book failed');
  }
};
