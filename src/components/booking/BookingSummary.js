import { MapIcon } from "@heroicons/react/outline";

export default function BookingSummary() {
  return (
    <>
      <div className="flex mb-5">
        <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
        <p>
          Date
          <br />
          <span className="text-gray-500">6/24/2022 - 6/26/2022</span>
        </p>
      </div>
      <div className="flex mb-5">
        <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
        <p>
          Pet
          <br />
          <span className="text-gray-500">2 Cats with Pet Food</span>
        </p>
      </div>
    </>
  );
}
