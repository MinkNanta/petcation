import { MapIcon } from "@heroicons/react/outline";

export default function HouseDetailsWithIcon({ title, details}) {
  return (
    <div className="flex mb-5">
      <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
      <p className="w-fit">
        {title}
        <br />
        <span className="text-gray-500">
         {details}
        </span>
      </p>
    </div>
  );
}
