const faker = require("faker")

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries

let dataToSeed = []
for (let i=1;i<1;i++){
  dataToSeed.push({"id":i, name:`value ${i}`})
}

// let createRecipies = () =>{
//   name: faker.image.food
// }
// const fakeRecipe = []
// for (let i=1;i<100;i++){
// fakeRecipe.push(createRecipies)
// }

// await knex("recipies").insert(fakeRecipe)

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
