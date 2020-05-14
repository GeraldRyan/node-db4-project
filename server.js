const express = require('express');
const helmet = require('helmet');

const db = require('./data/data-config.js');
const recipiesRouter = require("./api/recipies-router")

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res)=>{
  res.status(200).json("Ready for action")
})

server.use('/api/recipies/', recipiesRouter)



server.get('/api/ingredients', (req, res) => {
  // get all animals from the database
  // include species name
  db('ingredient as i')
    .leftJoin('recipies as r', 'r.id', 'i.ingredient_id')
    .select('i.id', 'i.ingredients_name', 'r.recipe_name')
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// create animal
server.post('/api/animals', (req, res) => {
  db('animals').insert(req.body)
  .then(ids => {
    const id = ids[0];

    db('animals')
      .where({ id })
      .first()
    .then(animal => {
      res.status(201).json(animal);
    });
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

// remove species
server.delete('/api/species/:id', (req, res) => {
  db('species')
    .where({ id: req.params.id })
    .del()
  .then(count => {
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Record not found' });
    }
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;
