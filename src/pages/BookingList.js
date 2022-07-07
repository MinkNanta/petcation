import axios from '../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import DashboardMenu from '../components/myhouse/components/DashboardMenu';
import TabContextProvider from '../contexts/TabContext';
import { AuthContext } from '../contexts/AuthContext';
import defaultHouse from '../assets/img/defaultHouse.png';
import { dashesToSlashes } from '../utils/convertDate';
import Spinner from '../common/Spinner';
import EmptyState from '../common/EmtpyState';

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const menus = ['upcoming', 'completed', 'canceled', 'all'];
  const [active, setActive] = useState(menus[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/bookings/guest');
        setBookings(res.data.bookings);
        console.log(res);

        // filter upcoming
        const curDate = new Date();
        const filtered = res.data.bookings.filter((el) => {
          const bookingDate = new Date(el.checkInDate);
          return bookingDate > curDate;
        });
        const newArr = filtered.sort(
          (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate),
        );
        await setFilteredBookings(newArr);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  useEffect(() => {
    let newArr;
    if (active === 'upcoming') {
      const curDate = new Date();
      const filtered = bookings.filter((el) => {
        const bookingDate = new Date(el.checkInDate);
        return bookingDate > curDate;
      });
      newArr = filtered.sort(
        (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate),
      );
    } else if (active === 'completed') {
      const curDate = new Date();
      const filtered = bookings.filter((el) => {
        const bookingDate = new Date(el.checkInDate);
        return bookingDate < curDate;
      });
      newArr = filtered.sort(
        (a, b) => new Date(b.checkInDate) - new Date(a.checkInDate),
      );
    } else if (active === 'canceled') {
      const filtered = bookings.filter((el) => {
        return el.status === 'CANCLE';
      });
      newArr = filtered.sort(
        (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate),
      );
    } else if (active === 'all') {
      newArr = bookings.sort(
        (a, b) => new Date(a.checkInDate) - new Date(b.checkInDate),
      );
    }
    setFilteredBookings(newArr);
  }, [active]);

  return (
    <>
      <div className="space-y-6 mr-20">
        <h4>Your reservations</h4>
        <TabContextProvider>
          <DashboardMenu active={active} setActive={setActive} menus={menus} />
        </TabContextProvider>
        {loading ? (
          <Spinner />
        ) : filteredBookings.length > 0 ? (
          <>
            {filteredBookings.map((el) => (
              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                  <div className="h-44 overflow-hidden rounded-2xl">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        el?.Bookinghouse?.image
                          ? JSON.parse(el?.Bookinghouse?.image)[0]
                          : defaultHouse
                      }
                    ></img>
                  </div>
                </div>
                <div className="col-span-3">
                  <h4>{el.Bookinghouse?.name}</h4>
                  <div className="mt-2 text-gray-400">
                    <p>
                      {dashesToSlashes(el?.checkInDate)} -{' '}
                      {dashesToSlashes(el?.checkOutDate)}
                    </p>
                    <p>
                      {el.Bookingpets?.length}{' '}
                      {el.Bookinghouse?.petType[0] +
                        el.Bookinghouse?.petType?.slice(1).toLowerCase() +
                        (el.Bookingpets?.length > 1 ? 's' : '')}
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      {el?.isIncludeFood ? el.Bookinghouse?.food : 'Owner food'}
                    </p>
                    <div className="mt-16">
                      <a href={`/booking/list/${el.id}`} className="underline">
                        Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <EmptyState
            title={
              active === 'all'
                ? 'You have no reservations'
                : 'You have no ' + active + ' reservations'
            }
            description=""
          />
        )}
      </div>
    </>
  );
}
