
var mongoose = require('mongoose');


var Schema = mongoose.Schema;


var CommentSchema = new Schema({

  // Author's Name
  author: {
    type: String
  },

  content: {
    type: String
  }
  
});



var Comment = mongoose.model('Comment', CommentSchema);

// Export the Model
module.exports = Comment;