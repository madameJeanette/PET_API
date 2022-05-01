const express = require('express'); //import package
const app = express(); //execute
const mongoose = require ('mongoose');
const bodyParser = require('body-parser'); //JSON
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home...')
});
// connect to db

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true },
    () => console.log('connected to DB!')
);

//How do we start listening to the server
app.listen(3000);
