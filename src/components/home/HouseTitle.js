export default function HouseTitle({
  name,
  petType,
  price,
  sqft,
  roomType,
  location,
}) {
  let arr = [];
  petType && arr.push('For ' + petType);
  price && arr.push(price.toLocaleString('en-US') + ' per night');
  sqft && arr.push(sqft.toLocaleString('en-US') + ' sqft');
  roomType && arr.push(roomType);
  location && arr.push('At ' + location + ', Thailand');

  return (
    <div className="grid gap-2">
      <h2>{name}</h2>
      <p className="text-gray-500">{arr.join(' ・ ')}</p>
    </div>
  );
}
