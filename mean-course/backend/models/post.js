const mongoose = require('mongoose');

//with mongoose imported we create a schema

const postSchema = mongoose.Schema({
  title: {type: String, required: true },
  content: {type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
