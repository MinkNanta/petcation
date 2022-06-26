export default function HouseTitle({
  name,
  petType,
  price,
  sqft,
  roomType,
  location,
}) {
  return (
    <div className="grid gap-2">
      <h2>{name}</h2>
      <p className="text-gray-500">
        For {petType} ・ {price.toLocaleString("en-US")} per night ・{" "}
        {sqft.toLocaleString("en-US")} sqft ・ {roomType} ・At {location},
        Thailand
      </p>
    </div>
  );
}
