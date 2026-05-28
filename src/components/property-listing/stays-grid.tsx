import { SearchX } from "lucide-react";

import type { Stay } from "@/types/property-listing";

import { StayCard } from "./stay-card";

type Props = {
  stays: Stay[];
};

export const StaysGrid = ({ stays }: Props) => {
  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-medium text-[#F2F9FE]">Over 200 stays</h2>

      {stays.length === 0 && (
        <div>
          <div className="flex justify-center py-4">
            <SearchX color="#F2F9FE" size={100} />
          </div>
          <h4 className="text-center text-3xl leading-[normal] text-[#F2F9FE]">
            Items not found
          </h4>
        </div>
      )}

      {stays.length > 0 && (
        <div className="grid grid-cols-[minmax(0,357px)] justify-center gap-x-8 gap-y-18 sm:grid-cols-[repeat(2,minmax(0,357px))] lg:grid-cols-[repeat(3,minmax(0,357px))]">
          {stays.map((stay) => (
            <StayCard key={stay.id} stay={stay} />
          ))}
        </div>
      )}
    </section>
  );
};
