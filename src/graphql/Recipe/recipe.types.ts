export type RecipeIdType = {
  id: string;
};

export type getRecipesType = {
  limit: number;
};

export type createRecipeType = {
  data: {
    name: string;
    description: string;
  };
};

export type updateRecipeDataType = {
  id: string;
  data: {
    name?: string;
    description?: string;
  };
};

export type updateRecipeType = {
  name?: string;
  description?: string;
  likes?: number;
  dislikes?: number;
};
