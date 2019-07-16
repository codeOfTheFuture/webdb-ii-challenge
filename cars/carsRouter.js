const express = require('express');

const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  } catch (error) {
    res.status(500).json({
      message: 'Server was unable to retrieve cars',
    });
  }
});

module.exports = router;
