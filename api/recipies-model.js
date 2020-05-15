const db = require('../data/data-config');

module.exports = {
  getRecipies,
  GetShoppingList,
  GetInstructions,
  findById,
  findSteps,
  add,
  update,
  remove
}

function getRecipies()
{
  return db('recipies')
}

function GetShoppingList(recipe_id){
  return db('recipies').join('steps', "recipies.id",'=','steps.recipe_id').join('ingredients', 'steps.ingredient_id','=','ingredients.id').where("recipies.id","=", recipe_id).orderBy("steps.step_number")
  .select('ingredients.name')

// write logic
}

function GetInstructions(recipe_id){
// write logic
return db('recipies').join('steps', "recipies.id",'=','steps.recipe_id').join('ingredients', 'steps.ingredient_id','=','ingredients.id').where("recipies.id","=", recipe_id).orderBy("steps.step_number")
.select('steps.instructions')

}



function findById(id)
{
  return db('recipies').where({ id }).first()
}

function findSteps(id)
{
  return db('recipies').join('steps', "recipies.id", '=', 'steps.scheme_id').where("recipies.id", "=", id).orderBy("steps.step_number").select('recipies.scheme_name', "steps.step_number", "steps.instructions")
}

function add(scheme)
{
  return db('recipies').insert({ scheme_name: scheme.scheme_name })
}
function update(changes, id)
{
  return db('recipies').where('id', '=', id)
    .update({
      scheme_name: changes.scheme_name
    })
}
function remove(id)
{
  return db('recipies')
    .where('id', '=', id)
    .del()
}