const express = require('express');
const router = express.Router(); 
const Post = require('../models/Post');

router.get('/', (req, res, next) => {  //.get=get, .post=send, .patch=update, .delete
   console.log('This is posts');
   Post.find({},function(err, posts) {
    if (err){
        return next(err);
    }
    res.render("posts", posts);
   })
});

//router.post('/',(req,res) => {
   // console.log(req.body);
//})
router.post('/', (req, res) => {
    const item = new Post({
        brand: req.body.brand
    })
    item.save() //save to db
    //.exec() //return a promise?
    .then(data => { //get back data?
        res.json(data); //respond with json
    })
    .catch(err => {
        res.json({message: err});
    });
});
module.exports = router;