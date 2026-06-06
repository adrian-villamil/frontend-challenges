import clsx from "clsx";
import { type Metadata } from "next";
import { Outfit } from "next/font/google";

import { getCategories, getRecipesByCategory } from "@/actions/recipe-page";
import { FilterBar } from "@/components/recipe-page/filter-bar";
import { HeroSection } from "@/components/recipe-page/hero-section";
import { RecipeGrid } from "@/components/recipe-page/recipe-grid";
import { Sidebar } from "@/components/recipe-page/sidebar";
import { FilterRecipes } from "@/utils/recipe-page/filter-recipes";

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "Recipe Page Challenge from devchallenges.io",
};

const outfit = Outfit({
  subsets: ["latin"],
});

type Props = {
  searchParams?: Promise<{
    category?: string;
    query?: string;
    sort_by?: string;
  }>;
};

export default async function RecipePage(props: Props) {
  const searchParams = await props.searchParams;
  const categoriesList = await getCategories();
  const recipesList = await getRecipesByCategory(searchParams?.category);
  const recipes = FilterRecipes(
    recipesList.meals,
    searchParams?.query,
    searchParams?.sort_by,
  );

  return (
    <main className={clsx(outfit.className, "min-h-screen bg-[#0E1325]")}>
      <HeroSection />

      <div className="flex flex-col md:flex-row gap-8 px-3 pb-3 md:px-8 md:pb-8 lg:px-18 lg:pb-18">
        <Sidebar categories={categoriesList.categories} />

        <div className="flex-1 space-y-10">
          <FilterBar />

          <RecipeGrid recipes={recipes} />
        </div>
      </div>
    </main>
  );
}
