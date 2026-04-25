const Book = require('../models/bookModel');
const fs = require('fs');
const path = require('path');

// @desc    Get all books
// @route   GET /
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ createdAt: -1 });
        const totalBooks = await Book.countDocuments();
        res.render('index', { books, totalBooks, title: 'Book Store Dashboard' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// @desc    Show add book form
// @route   GET /add
exports.showAddForm = (req, res) => {
    res.render('addBook', { title: 'Add New Book' });
};

// @desc    Add new book
// @route   POST /add
exports.addBook = async (req, res) => {
    try {
        const { title, author, category, price, quantity, description } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!image) {
            return res.status(400).send('Please upload an image');
        }

        const newBook = new Book({
            title,
            author,
            category,
            price,
            quantity,
            description,
            image
        });

        await newBook.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// @desc    Show edit book form
// @route   GET /edit/:id
exports.showEditForm = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.render('editBook', { book, title: 'Edit Book Details' });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// @desc    Update book details
// @route   POST /edit/:id
exports.updateBook = async (req, res) => {
    try {
        const { title, author, category, price, quantity, description } = req.body;
        const book = await Book.findById(req.params.id);

        if (!book) return res.status(404).send('Book not found');

        let image = book.image;
        if (req.file) {
            // Delete old image
            const oldImagePath = path.join(__dirname, '../public/uploads/', book.image);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
            image = req.file.filename;
        }

        book.title = title;
        book.author = author;
        book.category = category;
        book.price = price;
        book.quantity = quantity;
        book.description = description;
        book.image = image;

        await book.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// @desc    Delete book
// @route   GET /delete/:id
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found');

        // Delete image file
        const imagePath = path.join(__dirname, '../public/uploads/', book.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }

        await Book.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
