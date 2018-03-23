var fs = require('fs');
var parse = require('csv-parse/lib/sync');

module.exports.read = function() {
  var data = fs.readFileSync(__dirname + "/../public/data/books2017.csv");
  console.log('***');
  console.log(data.toString());
  console.log('***');
  var books = parse(data.toString(), {columns: true});
  console.log('*-*-*-*');
  console.log(books);
  return books;
}
