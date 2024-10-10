"use client";
import { useState } from "react";
import CharBlock from "./char-block";
export interface Location {
  name: string;
  url: string;
}
export interface FilterPageProps {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: object;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface FilterPageComponentProps {
  chars: FilterPageProps[];
}
type Status = "Alive" | "Dead" | null;
type Gender = "Male" | "Female" | null;
const FilterPage = ({ chars }: FilterPageComponentProps) => {
  console.log(chars);
  const [selectedStatus, setSelectedStatus] = useState<Status>(null);
  const [selectedGender, setSelectedGender] = useState<Gender>(null);
  const handleStatus = (status: Status) => {
    if (selectedStatus === status) {
      setSelectedStatus(null);
    } else {
      setSelectedStatus(status);
    }
  };
  const handleGender = (gender: Gender) => {
    if (selectedGender === gender) {
      setSelectedGender(null);
    } else {
      setSelectedGender(gender);
    }
  };
  const filteredChars = chars.filter((char) => {
    const statusMatch = selectedStatus ? char.status === selectedStatus : true;
    const genderMatch = selectedGender ? char.gender === selectedGender : true;
    return statusMatch && genderMatch;
  });

  return (
    <div className=" w-full min-h-screen">
      <main className="flex w-full min-h-screen bg-black space-x-10">
        <div className="flex flex-col w-32 bg-charcoal items-center pt-10 space-y-5">
          <h1 className="">Status</h1>
          <label className="flex justify-start">
            <input
              type="checkbox"
              checked={selectedStatus === "Alive"}
              className="form-checkbox h-5 w-5 text-green-600 "
              onChange={() => handleStatus("Alive")}
            />
            <span className="ml-2 text-white">Alive</span>
          </label>
          <label className="flex justify-center">
            <input
              type="checkbox"
              checked={selectedStatus === "Dead"}
              className="form-checkbox h-5 w-5 text-green-600"
              onChange={() => handleStatus("Dead")}
            />
            <span className="ml-2 text-white">Dead</span>
          </label>
          <h1 className="">Gender</h1>
          <label className="flex justify-center">
            <input
              type="checkbox"
              checked={selectedGender === "Male"}
              className="form-checkbox h-5 w-5 text-green-600"
              onChange={() => handleGender("Male")}
            />
            <span className="ml-2 text-white">Male</span>
          </label>
          <label className="flex justify-center">
            <input
              type="checkbox"
              checked={selectedGender === "Female"}
              className=" h-5 w-5 text-green-600 ml-4"
              onChange={() => handleGender("Female")}
            />
            <span className="ml-2 text-white">Female</span>
          </label>
        </div>

        <div className="flex flex-wrap w-full h-auto justify-start items-start pt-10 gap-6">
          {filteredChars.map((char: FilterPageProps) => (
            <CharBlock key={char.id} char={char} />
          ))}
        </div>
      </main>
    </div>
  );
};
export default FilterPage;
