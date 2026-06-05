import clsx from "clsx";
import { Playfair_Display } from "next/font/google";

import type { Category } from "@/types/recipe-page";

import { CategoryList } from "./category-list";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
});

type Props = {
  categories: Category[];
};

export const Sidebar = ({ categories }: Props) => {
  return (
    <aside className="w-full md:max-w-70 space-y-8">
      <h1
        className={clsx(
          playfairDisplay.className,
          "text-2xl leading-[normal] font-semibold text-[#E5E7EB]",
        )}
      >
        Categories
      </h1>

      <CategoryList categories={categories} />
    </aside>
  );
};
