import { CheckIcon, XIcon } from '@heroicons/react/outline';

export default function HouseHighlight({ isTrue, highlight }) {
  return (
    <div className="flex">
      {isTrue === true ? (
        <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
      ) : isTrue === false ? (
        <XIcon className="w-5 h-5 inline-block mr-5 self-center" />
      ) : (
        <div className="w-5 h-5 inline-block mr-5"></div>
      )}
      <p>{highlight}</p>
    </div>
  );
}
