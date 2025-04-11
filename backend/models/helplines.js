const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  voice: {
    number: String,
    availability: String,
  },
  text: {
    number: String,
    message: String,
    availability: String,
  },
  email: String,
  webchat: {
    url: String,
    availability: String,
  },
});

const AvailabilitySchema = new mongoose.Schema({
  days: [String],
  from: String,
  to: String,
});

const HelplineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    contact: {
      type: ContactSchema,
      required: true,
    },
    availability: {
      type: [AvailabilitySchema], // Array to handle varied schedules
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Helpline', HelplineSchema, 'helplines');
