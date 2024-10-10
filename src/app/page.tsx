//import Image from "next/image"
import { FilterPageProps } from "./components/filter-page";
import FilterPage from "./components/filter-page";

export default async function Home() {
  const data = await fetch("https://rickandmortyapi.com/api/character", {
    next: { revalidate: 3600 },
  });
  const res = await data.json();
  const chars: FilterPageProps[] = res.results;
  console.log(chars);
  return <FilterPage chars={chars} />;
}
