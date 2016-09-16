'use strict';

var recipe = {ingredient: "amount"}

function addIngredient(recipe, ingredient, amount) {
  var recipe = {chocolate: '16 oz'}
  return recipe;
}

function removeIngredient(recipe, ingredient) {
  var recipe = {butter: '2 sticks', sugar: '2 cups'}
 delete recipe[ingredient];
 return recipe;
}

function updateIngredient(recipe, ingredient, amount) {
  var recipe = { butter: '2 sticks', vanilla: 'one teaspoon', sugar: '3 cups' }
  recipe[ingredient] = amount;
  return recipe;
}

function readRecipe(recipe) {
  var recipe = {cheese: 'one cup', coriander: 'one teaspoon'};
  for (var ingredient in recipe) {
    console.log("this recipe calls for " + recipe[ingredient] + " of " + ingredient );
  }
}