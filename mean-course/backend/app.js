const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
mongoose.connect('mongodb://mike:crom@localhost:27017/mehsages')
.then(()=>{
    console.log('successfully connected to mehsages database')
    err => {
        console.log(err.message);
    }
});
const Post = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
  next();
});
//database mehsages collection: mehsages
//test /api/posts POST functionality
app.post('/api/posts', (req, res, next) =>{
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  //save it to mongodb :)
  post.save();
  console.log(post);
  res.status(201).json({
    message: 'post added successfully'
  });
});

app.get('/api/posts',(req, res, next)=>{
  //res.send('Hello from Express at port 3000'); kkkk
  Post.find({})
  .then((posts =>{
    res.status(200).json({
      message: "mehsages are ready",
      posts: posts
    });
  }));
});

app.delete('/api/posts/:id', (req, res, next)=>{
  Post.findOneAndDelete({ _id: req.params.id }).then(result =>{
    console.log(result);
    res.status(200).json({ message: "D-LEETED"});
  })
})
module.exports = app;
