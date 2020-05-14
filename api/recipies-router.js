const server = require('express').Router();
const db = require('../data/data-config');

server.get('/', (req, res) => {
  // get all recipies from the database
  db('recipies')
  .then(recipies => {
    res.status(200).json(recipies);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server