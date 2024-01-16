import { Router } from "express";
import Recipe from "../models/Recipes.js";

const router = Router();

// Create recipe route that handles "/recipes/"
router.post("/", async (request, response) => {
  try {
    const newRecipes = new Recipe(request.body);
    const data = await newRecipes.save();
    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);
    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});

// Get all recipes route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Recipe.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single recipe by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Recipe.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete a recipe by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Recipe.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single recipe by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Recipe.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          diet: body.diet,
          alcohol: body.alcohol,
          bakingNeeds: body.bakingNeeds,
          bread: body.bread,
          cannedItems: body.cannedItems,
          condiments: body.condiments,
          cookingOil: body.cookingOil,
          dairy: body.dairy,
          dessert: body.dessert,
          dressing: body.dressing,
          drinks: body.drinks,
          fruit: body.fruit,
          grains: body.grains,
          meat: body.meat,
          nuts: body.nuts,
          saltyFoods: body.saltyFoods,
          seafood: body.seafood,
          seeds: body.seeds,
          soup: body.soup,
          spices: body.spices,
          supplements: body.supplements,
          sweeteners: body.sweeteners,
          vegetables: body.vegetables
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
