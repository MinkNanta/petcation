import { CheckIcon, XIcon } from "@heroicons/react/outline";

export default function HouseHighlight({ isTrue, highlight }) {
  return (
    <div className="flex">
      {isTrue ? (
        <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
      ) : (
        <XIcon className="w-5 h-5 inline-block mr-5 self-center" />
      )}
      <p>{highlight}</p>
    </div>
  );
}
