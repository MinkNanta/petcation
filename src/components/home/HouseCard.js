export default function HouseCard({
  houseName,
  img,
  reviews,
  price,
  nights,
  foodPrice,
  serviceFee,
}) {
  return (
    <div class="card w-96 bg-gray-100 p-5 inline-block">
      <p className="text-2xl font-medium">{houseName}</p>
      <figure className="mt-5">
        <img src={img} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center p-0 py-5">
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-x font-medium">Price Details</p>
          <p className="text-end text-base text-gray-500">{reviews} reviews</p>
        </div>
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
            {(price * nights + foodPrice + serviceFee).toLocaleString("en-US")}
          </p>
        </div>
      </div>
    </div>
  );
}
