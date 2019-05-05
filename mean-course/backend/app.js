const express = require('express');

const app = express();


app.use((req, res, next)=>{
  res.send('Hello from Express at port 3000');
});

module.exports = app;
