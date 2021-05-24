const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use(cors());
//for every request hit that runs
app.use(express.json());
//function executes when route hit z.B. authentification for page access
app.use('/posts', postsRoute);
//app.options('*', cors()); //wildecard


//ROUTES
app.get('/', (req, res) => {  //.get=get, .post=send, .patch=update, .delete
    res.send('This is home'); 
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },  
    () => console.log('houston we have no problem')
);


//Listen to server 
//...still no clue what a server even is but yeah sure let's create one! Brilliant idea, what could go wrong? WHAT AM I DOING?
app.listen(3001); //don't know what's a localhost and what's the number?