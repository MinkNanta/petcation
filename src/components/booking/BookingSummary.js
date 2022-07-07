import { MapIcon } from '@heroicons/react/outline';
import { dashesToSlashes } from '../../utils/convertDate';
import checkIn from '../../assets/img/002-calendar-1.png';
import dog from '../../assets/img/dog.png';
import cat from '../../assets/img/cat.png';

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
        <img src={checkIn} alt="checkin" className="w-10 h-10 mr-5" />
        <p>
          Date
          <br />
          <span className="text-gray-500">
            {dashesToSlashes(checkInDate)} - {dashesToSlashes(checkOutDate)}
          </span>
        </p>
      </div>
      <div className="flex mb-5">
        <img
          src={petType === 'DOG' ? dog : cat}
          alt="checkin"
          className="w-10 h-10 mr-5"
        />

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
