import { model, Schema } from "mongoose";

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  likes: {
    type: Number,
    required: true,
  },

  dislikes: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: String,
    required: true,
  },
});

const Recipe = model("Recipe", recipeSchema);
module.exports = Recipe;
