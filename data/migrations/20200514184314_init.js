
exports.up = function (knex)
{
  return knex.schema.createTable('recipies', recipies =>
  {
    recipies.increments("id")
    recipies.string("name", 255).notNullable()

  }).createTable('ingredients', ingredient =>
  {
    ingredient.increments("id")
    ingredient.string("name", 255).notNullable()
  })
    .createTableIfNotExists('steps', step =>
    {
      step.increments("id")
      step.integer("step_number", 255).notNullable().unsigned()
      step.string("instructions", 255).notNullable()
      step.integer("recipe_id").unsigned().notNullable().references('id').inTable("recipies")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      step.integer("ingredient_id").unsigned().notNullable().references('id').inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    })
};

exports.down = function (knex)
{
  return knex.schema.dropTableIfExists("steps").dropTableIfExists('recipies').dropTableIfExists("ingredients")
    
};
