
exports.seed = function(knex) {
  // Deletes ALL existing entries

let dataToSeed = []
for (let i=1;i<100;i++){
  dataToSeed.push({"id":i, name:`value ${i}`})
}
// console.log(dataToSeed)

  return knex('recipies').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipies').insert(
        dataToSeed
        // {id: 1, name: 'rowValue1'}
      
      
      );
    });
};
