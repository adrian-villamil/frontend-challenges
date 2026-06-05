import type { Meal } from "@/types/recipe-page";

export const FilterRecipes = (
  recipesList: Meal[] | null,
  query?: string,
  sort_by?: string,
) => {
  if (!recipesList) return null;

  let recipes = recipesList;

  if (query) {
    recipes = recipes.filter(
      (recipe) =>
        recipe.strMeal.toLowerCase().includes(query.toLowerCase()) ||
        recipe.strArea?.toLowerCase().includes(query.toLowerCase()) ||
        recipe.strCountry?.toLowerCase().includes(query.toLowerCase()),
    );
  }

  if (sort_by && sort_by === "id") {
    recipes = recipes.sort((a, b) => +a.idMeal - +b.idMeal);
  }

  if (recipes.length === 0) return null;

  return recipes;
};
