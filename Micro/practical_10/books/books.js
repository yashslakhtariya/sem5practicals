//require("dotenv").config();
const express = require('express');

// Connect
// require('../db/db');
const mongoose = require('mongoose');

mongoose.connect('mongodb://yash:haribol@127.0.0.1:27017/books', {   // MONGO_URI = mongodb://localhost:27017/DB_NAME
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useFindAndModify: false,
    //useCreateIndex: true
}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.log('Connection failed!');
    console.log(e.message);
});

const Book = require('./Book');

const app = express();
const port = 4200;
app.use(express.json());
app.post('/book', (req, res) => {
  const newBook = new Book({
    // ...req.body
    title: req.body.title,
    author: req.body.author,
    numberPages: req.body.numberPages,
    publisher: req.body.publisher,
  });
  newBook.save().then(() => {
    res.send('New Book created successfully!');
  }).catch((err) => {
    res.status(500).send('Internal Server Error!' + err);
  });
});

app.get('/books', (req, res) => {
  Book.find().then((books) => {
    if (books.length !== 0) {
      res.json(books);
    } else {
      res.status(404).send('Books not found');
    }
  }).catch((err) => {
    res.status(500).send('Internal Server Error!');
  });
});

app.get('/book/:id', (req, res) => {
  Book.findById(req.params.id).then((book) => {
    if (book) {
      res.json(book);
    } else {
      res.status(404).send('Books not found');
    }
  }).catch((err) => {
    res.status(500).send('Internal Server Error!');
  });
});

app.delete('/book/:id', (req, res) => {
  Book.findOneAndRemove(req.params.id).then((book) => {
    if (book) {
      res.json('Book deleted Successfully!');
    } else {
      res.status(404).send('Book Not found!');
    }
  }).catch((err) => {
    res.status(500).send('Internal Server Error!');
  });
});

app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Book service`);
});