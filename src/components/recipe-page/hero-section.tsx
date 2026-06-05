import clsx from "clsx";

export const HeroSection = () => {
  return (
    <section className="px-3 pt-3 pb-8">
      <div
        className={clsx(
          "relative h-78.75 w-full rounded-xl bg-[url('/recipe-page/hero-image.jpg')] bg-cover bg-top bg-no-repeat md:h-105",
          "before:absolute before:top-0 before:right-0 before:h-full before:w-7/10 before:bg-[url('/recipe-page/hero-text.png')] before:bg-contain before:bg-left before:bg-no-repeat md:before:w-1/2 md:before:bg-auto",
        )}
      />
    </section>
  );
};
