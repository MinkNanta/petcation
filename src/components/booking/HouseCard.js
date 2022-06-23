export default function HouseCard() {
  return (
    <div class="card w-96 bg-gray-100 p-5 inline-block">
      <p className="text-2xl font-medium">Room name Cat Capsule by Minkminks</p>
      <figure className="mt-5">
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center p-0 py-5">
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-x font-medium">Price Details</p>
          <p className="text-end text-base text-gray-500">4 reviews</p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">
            10,000 x 2 nights
          </p>
          <p className="text-end text-base text-gray-500">20,000</p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Food Service</p>
          <p className="text-end text-base text-gray-500">20,000</p>
        </div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-500">Service Fee</p>
          <p className="text-end text-base text-gray-500">20,000</p>
        </div>
        <div class="w-full border-t-2 border-gray-200 my-5"></div>
        <div className="w-full flex justify-between items-end">
          <p className="text-start text-base text-gray-900">Total</p>
          <p className="text-end text-base text-gray-900">60,000</p>
        </div>
      </div>
    </div>
  );
}
