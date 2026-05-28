'use server';

import { BASE_URL } from "@/constants/property-listing";
import type { Stay } from "@/types/property-listing";

export const getStaysList = async (): Promise<Stay[]> => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  return response.json();
};
