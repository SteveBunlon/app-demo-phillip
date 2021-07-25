const Mongoose = require('mongoose');

const carsSchema = Mongoose.Schema({
  'company': Mongoose.Schema.Types.ObjectId,
  'engine': {
    'identification': {
      'manufacturer': String,
      'company': Mongoose.Schema.Types.ObjectId,
    },
    'horsePower': String,
  },
  'name': String,
  'wheelSize': Number,
}, {
  timestamps: false,
});

module.exports = carsSchema;
