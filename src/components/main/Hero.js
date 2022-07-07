import SearchInput from './SearchInput';

export default function Hero() {
  return (
    <div className="backgroundHero h-[60vh]">
      <div className="h-2/5"></div>
      <div className="mainContainer h-full space-y-2">
        <h2 className=" text-white text-center m-auto">
          Find the Perfect Stay for Your Pet.
        </h2>
        <div className="flex justify-between items-center  ">
          <div className="w-[80%] mx-auto">
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  );
}
