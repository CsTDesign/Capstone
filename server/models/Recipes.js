import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  dietaryPreference: [String],
  alcohol: [String],
  bakingNeeds: [String],
  bread: [String],
  cannedItems: [String],
  condiments: [String],
  cookingOil: [String],
  dairy: [String],
  dessert: [String],
  dressing: [String],
  drinks: [String],
  fruit: [String],
  grains: [String],
  meat: [String],
  nuts: [String],
  saltyFoods: [String],
  seafood: [String],
  seeds: [String],
  soup: [String],
  spices: [String],
  supplements: [String],
  sweeteners: [String],
  vegetables: [String]
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
