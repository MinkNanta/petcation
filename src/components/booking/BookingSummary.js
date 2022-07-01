import { MapIcon } from '@heroicons/react/outline';
import { dashesToSlashes } from '../../utils/convertDate';

export default function BookingSummary({
  checkInDate,
  checkOutDate,
  numberOfPets,
  isIncludeFood,
  petType,
}) {
  return (
    <>
      <div className="flex mb-5">
        <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
        <p>
          Date
          <br />
          <span className="text-gray-500">
            {dashesToSlashes(checkInDate)} - {dashesToSlashes(checkOutDate)}
          </span>
        </p>
      </div>
      <div className="flex mb-5">
        <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
        <p>
          Pet
          <br />
          <span className="text-gray-500">
            {numberOfPets} {petType[0] + petType.slice(1).toLowerCase() + 's'}{' '}
            {isIncludeFood &&
              ` with ${petType[0] + petType.slice(1).toLowerCase()} Food`}
          </span>
        </p>
      </div>
    </>
  );
}
