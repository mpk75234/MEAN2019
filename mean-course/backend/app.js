const express = require('express');

const app = express();



app.use('/api/posts',(req, res, next)=>{
  //res.send('Hello from Express at port 3000');
  const posts = [
    {
      id: 0,
      title: 'EOS',
      content: 'gambling on this one'
    },
    {
      id: 1,
      title: 'ETH',
      content: 'a must-have for any trader'
    },
    {
      id: 2,
      title: 'BTC',
      content: 'a staple of any crypto diet'
    },
    {
      id: 3,
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
