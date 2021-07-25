const Mongoose = require('mongoose');
const carsSchema = require('./cars');

const connection = Mongoose.createConnection('mongodb://localhost:27017/cars');

connection.model('cars', carsSchema);

module.exports = connection;



