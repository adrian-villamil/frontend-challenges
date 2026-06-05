"use client";

import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";

import type { Category } from "@/types/recipe-page";

type CategoryListProps = {
  categories: Category[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const categoryParam = searchParams.get("category");

  const setDefaultCategoryParam = useCallback(() => {
    if (searchParams.get("category")) return;

    const params = new URLSearchParams(searchParams);

    params.set("category", "Dessert");

    replace(`${pathname}?${params.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDefaultCategoryParam();
  }, [setDefaultCategoryParam]);

  const handleCategoryItemClick = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
      {categories.map((category) => (
        <CategoryItem
          key={category.idCategory}
          category={category}
          active={category.strCategory === categoryParam}
          onClick={handleCategoryItemClick}
        />
      ))}
    </div>
  );
};

type CategoryItemProps = {
  category: Category;
  active: boolean;
  onClick: (category: string) => void;
};

const CategoryItem = ({ category, active, onClick }: CategoryItemProps) => {
  return (
    <div
      className={clsx(
        "group overflow-hidden rounded-lg border border-[#394150] hover:cursor-pointer hover:bg-[#FEBD2E]",
        active && "bg-[#FEBD2E]",
      )}
      onClick={() => onClick(category.strCategory)}
    >
      <div className="flex -translate-x-11 items-center gap-3">
        <Image
          src={category.strCategoryThumb}
          alt="category-thumb"
          width={320}
          height={200}
          loading="lazy"
          className="w-22"
        />

        <span
          className={clsx(
            "text-xs font-semibold group-hover:text-[#0E1325]",
            active && "text-[#0E1325]",
            !active && "text-[#E5E7EB]",
          )}
        >
          {category.strCategory}
        </span>
      </div>
    </div>
  );
};
