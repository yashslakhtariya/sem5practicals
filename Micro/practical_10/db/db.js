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
