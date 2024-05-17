import {
  createRecipeType,
  getRecipesType,
  RecipeIdType,
  updateRecipeDataType,
} from "./recipe.types";

const recipeService = require("./recipe.service");

module.exports = {
  Query: {
    // recipe: async (_parent, args, _conext, _info) => {},
    recipe: async (_: unknown, { id }: RecipeIdType) => {
      return recipeService.getOneRecipe(id);
    },

    recipes: async (_: unknown, { limit }: getRecipesType) => {
      return recipeService.getRecipes(limit);
    },
  },
  Mutation: {
    createRecipe: async (_: unknown, { data }: createRecipeType) => {
      return recipeService.createRecipe(data);
    },

    updateRecipeData: async (
      _: unknown,
      { id, data }: updateRecipeDataType
    ) => {
      return recipeService.updateRecipeData(id, data);
    },

    deleteRecipe: async (_: unknown, { id }: RecipeIdType) => {
      return recipeService.deleteRecipe(id);
    },
  },
};
