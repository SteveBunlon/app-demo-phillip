const express = require('express');
const router = express.Router({ });
const Cars = require('../db').model('cars');

/* GET cars listing. */
router.get('/', async function(req, res, next) {
    const cars = await Cars.find();
    res.json(cars);
});

module.exports = router;
