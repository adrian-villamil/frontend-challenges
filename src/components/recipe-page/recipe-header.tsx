"use client";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const RecipeHeader = () => {
  return (
    <header className="px-18 pt-8 pb-13">
      <div className="flex items-center justify-between">
        <Link href="/recipe-page">
          <Image
            src="/recipe-page/logo-light.svg"
            alt="logo"
            width={88}
            height={28}
            className="shrink-0"
            loading="eager"
          />
        </Link>

        <Link
          href="/recipe-page"
          className="flex items-center gap-2 rounded-full bg-[#E5E7EB] px-6 py-3 font-medium text-[#0E1325]"
        >
          <ChevronLeft /> Back to categories
        </Link>
      </div>
    </header>
  );
};
