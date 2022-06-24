import { useState } from "react";
import Counter from "../../common/Counter";
import cat from "../../assets/img/cat.png";
import dog from "../../assets/img/dog.png";

export default function BookingCard({
  price,
  petType,
  limit,
  foodPrice,
  serviceFee,
}) {
  const [checked, setChecked] = useState(false);

  // need to calculate nights from date inputs
  const [nights, setNights] = useState(2);

  return (
    <div class="card w-96 bg-gray-100 p-5 inline-block">
      <div className="flex justify-between items-end">
        {petType === "Cats" ? (
          <img src={cat}></img>
        ) : petType === "Dogs" ? (
          <img src={dog}></img>
        ) : (
          <></>
        )}
        <h4>
          {price.toLocaleString("en-US")}
          <span className="text-x"> /night</span>
        </h4>
      </div>
      <div className="bg-white p-5 mt-5 rounded-2xl grid grid-cols-2">
        <div>
          <p>Check in</p>
          <input type="date" className="text-gray-500 w-11/12" />
        </div>
        <div className=" border-l-2 border-gray-300 pl-4">
          <p>Check out</p>
          <input type="date" className="text-gray-500 w-full" />
        </div>
      </div>
      <div className="flex justify-between items-end text-gray-500 mt-5">
        <p>Place for</p>
        <p>{petType}</p>
      </div>
      <div className="bg-white p-5 mt-5 rounded-2xl">
        <div className="flex justify-between">
          <p>
            Number
            <br />
            <span className="text-gray-500">Limit {limit} pets</span>
          </p>
          <Counter />
        </div>
        <div class="w-full border-t-2 border-gray-200 my-5"></div>
        <div className="flex gap-2">
          <input
            type="radio"
            name="radio-1"
            class="radio"
            onClick={() => setChecked((checked) => !checked)}
            checked={checked ? true : false}
          />
          <p className="text-gray-500">
            Include pet food {foodPrice.toLocaleString("en-US")} per night
          </p>
        </div>
      </div>
      <button className="btn mt-5">Continue</button>
      <div class="card-body items-center text-center p-0 py-5">
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">
            {price.toLocaleString("en-US")} x {nights} nights
          </p>
          <p className="text-end text-base text-gray-500">
            {(price * nights).toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Food Service</p>
          <p className="text-end text-base text-gray-500">
            {(foodPrice * nights).toLocaleString("en-US")}
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Service Fee</p>
          <p className="text-end text-base text-gray-500">
            {serviceFee.toLocaleString("en-US")}
          </p>
        </div>
        <div class="w-full border-t-2 border-gray-200 my-5"></div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-900">Total</p>
          <p className="text-end text-base text-gray-900">
            {(price * nights + foodPrice * nights + serviceFee).toLocaleString(
              "en-US"
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
