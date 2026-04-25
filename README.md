# 💻 Book Store Management System

## 📝 Problem Definition
To create a web-based Book Store Management System using Node.js and Express.js that allows users to manage book records efficiently. The system uses MongoDB for storage, EJS for rendering, and Multer for image uploads, implementing full CRUD operations.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1ebc30d4-e2ba-461e-aa74-4a3962a8351f" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/49f8e370-6d63-4dfa-a77d-730cec699be1" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/257c1a31-80c4-472f-8d78-de8e66dbaed2" />


## 📂 Folder Structure
```
BOOK-STORE-APP/
├── config/
│   └── db.js            # MongoDB connection
├── controllers/
│   └── bookController.js # CRUD logic
├── middleware/
│   └── upload.js        # Multer configuration
├── models/
│   └── bookModel.js     # Book Schema
├── public/
│   ├── css/
│   │   └── style.css    # Premium CSS
│   └── uploads/         # Book cover images
├── routes/
│   └── bookRoutes.js    # Express routes
├── views/
│   ├── partials/        # EJS partials
│   ├── index.ejs        # Dashboard
│   ├── addBook.ejs      # Add Form
│   └── editBook.ejs     # Edit Form
├── server.js            # Entry point
└── package.json
```

## ✨ Features
- **Dynamic Dashboard**: View all books with a modern gallery layout.
- **Inventory Stats**: Real-time summary of total books and quantity.
- **Image Upload**: Seamless cover image management using Multer.
- **Full CRUD**: Add, View, Update, and Delete book records.
- **Responsive Design**: Premium dark-themed UI that works on all devices.
- **MVC Architecture**: Clean and scalable code structure.

## 📊 MongoDB Schema
```javascript
{
    title: String,
    author: String,
    category: String,
    price: Number,
    quantity: Number,
    description: String,
    image: String,
    timestamps: true
}
```

## 🚀 How to Run
1. Ensure MongoDB is running on `mongodb://localhost:27017/bookstore`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server with Nodemon:
   ```bash
   npm run dev
   ```
4. Access at `http://localhost:3000`.
