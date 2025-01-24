const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const carSchema = require('./Car');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // Array of saved cars, using the Car schema
    savedCars: [carSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Hash user password before saving
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// Method to compare and validate passwords
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Virtual to get the count of saved cars
userSchema.virtual('carCount').get(function () {
  return this.savedCars.length;
});

const User = model('User', userSchema);

module.exports = User;
