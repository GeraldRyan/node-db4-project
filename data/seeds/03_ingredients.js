
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Salmon'},
        {id: 2, name: 'Rice'},
        {id: 3, name: 'Broth'},
        {id: 4, name: 'Golden Grahams'},
        {id: 5, name: 'Maple Syrup'},
        {id: 7, name: 'Olive Oil'},
        {id: 8, name: 'Butter'},
        {id: 9, name: 'Salt'},
        {id: 10, name: 'Herbs du Provence'},
        {id: 11, name: 'Milk'},
        {id: 12, name: 'Chicken'},


      ]);
    });
};
