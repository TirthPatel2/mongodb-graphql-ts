import { createRecipeType, updateRecipeType } from "./recipe.types";

const Recipe = require("./recipe.model");

const getOneRecipe = async (id: string) => {
  return Recipe.findById(id);
};

const getRecipes = async (limit: number) => {
  return Recipe.find().limit(limit);
};

const createRecipe = async (data: createRecipeType) => {
  const newRecipe = new Recipe({
    ...data,
    likes: 0,
    dislikes: 0,
    createdAt: new Date().toISOString(),
  });

  await newRecipe.save();

  return newRecipe;
};

const updateRecipeData = async (id: string, data: updateRecipeType) => {
  return Recipe.findByIdAndUpdate(id, data);
};

const deleteRecipe = async (id: string) => {
  const isDeleted = (await Recipe.findByIdAndDelete(id)).deleteCount;

  return isDeleted === 0 ? false : true;
};

module.exports = {
  getOneRecipe,
  getRecipes,
  createRecipe,
  updateRecipeData,
  deleteRecipe,
};
