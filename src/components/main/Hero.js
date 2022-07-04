import SearchInput from './SearchInput';

export default function Hero() {
  return (
<<<<<<< HEAD
    <div className="relative h-[90vh] overflow-hidden z-0">
      <div className="w-screen top-0">
        <img src={hero} alt="hero" className="w-full" />
      </div>
      <div className="top-0 absolute w-screen h-[90vh]">
        <div className="mainContainer h-full flex flex-col mt-40 content-center">
          <h1 className="text-6xl text-white">
            Find the <span className="text-orange-500">Perfect</span> <br />
            Stay for Your Pet.
          </h1>
          <Input />
=======
    <div className="backgroundHero h-[60vh]">
      <div className="mainContainer h-full pt-48 space-y-2">
        <h2 className=" text-white text-center m-auto">
          Find Perfect Place for Your Pet.
        </h2>
        <div className="flex justify-between items-center  ">
          <div className="w-[80%] mx-auto">
            <SearchInput />
          </div>
>>>>>>> common_ui
        </div>
      </div>
    </div>
  );
}
