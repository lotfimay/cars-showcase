import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/api";

export default async function Home() {
  const allCars = await fetchCars();

  console.log(allCars);

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
            <CustomFilter />
            <CustomFilter />
          </div>
        </div>
        <div className="home__cars-wrapper">
          {isEmptyCars ? (
            <section>There is no cars to show</section>
          ) : (
            allCars.map((car : any) => (
              <CarCard car={car} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
