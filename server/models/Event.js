const mongoose = require('mongoose');
const { Schema } = mongoose;
// const commentSchema = require('./Comment')
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxlength: 350,
    },
    contact: {
      type: String,
    },
    contactInfo: {
      type: String,
    }, 
    location: {
      type: String,
    },
    date: {
      type: String,
    }, 
    link: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    // comments: [commentSchema]
  }
);

// eventSchema.virtual('commentCount').get(function() {
//   return this.comments.length;
// });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
