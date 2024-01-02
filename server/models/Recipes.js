import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  dietaryPreference: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  alcohol: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  bakingNeeds: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  bread: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cannedItems: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  condiments: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  cookingOil: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dairy: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dessert: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  drinks: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dressing: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  fruit: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  grains: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  meat: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  nuts: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  saltyFoods: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  seafood: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  seeds: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  soup: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  spices: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  supplements: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  sweeteners: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  vegetables: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  recipes: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
