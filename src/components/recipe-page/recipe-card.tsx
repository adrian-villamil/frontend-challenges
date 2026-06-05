"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import type { Meal } from "@/types/recipe-page";

type Props = {
  recipe: Meal;
};

export const RecipeCard = ({ recipe }: Props) => {
  const { replace } = useRouter();

  const handleCardClick = () => {
    replace(`/recipe-page/${recipe.idMeal}`);
  };

  return (
    <div
      className="cursor-pointer space-y-3 rounded-lg bg-[#394150] px-2 pt-2 pb-3 transition-all hover:scale-105 hover:bg-[#64738b]"
      onClick={handleCardClick}
    >
      <Image
        src={
          recipe.strMealThumb
            ? recipe.strMealThumb
            : "/recipe-page/meal-default.png"
        }
        alt={recipe.strMeal}
        width={700}
        height={700}
        loading="lazy"
        className="aspect-3/1 md:aspect-73/40 lg:aspect-square rounded-md object-cover"
      />

      <h4 className="text-[#E5E7EB]">{recipe.strMeal}</h4>
    </div>
  );
};
