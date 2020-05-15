
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Cook it', recipe_id: 1, ingredient_id:1},

      ]);
    });
};
