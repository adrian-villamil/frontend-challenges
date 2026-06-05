import clsx from "clsx";
import { SearchX } from "lucide-react";
import { type Metadata } from "next";
import { Outfit } from "next/font/google";

import { getRecipeById } from "@/actions/recipe-page";
import { RecipeDetails } from "@/components/recipe-page/recipe-details";
import { RecipeHeader } from "@/components/recipe-page/recipe-header";
import { transformRecipe } from "@/utils/recipe-page/transform-recipe";

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "Recipe Page Challenge from devchallenges.io",
};

const outfit = Outfit({
  subsets: ["latin"],
});

type Props = {
  params: Promise<{ id: string }>;
};

export default async function RecipePage(props: Props) {
  const params = await props.params;
  const id = params.id;
  const recipe = await getRecipeById(id);

  if (!recipe.meals || typeof recipe.meals === "string")
    return (
      <main
        className={clsx(
          outfit.className,
          "flex min-h-screen flex-col bg-[#0E1325]",
        )}
      >
        <RecipeHeader />

        <div className="flex flex-1 items-center justify-center">
          <div>
            <div className="flex justify-center py-4">
              <SearchX color="#E5E7EB" size={100} />
            </div>
            <h4 className="text-center text-3xl leading-[normal] text-[#E5E7EB]">
              Recipe not found
            </h4>
          </div>
        </div>
      </main>
    );

  return (
    <main className={clsx(outfit.className, "min-h-screen bg-[#0E1325]")}>
      <RecipeHeader />

      <RecipeDetails recipe={transformRecipe(recipe.meals[0])} />
    </main>
  );
}
