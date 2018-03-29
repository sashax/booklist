var express = require('express');
var router = express.Router();
var book_controller = require('../controllers/bookController');

router.get('/', book_controller.index_get);

router.get('/:id', book_controller.book_get);
module.exports = router;
