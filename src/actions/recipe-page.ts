"use server";

import { BASE_URL } from "@/constants/recipe-page";
import type {
  CategoriesResponse,
  RecipeResponse,
  RecipesResponse,
} from "@/types/recipe-page";

export const getCategories = async (): Promise<CategoriesResponse> => {
  const url = `${BASE_URL}/categories.php`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching categories");
  }

  return response.json();
};

export const getRecipesByCategory = async (
  category?: string,
): Promise<RecipesResponse> => {
  const url = `${BASE_URL}/filter.php?c=${category}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching recipes by category");
  }

  return response.json();
};

export const getRecipeById = async (
  recipeId: string,
): Promise<RecipeResponse> => {
  const url = `${BASE_URL}/lookup.php?i=${recipeId}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error fetching recipe");
  }

  return response.json();
};
