import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

import type { CleanRecipe } from "@/types/recipe-page";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

type Props = {
  recipe: CleanRecipe;
};

export const RecipeDetails = ({ recipe }: Props) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-18 pb-18">
      <div className="mx-auto w-full max-w-154 space-y-8">
        <Image
          src={
            recipe.thumbnail
              ? recipe.thumbnail
              : "/recipe-page/meal-default.png"
          }
          alt="recipe image"
          width={700}
          height={700}
          loading="eager"
          className="aspect-77/50 rounded-lg object-cover"
        />

        <div className="space-y-10">
          <div className="space-y-5">
            <h1
              className={clsx(
                playfairDisplay.className,
                "text-3xl font-semibold text-[#E5E7EB] sm:text-[42px]",
              )}
            >
              {recipe.name}
            </h1>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[#394150] px-6 py-2 text-sm font-light text-[#E5E7EB]">
                category:{" "}
                <span className="font-semibold">{recipe.category}</span>
              </span>
              <span className="rounded-full bg-[#394150] px-6 py-2 text-sm font-light text-[#E5E7EB]">
                area: <span className="font-semibold">{recipe.area}</span>
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-7.5 w-4 rounded-full bg-[#FEBD2E]" />

              <h2 className="font-medium text-[#E5E7EB]">Ingredients</h2>
            </div>

            <ul className="space-y-3 pl-3">
              {recipe.ingredients.map((ingredient) => (
                <li
                  key={crypto.randomUUID()}
                  className="flex items-center gap-3 leading-[normal] font-light text-[#E5E7EB]"
                >
                  <span>•</span>
                  <span>
                    {ingredient.measure} {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-7.5 w-4 rounded-full bg-[#4E80EE]" />

              <h2 className="font-medium text-[#E5E7EB]">Instructions</h2>
            </div>

            <div className="flex flex-col gap-4">
              {recipe.instructions?.split("\r\n").map((pa) => (
                <p
                  key={crypto.randomUUID()}
                  className="leading-[normal] text-[#E5E7EB]"
                >
                  {pa}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
