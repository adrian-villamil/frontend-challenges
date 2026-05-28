"use client";

import clsx from "clsx";
import { Outfit } from "next/font/google";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { validBedrooms, validLocations } from "@/constants/property-listing";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

const outfit = Outfit({
  subsets: ["latin"],
});

export const FilterBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const filters = {
    locations:
      searchParams
        .get("locations")
        ?.split(",")
        .filter((location) => validLocations.includes(location)) ?? [],
    superhost: searchParams.get("superhost") === "true",
    bedrooms: validBedrooms.includes(searchParams.get("bedrooms") ?? "")
      ? searchParams.get("bedrooms")
      : null,
  };

  const updateSearchParams = (callback: (params: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());

    callback(params);

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  };

  const handleAllStaysClick = () => {
    updateSearchParams((params) => {
      params.delete("locations");
    });
  };

  const handleLocationClick = (location: string) => {
    updateSearchParams((params) => {
      const isLocationSelected = filters.locations.includes(location);

      if (isLocationSelected) {
        const newSelectedLocations = filters.locations.filter(
          (selectedLocation) => selectedLocation !== location,
        );

        if (newSelectedLocations.length === 0) {
          params.delete("locations");
        } else {
          params.set("locations", newSelectedLocations.join(","));
        }
      } else {
        const newSelectedLocations = [...filters.locations, location];

        params.set("locations", newSelectedLocations.join(","));
      }
    });
  };

  const handleSuperhostChange = (checked: boolean) => {
    updateSearchParams((params) => {
      if (checked) {
        params.set("superhost", "true");
      } else {
        params.delete("superhost");
      }
    });
  };

  const handlePropertyTypeChange = (value: string) => {
    updateSearchParams((params) => {
      if (value === "all") {
        params.delete("bedrooms");
      } else {
        params.set("bedrooms", value);
      }
    });
  };

  return (
    <nav className="flex -translate-y-10 flex-col items-center justify-between gap-y-8 rounded-xl border border-[#4A5567] bg-[#20293A] px-10 py-8 lg:-translate-y-1/2 lg:flex-row lg:items-center">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="ghost"
          className={clsx(
            "cursor-pointer rounded-md px-3 py-2 text-[#F2F9FE] hover:bg-[#4A5567] hover:text-[#F2F9FE]",
            filters.locations.length === 0 && "bg-[#4A5567]",
          )}
          onClick={handleAllStaysClick}
        >
          All Stays
        </Button>

        {validLocations.map((location) => (
          <Button
            key={location}
            variant="ghost"
            className={clsx(
              "cursor-pointer rounded-md px-3 py-2 text-[#F2F9FE] hover:bg-[#4A5567] hover:text-[#F2F9FE]",
              filters.locations.includes(location) && "bg-[#4A5567]",
            )}
            onClick={() => handleLocationClick(location)}
          >
            {location}
          </Button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <Switch
            id="superhost"
            size="lg"
            className="rotate-180 cursor-pointer data-checked:bg-[#4E80EE]"
            defaultChecked={filters.superhost}
            onCheckedChange={handleSuperhostChange}
          />
          <Label
            htmlFor="superhost"
            className="cursor-pointer text-xs font-normal tracking-wide text-[#F2F9FE]"
          >
            Superhost
          </Label>
        </div>

        <Select
          defaultValue={filters.bedrooms?.toString()}
          onValueChange={handlePropertyTypeChange}
        >
          <SelectTrigger className="h-fit w-fit cursor-pointer rounded-lg border-2 border-[#4A5567] px-6 py-5 tracking-wide text-[#F2F9FE] data-placeholder:text-[#F2F9FE]">
            <SelectValue placeholder="Property type" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            className={clsx(outfit.className, "bg-[#4A5567]")}
          >
            <SelectGroup>
              <SelectItem
                value="all"
                className="cursor-pointer text-[#F2F9FE] focus:bg-[#F2F9FE]"
              >
                Property type
              </SelectItem>
              {validBedrooms.map((bedroom) => (
                <SelectItem
                  key={bedroom}
                  value={bedroom}
                  className="cursor-pointer text-[#F2F9FE] focus:bg-[#F2F9FE]"
                >
                  {bedroom.concat(bedroom === "1" ? " bedroom" : " bedrooms")}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </nav>
  );
};
