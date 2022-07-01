import { ChevronLeftIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export default function BackNavigation({ title, houseId }) {
  return (
    <div>
      <a href={`/booking/${houseId}`}>
        <p className="text-4xl font-semibold">
          <ChevronLeftIcon className="w-6 h-6 inline-block mr-5" />
          {title}
        </p>
      </a>
    </div>
  );
}
