import { type Metadata } from "next";
import { Outfit } from "next/font/google";

import { getStaysList } from "@/actions/property-listing";
import { FilterBar } from "@/components/property-listing/filter-bar";
import { HeroSection } from "@/components/property-listing/hero-section";
import { StaysGrid } from "@/components/property-listing/stays-grid";
import { filterStays } from "@/utils/property-listing/filter-stays";

export const metadata: Metadata = {
  title: "Property Listing",
  description: "Property Listing Challenge from devchallenges.io",
};

const outfit = Outfit({
  subsets: ["latin"],
});

type Props = {
  searchParams?: Promise<{
    locations?: string;
    superhost?: string;
    bedrooms?: string;
  }>;
};

export default async function PropertyListingPage(props: Props) {
  const searchParams = await props.searchParams;
  const staysList = await getStaysList();
  const stays = filterStays(staysList, searchParams);

  return (
    <main className={`${outfit.className} min-h-screen bg-[#121826]`}>
      <HeroSection />

      <div className="mx-auto w-full max-w-7xl px-10 pb-10 xl:px-18 xl:pb-18">
        <FilterBar />

        <StaysGrid stays={stays} />
      </div>
    </main>
  );
}
