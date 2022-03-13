const mongoose = require('mongoose');
const commentSchema = require('./Comment');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postName: {
      type: String,
      required: 'You need to have an post name!',
      trim: true
    },
    postText: {
      type: String,
      required: 'You need to leave the post details!',
      minlength: 1,
      maxlength: 350
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
  }
);

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
