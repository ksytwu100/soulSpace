const { Schema } = require('mongoose');

// This is a subdocument schema for saved cars
const carSchema = new Schema({
  carId: {
    type: String,
    required: true,
    unique: true, // Ensure no duplicate cars are saved
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = carSchema;
