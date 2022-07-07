import axios from '../config/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dashesToSlashes, getDiff } from '../utils/convertDate';
import Spinner from '../common/Spinner';
import defaultProtoPic from '../assets/img/defaultProtoPic.png';

export default function BookingListDetails() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        // setLoading(true);
        const res = await axios.get('/bookings/single/' + bookingId);
        console.log(res.data.booking);
        setBooking(res.data.booking);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  // set address
  let addressArr = [];
  booking.Bookinghouse.Host.address &&
    addressArr.push(booking.Bookinghouse.Host.address);
  booking.Bookinghouse.Host.subDistrict &&
    addressArr.push(booking.Bookinghouse.Host.subDistrict);
  booking.Bookinghouse.Host.district &&
    addressArr.push(booking.Bookinghouse.Host.district);
  booking.Bookinghouse.Host.province &&
    addressArr.push(booking.Bookinghouse.Host.province);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="space-y-6 mr-20">
          <h4>Booking ID: {booking?.id}</h4>
          <div className="flex flex-col gap-2">
            <div className="justify-between flex">
              <p>Check In/Out</p>
              <p className="text-gray-400">
                {dashesToSlashes(booking?.checkInDate)} -{' '}
                {dashesToSlashes(booking?.checkOutDate)}
              </p>
            </div>
            <div className="justify-between flex">
              <p>Amount</p>
              <p className="text-gray-400">
                {getDiff(booking?.checkInDate, booking?.checkOutDate)} Day
                {getDiff(booking?.checkInDate, booking?.checkOutDate) > 1
                  ? 's'
                  : ''}
              </p>
            </div>
            <div className="justify-between flex">
              <p>Total Pet</p>
              <p className="text-gray-400">
                {booking?.Bookingpets?.length}{' '}
                {booking?.House?.petType[0] +
                  booking?.House?.petType?.slice(1).toLowerCase() +
                  (booking?.Bookingpets?.length > 1 ? 's' : '')}
              </p>
            </div>
            <div className="justify-between flex">
              <p>Pet Food</p>
              <p className="text-gray-400">
                {booking?.isIncludeFood ? booking?.House?.food : 'Owner food'}
              </p>
            </div>
          </div>
          <div className="w-full border-t-2 border-gray-200 my-5"></div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <img
                className="rounded-full w-28 h-28"
                src={booking?.Bookinghouse?.Host?.profilePic || defaultProtoPic}
              ></img>
            </div>
            <div className="col-span-3">
              <h4>
                {booking?.Bookinghouse?.Host?.firstName}{' '}
                {booking?.Bookinghouse?.Host?.lastName}
              </h4>
              <table className="mt-2">
                <tr className="items">
                  <td>Phone</td>
                  <td className="text-gray-500 pl-2 flex items-end">
                    {booking?.Bookinghouse?.Host?.phoneNumber}
                  </td>
                </tr>
                <tr className="items">
                  <td>Email</td>
                  <td className="text-gray-500 pl-2 flex items-end">
                    {booking?.Bookinghouse?.Host?.email}
                  </td>
                </tr>
                <tr className="items">
                  <td className='align-top'><p>Address</p></td>
                  <td className="text-gray-500 pl-2 flex items-end">
                    {addressArr.length > 0 ? (
                      <>
                        {addressArr.join(', ')}{' '}
                        {booking?.Bookinghouse?.Host?.zipCode}
                      </>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="w-full border-t-2 border-gray-200 my-5"></div>
          {booking?.Bookingpets?.map((el) => (
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <img
                  className="rounded-full w-28 h-28"
                  src={el.petPic || defaultProtoPic}
                ></img>
              </div>
              <div className="col-span-3">
                <h4>{el?.name}</h4>
                <table className="mt-2">
                  <tr className="items">
                    <td>Type</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.type || 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Age</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.age
                        ? `${el.age?.split('.')[0]} Year ${
                            el.age?.split('.')[1]
                          } Month`
                        : 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Species</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.species || 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Note</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.note || 'N/A'}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
