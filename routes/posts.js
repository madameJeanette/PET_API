const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//GET ALL THE POSTS
router.get('/', async (req, res) => {
   try {
       const posts = await Post.find();
       res.json(posts)
   } catch (err) {
       response.json({message: err});
   }
});

// GET SPECIFIC POST by ID
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)  
    } catch (err) {
        res.json({message: err});
    }

 });

 
//SUBMIT A POST
router.post('/', async (req, res) => {
   // console.log(req.body);
   const post = new Post({
        title: req.body.title,
        name:req.body.name,
        age:req.body.age,
        description:req.body.description,
        location:req.body.location,
        date:req.body.date

    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }

});

 //Delete POST by ID
 router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost)  
    } catch (err) {
        res.json({message: err});
    }
});

 //Update POST by ID
 router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set: { title: req.body.title } }
        );
        res.json(updatedPost)  
    } catch (err) {
        res.json({message: err});
    }
});
module.exports = router;

