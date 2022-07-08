import React, { useEffect, useState } from 'react';
import DashboardMenu from '../components/myhouse/components/DashboardMenu';
import EmptyState from '../common/EmtpyState';
import CardList from '../common/CardList';

import cardItem from '../assets/mockup/MOCK_DATA_CARDLIST.json';
import { useTab } from '../contexts/TabContext';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';
import { Link } from 'react-router-dom';
import TitleHeder from '../common/TitleHeder';
import axios from '../config/axios';
import Spinner from '../common/Spinner';
import defaultProtoPic from '../assets/img/defaultProtoPic.png';
import { dashesToSlashes } from '../utils/convertDate';

export default function HouseReserve() {
  const [empty, SetEmpty] = useState(true);
  const { user } = useAuth();

  const menus = ['upcoming', 'completed', 'all'];
  const [active, setActive] = useState(menus[0]);
  const [loading, setLoading] = useState(false);

  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  const { houseByUserID, getHouseByUser } = useHouse();
  useEffect(() => {
    getHouseByUser();
  }, [user]);

  console.log(filteredBookings);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/bookings/host');
        console.log(res.data.bookings);
        setBookings(res.data.bookings);

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
    <div className="space-y-6">
      <TitleHeder title="Your reservations" />

      {houseByUserID.length < 1 ? (
        <EmptyState
          title="Become a host"
          description="Easy step to become a host."
        >
          <Link className="btn-text-line" to="/house/main">
            Become a host
          </Link>
        </EmptyState>
      ) : loading ? (
        <Spinner />
      ) : filteredBookings.length > 0 ? (
        <>
          <DashboardMenu active={active} setActive={setActive} menus={menus} />
          {filteredBookings.map((el) => (
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <div className="h-44 overflow-hidden rounded-2xl">
                  <img
                    alt="filter"
                    className="w-full h-full object-cover"
                    src={el?.Bookingcustomer?.user_pic || defaultProtoPic}
                  ></img>
                </div>
              </div>
              <div className="col-span-3">
                <h4>
                  {el?.Bookingcustomer?.firstName}{' '}
                  {el?.Bookingcustomer?.lastName}
                </h4>
                <div className="mt-2 text-gray-400">
                  <p>
                    {dashesToSlashes(el?.checkInDate)} -{' '}
                    {dashesToSlashes(el?.checkOutDate)}
                  </p>
                  <p>
                    {el?.Bookingpets?.length}{' '}
                    {el?.Bookinghouse?.petType[0] +
                      el?.Bookinghouse?.petType?.slice(1).toLowerCase() +
                      (el?.Bookingpets?.length > 1 ? 's' : '')}
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    {el?.isIncludeFood ? el?.Bookinghouse?.food : 'Owner food'}
                  </p>
                  <Link
                    to={`/house/reserve/${el.id}`}
                    className="btn-text-line"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <DashboardMenu active={active} setActive={setActive} menus={menus} />

          <EmptyState
            title={
              active === 'all'
                ? 'You have no reservations'
                : 'You have no ' + active + ' reservations'
            }
            description=""
          />
        </>
      )}
    </div>
  );
}
