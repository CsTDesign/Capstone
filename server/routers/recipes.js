import { Router } from "express";
import Recipes from "../models/Recipes.js";

const router = Router();

// Create recipes route that handles "/recipes/"
router.post("/", async (request, response) => {
  try {
    const newRecipes = new Recipes(request.body);
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

export default router;
