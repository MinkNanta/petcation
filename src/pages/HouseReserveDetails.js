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

  console.log(bookingId);

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
  booking?.Bookingcustomer?.address &&
    addressArr.push(booking.Bookingcustomer.address);
  booking?.Bookingcustomer?.subDistrict &&
    addressArr.push(booking.Bookingcustomer.subDistrict);
  booking?.Bookingcustomer?.district &&
    addressArr.push(booking.Bookingcustomer.district);
  booking?.Bookingcustomer?.province &&
    addressArr.push(booking.Bookingcustomer.province);
  console.log(addressArr);

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
                {booking?.Bookinghouse?.petType[0] +
                  booking?.Bookinghouse?.petType?.slice(1).toLowerCase() +
                  (booking?.Bookingpets?.length > 1 ? 's' : '')}
              </p>
            </div>
            <div className="justify-between flex">
              <p>Pet Food</p>
              <p className="text-gray-400">
                {booking?.isIncludeFood
                  ? booking?.Bookinghouse?.food
                  : 'Owner food'}
              </p>
            </div>
          </div>
          <div className="w-full border-t-2 border-gray-200 my-5"></div>
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <img
                className="rounded-full w-28 h-28"
                src={booking?.Bookingcustomer?.profilePic || defaultProtoPic}
              ></img>
            </div>
            <div className="col-span-3">
              <h4>
                {booking?.Bookingcustomer?.firstName}{' '}
                {booking?.Bookingcustomer?.lastName}
              </h4>
              <table className="mt-2">
                <tr className="items">
                  <td>Phone</td>
                  <td className="text-gray-500 pl-2 flex items-end">
                    {booking?.Bookingcustomer?.phoneNumber}
                  </td>
                </tr>
                <tr className="items">
                  <td>Email</td>
                  <td className="text-gray-500 pl-2 flex items-end">
                    {booking?.Bookingcustomer?.email}
                  </td>
                </tr>
                <tr className="items">
                  <td className="align-top">
                    <p>Address</p>
                  </td>
                  <td className="text-gray-500 pl-2 flex items-end">
                    {addressArr?.length > 0 ? (
                      <>
                        {addressArr.join(', ')}{' '}
                        {booking.Bookingcustomer?.zipCode}
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
                  src={el?.petPic || defaultProtoPic}
                ></img>
              </div>
              <div className="col-span-3">
                <h4>{el?.name}</h4>
                <table className="mt-2">
                  <tr className="items">
                    <td>Type</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el?.type || 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Age</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el?.age
                        ? `${el?.age?.split('.')[0]} Year ${
                            el?.age?.split('.')[1]
                          } Month`
                        : 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Species</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el?.species || 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Note</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el?.note || 'N/A'}
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
