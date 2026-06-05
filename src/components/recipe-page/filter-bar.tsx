"use client";

import { Search } from "lucide-react";
import { Outfit } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const outfit = Outfit({
  subsets: ["latin"],
});

const validSortOptions = ["Name", "ID"];

export const FilterBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const query = searchParams.get("query");
  const sortBy = searchParams.get("sort_by");

  const handleSearchChange = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value === "name") {
      params.delete("sort_by");
    } else {
      params.set("sort_by", value);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-between gap-16 md:gap-4">
      <div className="relative w-full max-w-md">
        <Search className="absolute top-1/2 left-6 -translate-y-1/2 text-[#394150]" />
        <Input
          placeholder="Search recipes and more..."
          className="h-fit w-full rounded-full border-2 border-[#394150] px-0 py-3 pr-6 pl-15 text-[#E5E7EB]"
          onChange={(e) => handleSearchChange(e.target.value)}
          defaultValue={query?.toString()}
        />
      </div>

      <Select defaultValue={sortBy ?? "name"} onValueChange={handleSortChange}>
        <SelectTrigger className="rounded-full bg-[#E5E7EB] px-6 py-3 text-base data-placeholder:text-[#0E1325] data-[size=default]:h-fit">
          <SelectValue
            placeholder={
              <span className="font-medium">
                Sort by: <span className="font-bold">Name</span>
              </span>
            }
          />
        </SelectTrigger>

        <SelectContent position="popper" className={outfit.className}>
          <SelectGroup>
            {validSortOptions.map((option) => (
              <SelectItem key={option} value={option.toLowerCase()}>
                <span className="font-medium">
                  Sort by: <span className="font-bold">{option}</span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
