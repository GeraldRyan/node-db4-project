
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_number: 1, instructions: 'Pour Cereal', recipe_id: 1, ingredient_id:4},
        {id: 2, step_number: 1, instructions: 'Pour Milk', recipe_id: 1, ingredient_id:11},
        {id: 3, step_number: 1, instructions: 'Cook Rice', recipe_id: 2, ingredient_id:2},
        {id: 4, step_number: 1, instructions: 'Cook Chicken', recipe_id: 2, ingredient_id:12},
        {id: 5, step_number: 1, instructions: 'Mix with Herbs', recipe_id: 2, ingredient_id:10},
        {id: 6, step_number: 1, instructions: 'Dress Salmon', recipe_id: 3, ingredient_id:1},
        {id: 7, step_number: 1, instructions: 'Glaze with Maple Syrup', recipe_id: 3, ingredient_id:5},
        {id: 8, step_number: 1, instructions: 'Add Salt', recipe_id: 3, ingredient_id:9},
        {id: 9, step_number: 1, instructions: 'Bake Item', recipe_id: 3, ingredient_id:9}


      ]);
    });
};
