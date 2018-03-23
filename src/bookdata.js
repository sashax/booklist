var fs = require('fs');
var parse = require('csv-parse/lib/sync');
var books = null;

module.exports.read = function() {
  if (!books) {
    var data = fs.readFileSync(__dirname + "/../public/data/books2017.csv");
    books = parse(data.toString(), {columns: true});
  }
  return books;
}
