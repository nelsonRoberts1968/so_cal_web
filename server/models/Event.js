const mongoose = require('mongoose');
const { Schema } = mongoose;
// const commentSchema = require('./Comment')
// const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      trim: true
    },
    contact: {
      type: String
    },
    contactInfo: {
      type: String
    }, 
    location: {
      type: String
    },
    date: {
      type: String
    },
    url: {
      type: String
    },
    username: {
      type: String
    }
  }
);

// eventSchema.virtual('commentCount').get(function() {
//   return this.comments.length;
// });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
