import { FilterPageProps } from "./filter-page";
import Image from "next/image";
const CharBlock = ({ char }: { char: FilterPageProps }) => {
  return (
    <div className="flex h-32 w-72 bg-charcoal">
      <div className="h-32 w-32 bg-charcoal">
        <Image src={char.image} alt={char.name} width={128} height={128} />
      </div>
      <div className="h-32 w-40 bg-charcoal space-y-2">
        <div className="">
          <h2 className="flex justif-start pl-2">{char.name}</h2>
          <div className="flex justify-start pl-2 items-center space-x-2">
            {char.status === "Alive" ? (
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            ) : (
              <div className="w-3 h-3 bg-red-500 rounded-full" />
            )}
            <p>{char.status}</p>
            <p>{char.species}</p>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start pl-2">
          <h2 className="justify-start">Last Known Location</h2>
          <p className="justify-start">{char.location.name}</p>
        </div>
      </div>
    </div>
  );
};
export default CharBlock;
