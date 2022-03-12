const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  contact: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    isDate: true
  },
  location: {
    type: String,
  },
  url: {
    type: String,
    isUrl: true
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
