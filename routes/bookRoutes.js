const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const upload = require('../middleware/upload');

router.get('/', bookController.getAllBooks);
router.get('/add', bookController.showAddForm);
router.post('/add', upload.single('image'), bookController.addBook);
router.get('/edit/:id', bookController.showEditForm);
router.post('/edit/:id', upload.single('image'), bookController.updateBook);
router.get('/delete/:id', bookController.deleteBook);

module.exports = router;
