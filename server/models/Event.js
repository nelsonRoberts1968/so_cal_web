const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: 'You need to have an event name!',
      trim: true
    },
    eventText: {
      type: String,
      required: 'You need to leave the event details!',
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
  }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
