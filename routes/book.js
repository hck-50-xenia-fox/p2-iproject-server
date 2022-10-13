const BookController = require('../controllers/book-controller');
const router = require('express').Router();

router.get('/', BookController.getBook);
router.get('/search', BookController.searchBook);
router.get('/:id', BookController.bookById);

module.exports = router;
