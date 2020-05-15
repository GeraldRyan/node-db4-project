const server = require('express').Router();
const db = require('../data/data-config');
const schemes = require("./recipies-model")

server.get('/', (req, res) =>
{
  // get all recipies from the database
  // db('recipies')
  schemes.getRecipies()
    .then(recipies =>
    {
      res.status(200).json(recipies);
    })
    .catch(error =>
    {
      res.status(500).json(error);
    });
});

server.get('/:id', (req, res) =>
{
  // get all recipies from the database
  schemes.findById(req.params.id)
    .then(recipies =>
    {
      res.status(200).json(recipies);
    })
    .catch(error =>
    {
      res.status(500).json(error);
    });
});

server.get('/shoppinglist/:id', (req, res) =>
{
  // get all recipies from the database
  schemes.GetShoppingList(req.params.id)
    .then(recipies =>
    {
      let array = []
      recipies.map(item =>
      {
        array.push(` ${item.name}`)
      })
      res.status(200).json(`Shopping List: ${array} `);
    })
    .catch(error =>
    {
      res.status(500).json(error);
    });
});

server.get('/instructions/:id', (req, res) =>
{
  // get all recipies from the database
  schemes.GetInstructions(req.params.id)
    .then(instructions =>
    {
      let array = []

      instructions.map(item =>
      {
        array.push(item.instructions)
      })
      console.log(instructions)
      res.status(200).json(array);
    })
    .catch(error =>
    {
      res.status(500).json(error);
    });
});

module.exports = server