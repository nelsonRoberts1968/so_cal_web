const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat');

const contactSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Must match an email address!']
        },
        message: {
            type: String,
            required: true,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    }
)


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;