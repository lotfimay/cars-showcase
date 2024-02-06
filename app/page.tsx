import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/api";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    make: searchParams.make || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isEmptyCars =
    !allCars || (Array.isArray(allCars) && allCars.length == 0);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home_text-container">
          <h1 className="text-4xl font-extrabold">Car catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        <div className="home__cars-wrapper">
          {isEmptyCars ? (
            <section>There is no cars to show</section>
          ) : (
            allCars.map((car: any) => <CarCard car={car} />)
          )}
        </div>
      </div>
    </main>
  );
}
