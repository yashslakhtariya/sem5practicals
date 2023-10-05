
const express = require('express');
const mongoose = require("mongoose");
const axios = require('axios');
// Connect
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

const Order = require('./Order');

const app = express();
const port = 9000;
app.use(express.json());

// app.post('/order', (req, res) => {
//   const newOrder = new Order({
//     customerID: mongoose.Types.ObjectId(req.body.customerID),
//     bookID: mongoose.Types.ObjectId(req.body.bookID),
//     initialDate: req.body.initialDate,
//     deliveryDate: req.body.deliveryDate
//   });
//   newOrder.save().then(() => {
//     res.send('New Order created successfully!')
//   }).catch((err) => {
//     res.status(500).send('Internal Server Error!');
//   })
// })

app.post('/order', (req, res) => {
  const customerID = new mongoose.Types.ObjectId(req.body.customerID);
  const bookID = new mongoose.Types.ObjectId(req.body.bookID);
  const newOrder = new Order({
    customerID: customerID,
    bookID: bookID,
    initialDate: req.body.initialDate,
    deliveryDate: req.body.deliveryDate
  });
  newOrder.save().then(() => {
    res.send('New Order created successfully!');
  }).catch((err) => {
    res.status(500).send('Internal Server Error!');
  });
});

app.get('/orders', (req, res) => {
  Order.find().then((orders) => {
    if (orders) {
      res.json(orders);
    } else {
      res.status(404).send('Orders not found');
    }
  }).catch((err) => {
    res.status(500).send('Internal Server Error!');
  });
});

app.get('/order/:id', (req, res) => {
  Order.findById(req.params.id).then((order) => {
    if (order) {
      axios.get(`http://localhost:5000/customer/${order.customerID}`).then((response) => {
        let orderObject = { CustomerName: response.data.name, BookTitle: '' };

        axios.get(`http://localhost:3000/book/${order.bookID}`).then((response) => {
          orderObject.BookTitle = response.data.title;
          res.json(orderObject);
        });
      });

    } else {
      res.status(404).send('Orders not found');
    }
  }).catch((err) => {
    res.status(500).send('Internal Server Error!');
  });
});

app.listen(port, () => {
  console.log(`Up and Running on port ${port} - This is Order service`);
});