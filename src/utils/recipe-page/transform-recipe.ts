import type { CleanRecipe, Meal } from "@/types/recipe-page";

// Función transformadora
export const transformRecipe = (apiMeal: Meal): CleanRecipe => {
  const ingredients: { name: string; measure: string }[] = [];

  // Recorremos del 1 al 20 para agrupar
  for (let i = 1; i <= 20; i++) {
    const ingredient = apiMeal[`strIngredient${i}` as keyof Meal];
    const measure = apiMeal[`strMeasure${i}` as keyof Meal];

    // Si el ingrediente existe y no está vacío, lo agregamos
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        name: ingredient,
        measure: measure ? measure.trim() : "",
      });
    }
  }

  return {
    id: apiMeal.idMeal,
    name: apiMeal.strMeal,
    category: apiMeal.strCategory,
    area: apiMeal.strArea,
    instructions: apiMeal.strInstructions,
    thumbnail: apiMeal.strMealThumb,
    youtube: apiMeal.strYoutube,
    ingredients: ingredients,
  };
};
