const mongoose = require('mongoose');
const express = require('express');
const carts =  require('./routes/cart');
const users = require('./routes/user');
const auth = require('./routes/auth');
const products = require('./routes/product');
const authMiddleware = require('./middlewares/authorization')

const app = express();

//connection
mongoose.connect('mongodb://127.0.0.1:27017/shoppyGlobe')
    .then(() => console.log('connected to DB'))
    .catch(e => console.log('could not connect to DB', e));


app.use(express.json());
app.use('/cart', authMiddleware); // cart route protected
app.use('/cart', carts);
app.use('/register', users);
app.use('/login', auth);
app.use('/products', products);



app.listen(4000, ()=> console.log('server running'));