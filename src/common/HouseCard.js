export default function HouseCard({
  houseName,
  img,
  reviews,
  price,
  nights,
  foodPrice,
  serviceFee,
  isIncludeFood,
  numberOfPets,
}) {
  return (
    <div className="card w-96 bg-gray-100 p-5 inline-block">
      <p className="text-2xl font-medium">{houseName}</p>
      <figure className="mt-5">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center p-0 py-5">
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-x font-medium">Price Details</p>
          <p className="text-end text-base text-gray-500">{reviews} reviews</p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">
            {price.toLocaleString('en-US')} x {nights} nights x {numberOfPets}{' '}
            pets
          </p>
          <p className="text-end text-base text-gray-500">
            {(price * nights * numberOfPets).toLocaleString('en-US', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Food Service</p>
          <p className="text-end text-base text-gray-500">
            {isIncludeFood
              ? (foodPrice * nights * numberOfPets).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : '0.00'}
          </p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Service Fee (5%)</p>
          <p className="text-end text-base text-gray-500">
            {isIncludeFood
              ? (
                  (price * nights + foodPrice * nights) *
                  numberOfPets *
                  0.05
                ).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : (price * nights * numberOfPets * 0.05).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </p>
        </div>
        <div className="w-full border-t-2 border-gray-200 my-5"></div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-900">Total</p>
          <p className="text-end text-base text-gray-900">
            {isIncludeFood
              ? (
                  (price * nights + foodPrice * nights) *
                  numberOfPets *
                  1.05
                ).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : (price * nights * numberOfPets * 1.05).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </p>
        </div>
      </div>
    </div>
  );
}
