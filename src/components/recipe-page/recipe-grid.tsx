import { SearchX } from "lucide-react";

import type { Meal } from "@/types/recipe-page";

import { RecipeCard } from "./recipe-card";

type Props = {
  recipes: Meal[] | null;
};

export const RecipeGrid = ({ recipes }: Props) => {
  if (!recipes)
    return (
      <div>
        <div className="flex justify-center py-4">
          <SearchX color="#E5E7EB" size={100} />
        </div>
        <h4 className="text-center text-3xl leading-[normal] text-[#E5E7EB]">
          Recipe not found
        </h4>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
};
