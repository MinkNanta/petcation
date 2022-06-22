import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function BackNavigation({ title }) {
  return (
    <div>
      <p className="text-4xl font-semibold">
        <ChevronLeftIcon className="w-6 h-6 inline-block mr-5" />
        {title}
      </p>
    </div>
  );
}
