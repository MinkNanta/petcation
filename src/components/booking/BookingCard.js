import { useContext, useEffect, useState } from 'react';
import Counter from '../../common/Counter';
import cat from '../../assets/img/cat.png';
import dog from '../../assets/img/dog.png';
import { Link } from 'react-router-dom';
import LoginForm from '../layout/auth/LoginForm';
import { AuthContext } from '../../contexts/AuthContext';

export default function BookingCard({
  price,
  petType,
  limit,
  foodPrice,
  setBookingInputs,
  bookingInputs,
  setNumberOfPets,
  numberOfPets,
  houseId,
}) {
  const [checked, setChecked] = useState(false);
  const [thisLimit, setThisLimit] = useState(1000);
  const [err, setErr] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    limit && setThisLimit(limit);
  }, []);

  // need to calculate nights from date inputs
  const [nights, setNights] = useState(0);

  const onDateChange = (e) => {
    const curDate = new Date();
    const selectedDate = new Date(e.target.value);

    if (e.target.id === 'checkInDate') {
      if (selectedDate - curDate > 0) {
        const newValue = { [e.target.id]: e.target.value };
        setBookingInputs((bookingInputs) => {
          return {
            ...bookingInputs,
            ...newValue,
          };
        });
      } else {
        setErr('Please select a day after today');
      }
    }

    if (e.target.id === 'checkOutDate') {
      const checkIn = new Date(bookingInputs.checkInDate);
      if (selectedDate - checkIn > 0) {
        const newValue = { [e.target.id]: e.target.value };
        setBookingInputs((bookingInputs) => {
          return {
            ...bookingInputs,
            ...newValue,
          };
        });
        const diff = Math.floor(
          (selectedDate - checkIn) / (1000 * 60 * 60 * 24),
        );
        setNights(diff);
        setErr(null);
      } else {
        setErr('Please select a day after your check in date');
      }
    }
  };

  const handleCheck = () => {
    setChecked((checked) => !checked);
    setBookingInputs((bookingInputs) => {
      return {
        ...bookingInputs,
        isIncludeFood: !bookingInputs.isIncludeFood,
      };
    });
  };

  const handelContinue = () => {};

  return (
    <div className="card w-96 bg-gray-100 p-5 inline-block">
      <div className="flex justify-between items-end">
        {petType === 'Cats' ? (
          <img src={cat}></img>
        ) : petType === 'Dogs' ? (
          <img src={dog}></img>
        ) : (
          <></>
        )}
        <h4>
          {price.toLocaleString('en-US')}
          <span className="text-x"> /night</span>
        </h4>
      </div>
      <div className="bg-white p-5 mt-5 rounded-2xl grid grid-cols-2">
        <div>
          <p>Check in</p>
          <input
            type="date"
            id="checkInDate"
            className="text-gray-500 w-11/12"
            value={bookingInputs.checkInDate}
            onChange={(e) => onDateChange(e)}
          />
        </div>
        <div className=" border-l-2 border-gray-300 pl-4">
          <p>Check out</p>
          <input
            type="date"
            id="checkOutDate"
            className={`text-gray-500 w-full ${
              bookingInputs.checkInDate === '' ? 'bg-gray-200 rounded-md' : null
            }`}
            onChange={(e) => onDateChange(e)}
            disabled={bookingInputs.checkInDate === '' ? true : false}
            value={bookingInputs.checkOutDate}
          />
        </div>
        {err && (
          <span className="label-text-alt text-red-400 col-span-2 mt-2">
            {err}
          </span>
        )}
      </div>
      <div className="flex justify-between items-end text-gray-500 mt-5">
        <p>Place for</p>
        <p>{petType}</p>
      </div>
      <div className="bg-white p-5 my-5 rounded-2xl">
        <div className="flex justify-between items-center">
          <p>
            Number
            {limit ? (
              <>
                <br />
                <span className="text-gray-500">Limit {limit} pets</span>
              </>
            ) : (
              <></>
            )}
          </p>
          <Counter
            setNumber={setNumberOfPets}
            number={numberOfPets}
            limit={thisLimit}
          />
        </div>
        {foodPrice ? (
          <>
            <div className="w-full border-t-2 border-gray-200 my-5"></div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                className="radio"
                onClick={handleCheck}
                checked={bookingInputs.isIncludeFood ? true : false}
              />
              <p className="text-gray-500">
                Include pet food {foodPrice.toLocaleString('en-US')} per night
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      {user ? (
        <Link
          to={
            bookingInputs.checkInDate !== '' ||
            bookingInputs.checkOutDate !== ''
              ? setErr('Required')
              : '/booking/create'
          }
          state={{ bookingInputs, numberOfPets, houseId }}
        >
          <button className="btn">Continue</button>
        </Link>
      ) : (
        <LoginForm
          className="bg-orange-500 rounded-2xl p-3 text-white flex gap-1 justify-center items-center"
          title="Sign In To Book"
        />
      )}
      <div className="card-body items-center text-center p-0 py-5">
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">
            {price.toLocaleString('en-US')} x {nights} nights x {numberOfPets}{' '}
            pets
          </p>
          <p className="text-end text-base text-gray-500">
            {(price * nights).toFixed(2).toLocaleString('en-US')}
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Food Service</p>
          <p className="text-end text-base text-gray-500">
            {(foodPrice * nights).toFixed(2).toLocaleString('en-US')}
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Service Fee (5%)</p>
          <p className="text-end text-base text-gray-500">
            {((price * nights + foodPrice * nights) * 0.05)
              .toFixed(2)
              .toLocaleString('en-US')}
          </p>
        </div>
        <div className="w-full border-t-2 border-gray-200 my-5"></div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-900">Total</p>
          <p className="text-end text-base text-gray-900">
            {((price * nights + foodPrice * nights) * 1.05)
              .toFixed(2)
              .toLocaleString('en-US')}
          </p>
        </div>
      </div>
    </div>
  );
}
