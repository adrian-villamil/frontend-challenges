import Image from "next/image";

import type { Stay } from "@/types/property-listing";

type Props = {
  stay: Stay;
};

export const StayCard = ({ stay }: Props) => {
  return (
    <div className="relative">
      {stay.superhost && (
        <span className="absolute top-2 left-2 rounded-2xl bg-[#20293A] px-4 py-1 text-xs text-[#F2F9FE]">
          Superhost ⭐
        </span>
      )}

      <div className="overflow-hidden rounded-t-xl">
        <Image
          src={stay.image}
          alt={stay.title}
          width={358}
          height={200}
          loading="lazy"
        />
      </div>

      <div className="divide-y divide-[#4A5567] rounded-b-xl border-x border-b border-[#4A5567] px-5">
        <div className="pt-5">
          <div className="space-y-2">
            <h4 className="leading-[normal] font-bold text-[#F2F9FE]">
              {stay.title}
            </h4>

            <p className="text-sm font-light tracking-wide text-[#F2F9FE]">
              {stay.description}
            </p>
          </div>

          <div className="flex gap-4 py-4">
            <div className="flex items-center gap-1">
              <Image
                src="/property-listing/Home_duotone.svg"
                alt="home icon"
                width={24}
                height={24}
                loading="lazy"
              />

              <span className="text-sm text-[#F2F9FE]">
                {stay.capacity.bedroom} bedroom
              </span>
            </div>

            <div className="flex items-center gap-1">
              <Image
                src="/property-listing/User_alt_duotone.svg"
                alt="user icon"
                width={24}
                height={24}
                loading="lazy"
              />

              <span className="text-sm text-[#F2F9FE]">
                {stay.capacity.people} guests
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between py-5">
          <div className="flex items-end">
            <span className="text-xl text-[#F2F9FE]">${stay.price}</span>
            <span className="font-light text-[#F2F9FE]">/night</span>
          </div>

          <div className="flex items-center gap-1">
            <Image
              src="/property-listing/Starfill.svg"
              alt="star icon"
              width={24}
              height={24}
              loading="lazy"
            />

            <span className="text-[#F2F9FE]">{stay.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
