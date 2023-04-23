import React, { useEffect, useState } from 'react';
import {
  CalendarIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/outline';

import Carousel from '../components/home/Carousel';
import HouseTitle from '../components/home/HouseTitle';
import HouseDetailsWithIcon from '../components/home/HouseDetailsWithIcon';
import HouseHighlight from '../components/home/HouseHighlight';
import BookingCard from '../components/booking/BookingCard';
import defaultProtoPic from '../assets/img/defaultProtoPic.png';

import { useParams } from 'react-router-dom';
import { getMonthAndYear, getDate7DaysFromNow } from '../utils/convertDate';
import { getHouseById } from '../api/house';
import { useError } from '../contexts/ErrorContext';
import calendar from '../assets/img/002-calendar-1.png';
import petFood from '../assets/img/003-bowl.png';
import checkIn from '../assets/img/006-enter.png';
import checkOut from '../assets/img/009-logout.png';
import mockHouse from '../mockupdata/mockHouse.json';

export default function BookingDetail() {
  // const { houseById, setParamsId } = useContext(HouseContext);
  const [houseById, setHouseById] = useState({ mockHouse });
  const [numberOfPets, setNumberOfPets] = useState(1);
  const { id } = useParams();
  const { setError } = useError();

  // useEffect(() => {
  //   setParamsId(id);
  // }, []);

  useEffect(() => {
    const fetchHouseId = async () => {
      try {
        const res = await getHouseById(id);
        console.log(res.data);
        setHouseById(res.data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchHouseId();
  }, []);

  // const images = [
  //   'https://api.lorem.space/image/car?w=800&h=300&hash=8B7BCDC2',
  //   'https://api.lorem.space/image/car?w=800&h=300&hash=500B67FB',
  //   'https://api.lorem.space/image/car?w=800&h=300&hash=A89D0DE6',
  //   'https://api.lorem.space/image/car?w=800&h=300&hash=225E6693',
  // ];

  return (
    <div className="mainContainer">
      {Object.keys(houseById).length !== 0 ? (
        <>
          <div className="rounded-2xl overflow-hidden h-[440px] w-full relative ">
            <div className="absolute w-full h-full bg-black opacity-0 hover:opacity-20"></div>
            <img
              src={
                'https://plus.unsplash.com/premium_photo-1664371207179-d4ea25479ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80'
              }
              alt="card"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-10 mb-20 flex">
            <div className="mr-10 w-full">
              <HouseTitle
                name={'Wheeler Army Airfield'}
                petType={'Cats'}
                price={380}
                // need to get room size
                sqft={'4'}
                roomType={'CAGE'}
                location={
                  'Tambon Khu Khot, Amphoe Lam Luk Ka, Chang Wat Pathum Thani 12130'
                }
              />
              <div className="w-full border-t-2 border-gray-200 my-10"></div>
              {/* <HouseDetailsWithIcon
                title="Check in"
                details={
                  houseById?.checkInTime ? houseById?.checkInTime : 'N/A'
                }
              /> */}

              <div className="flex mb-5">
                <img src={checkIn} alt="checkin" className="w-10 h-10 mr-5" />
                <p className="w-fit">
                  Check In
                  <br />
                  <span className="text-gray-500">
                    {houseById?.checkInTime ? houseById?.checkInTime : '11:00'}
                  </span>
                </p>
              </div>

              {/* <HouseDetailsWithIcon
                title="Check out"
                details={
                  houseById?.checkOutTime ? houseById?.checkOutTime : 'N/A'
                }
              /> */}

              <div className="flex mb-5">
                <img src={checkOut} className="w-10 h-10 mr-5" alt="checkout" />
                <p className="w-fit">
                  Check out
                  <br />
                  <span className="text-gray-500">
                    {houseById?.checkOutTime
                      ? houseById?.checkOutTime
                      : '12:00'}
                  </span>
                </p>
              </div>

              {/* <HouseDetailsWithIcon
                title="Food for Pet"
                details={houseById?.petFood ? houseById?.petFood : 'N/A'}
              /> */}

              <div className="flex mb-5">
                <img src={petFood} className="w-10 h-10 mr-5" alt="petfood" />
                <p className="w-fit">
                  Food for Pet
                  <br />
                  <span className="text-gray-500">
                    {houseById?.petFood ? houseById?.petFood : '120Thb'}
                  </span>
                </p>
              </div>

              {/* <img src={calendar}
                title="Daily schedule"
                details={
                  houseById?.dailySchedule ? houseById?.dailySchedule : 'N/A'
                }
              /> */}

              <div className="flex mb-5">
                {/* <CalendarIcon className="w-10 h-10 mr-4" /> */}
                <img
                  src={calendar}
                  className="w-[38px] h-[38px] mr-5 ml-1"
                  alt="calendar"
                />
                <p className="w-fit">
                  Daily schedule
                  <br />
                  <span className="text-gray-500">
                    {houseById?.dailySchedule
                      ? houseById?.dailySchedule
                      : '12 pm – 1 pm go out, exercise, or play.'}
                  </span>
                </p>
              </div>

              <div className="w-full border-t-2 border-gray-200 my-10"></div>
              <div className="mb-16">
                <h2>Highlights</h2>
                <div className="mt-5 grid grid-cols-2 text-gray-500 ">
                  <div className="space-y-2">
                    <HouseHighlight isTrue={true} highlight="Pet Food" />
                    <HouseHighlight
                      isTrue={
                        houseById?.isGrooming ? houseById?.isGrooming : false
                      }
                      highlight="Grooming"
                    />
                    <HouseHighlight
                      isTrue={
                        houseById?.isAirCondition
                          ? houseById?.isAirCondition
                          : false
                      }
                      highlight="Air Conditioning"
                    />
                    <HouseHighlight isTrue={true} highlight="Pet Staff" />
                  </div>
                  <div className="space-y-2">
                    <HouseHighlight
                      isTrue={
                        houseById?.isPetTraining
                          ? houseById?.isPetTraining
                          : false
                      }
                      highlight="Pet Training"
                    />
                    <HouseHighlight
                      isTrue={
                        houseById?.isPickupDropOff
                          ? houseById?.isPickupDropOff
                          : false
                      }
                      highlight="Pick up-Drop off"
                    />
                    <HouseHighlight
                      isTrue={
                        houseById?.isLitterChangedDaily
                          ? houseById?.isLitterChangedDaily
                          : false
                      }
                      highlight="Litter changed daily"
                    />
                    <HouseHighlight
                      isTrue={
                        houseById?.isAirFilter ? houseById?.isAirFilter : false
                      }
                      highlight="Air filter"
                    />
                  </div>
                </div>
              </div>
              {houseById?.other ? (
                <>
                  <div className="mt-5">
                    <h2>Other</h2>
                    {/* need to add other notes */}
                    <p className="text-gray-500 mt-5">{houseById?.other}</p>
                  </div>
                  <div className="w-full border-t-2 border-gray-200 my-10"></div>
                </>
              ) : (
                <></>
              )}
              <div className="flex flex-row gap-5">
                <img
                  className="rounded-full w-20 h-20"
                  src={
                    houseById.User?.userPic
                      ? houseById.User?.userPic
                      : defaultProtoPic
                  }
                  alt="user"
                ></img>
                <div className="grid content-center">
                  <h6>
                    Hosted by {houseById.User?.firstName}{' '}
                    {houseById.User?.lastName}
                  </h6>
                  <div className="flex gap-4">
                    <p className="text-gray-500">
                      Joined in {getMonthAndYear(houseById.User?.createdAt)}
                    </p>
                    <div className="flex text-gray-500">
                      <ShieldCheckIcon className="w-5 h-5 inline-block mr-2 self-center" />
                      <p>Identity verified</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-gray-500 mt-5">
                <p>Response rate: 100%</p>
                <p>Response time: within an hour</p>
              </div>

              <div className="bg-gray-100 p-5 mt-5 rounded-2xl flex text-gray-500">
                <ShieldExclamationIcon className="w-8 h-8 inline-block mr-5" />
                <p>
                  For security reasons, never transfer money or communicate
                  outside of the Petcation website.
                </p>
              </div>
              <div className="mt-16">
                <h2>Cancellation policy</h2>
                <p className="text-gray-500 mt-5">
                  Free cancellation before {getDate7DaysFromNow()}. Review the
                  Host’s full cancellation policy which applies even if you
                  cancel due to an illness or disruptions caused by COVID-19.
                </p>
              </div>
            </div>
            <div>
              <BookingCard
                price={'380'}
                petType={'Cats'}
                limit={2}
                foodPrice={120}
                setNumberOfPets={2}
                numberOfPets={2}
                houseById={1234}
              />
            </div>
          </div>
        </>
      ) : (
        <div className=" animate-pulse space-y-3 ">
          <div className="rounded-2xl bg-gray-200 h-[420px]"></div>
          <div className="space-y-3">
            <div className="rounded-2xl bg-gray-200  h-6"></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-4 col-span-2">
                <div className="rounded-2xl bg-gray-200  h-6"></div>
                <div className="rounded-2xl bg-gray-200  h-6"></div>
                <div className="rounded-2xl bg-gray-200  h-6"></div>
                <div className="rounded-2xl bg-gray-200  h-6"></div>
                <div className="rounded-2xl bg-gray-200  h-6"></div>
                <div className="rounded-2xl bg-gray-200  h-6"></div>
                <div className="rounded-2xl bg-gray-200  h-6"></div>
              </div>

              <div className="">
                <div className="rounded-2xl bg-gray-200  h-[260px]"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
