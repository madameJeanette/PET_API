const express = require('express'); //import package
const app = express(); //execute
const mongoose = require ('mongoose');
const bodyParser = require('body-parser'); //JSON
const cheerio = require('cheerio'); //require cheerio
const cors = require('cors');
const axios = require('axios')
const url = 'https://www.dierenstee.nl/category/katten/'
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

//get data website

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const articles = []


        $('.entry-title', html).each(function() {//look in html for this attribute
          const title = $(this).text()             //find title texts
          const url = $(this).find('a').attr('href') //find url by a href
          articles.push({   //push data in object list
              title,
              url
          })
    })
    console.log(articles)
}).catch(err => console.log(err))

// connect to db

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true },
    () => console.log('connected to DB!')
);

//How do we start listening to the server
app.listen(3000);
