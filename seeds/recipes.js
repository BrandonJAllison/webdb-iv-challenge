exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: "Bisquick Recipe", dish_id: 1},
        {recipe_name: "Grandmas Chicken", dish_id: 2},
        {recipe_name: "Julies Chicken", dish_id: 2},
        {recipe_name: "Torchy's Traditional", dish_id: 5},
        {recipe_name: "Sally's Cookies", dish_id: 3},
        {recipe_name: "Christmas Recipe", dish_id: 3},
        {recipe_name: "Pappa Johns Recipe", dish_id: 5},
    ]);
    });
};
