const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS');
  next();
});
//test /api/poasts POST functionality
app.post('/api/posts', (req, res, next) =>{
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'sup ninja chikken',
    post: post
  });
});

app.get('/api/posts',(req, res, next)=>{
  //res.send('Hello from Express at port 3000'); kkkk
  const posts = [
    {
      id: "0",
      title: 'EOS',
      content: 'gambling on this one'
    },
    {
      id: "1",
      title: 'ETH',
      content: 'a must-have for any trader'
    },
    {
      id: "2",
      title: 'BTC',
      content: 'a staple of any crypto diet'
    },
    {
      id: "3",
      title: 'NXS',
      content: 'taking a risk, hoping it triples'
    }
  ];
  res.status(200).json({
    message: posts.length + " posts fetched",
    posts: posts
  });
});

module.exports = app;
