import { validBedrooms, validLocations } from "@/constants/property-listing";
import type { Stay } from "@/types/property-listing";

type SearchParams =
  | {
      locations?: string;
      superhost?: string;
      bedrooms?: string;
    }
  | undefined;

export const filterStays = (staysList: Stay[], searchParams: SearchParams) => {
  if (!searchParams) return staysList;

  const { locations, superhost, bedrooms } = searchParams;

  let stays = staysList;

  if (locations) {
    stays = stays.filter((stay) =>
      locations
        .split(",")
        .filter((stay) => validLocations.includes(stay))
        .includes(stay.location),
    );
  }

  if (superhost) {
    stays = stays.filter((stay) => stay.superhost);
  }

  if (bedrooms && validBedrooms.includes(bedrooms)) {
    stays = stays.filter((stay) => stay.capacity.bedroom === +bedrooms);
  }

  return stays;
};
