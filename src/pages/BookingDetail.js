import React, { useContext, useEffect, useState } from 'react';
import {
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/outline';

import Carousel from '../components/home/Carousel';
import HouseTitle from '../components/home/HouseTitle';
import HouseDetailsWithIcon from '../components/home/HouseDetailsWithIcon';
import HouseHighlight from '../components/home/HouseHighlight';
import BookingCard from '../components/booking/BookingCard';
import defaultProtoPic from '../assets/img/defaultProtoPic.png';

import { HouseContext } from '../contexts/HouseContext';
import { useParams } from 'react-router-dom';
import { getMonthAndYear, getDate7DaysFromNow } from '../utils/convertDate';
import { getHouseById } from '../api/house';
import { useError } from '../contexts/ErrorContext';

export default function BookingDetail() {
  // const { houseById, setParamsId } = useContext(HouseContext);
  const [houseById, setHouseById] = useState({});
  const [bookingInputs, setBookingInputs] = useState({
    checkInDate: '',
    checkOutDate: '',
    isIncludeFood: false,
  });
  const [numberOfPets, setNumberOfPets] = useState(1);
  const { id } = useParams();
  const { setError } = useError();

  console.log(houseById);

  // useEffect(() => {
  //   setParamsId(id);
  // }, []);

  useEffect(() => {
    const fetchHouseId = async () => {
      try {
        console.log(id);
        const res = await getHouseById(id);
        console.log(res.data);
        setHouseById(res.data);
      } catch (err) {
        setError(err.message);
        console.log(err);
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
    <div className="my-10 mx-20">
      {Object.keys(houseById).length !== 0 ? (
        <>
          {/* {houseById?.image && (
            <Carousel images={JSON.parse(houseById?.image)} />
          )} */}
          <div className="mt-10 mb-20 flex">
            <div className="mr-10 w-full">
              <HouseTitle
                name="Room name Cat Capsule by Minkminks"
                petType={
                  houseById?.petType
                    ? houseById?.petType[0] +
                      houseById?.petType.slice(1).toLowerCase() +
                      's'
                    : null
                }
                price={houseById?.price ? houseById?.price : null}
                // need to get room size
                sqft={houseById?.size ? houseById?.size : null}
                roomType={
                  houseById?.type
                    ? houseById?.type[0] +
                      houseById?.type.slice(1).toLowerCase()
                    : null
                }
                location={
                  houseById?.User?.province ? houseById?.User?.province : null
                }
              />
              <div className="w-full border-t-2 border-gray-200 my-10"></div>
              <HouseDetailsWithIcon
                title="Check in"
                details={
                  houseById?.checkInTime ? houseById?.checkInTime : 'N/A'
                }
              />
              <HouseDetailsWithIcon
                title="Check out"
                details={
                  houseById?.checkOutTime ? houseById?.checkOutTime : 'N/A'
                }
              />
              <HouseDetailsWithIcon
                title="Food for Pet"
                details={houseById?.petFood ? houseById?.petFood : 'N/A'}
              />
              <HouseDetailsWithIcon
                title="Daily schedule"
                details={
                  houseById?.dailySchedule ? houseById?.dailySchedule : 'N/A'
                }
              />
              <div className="w-full border-t-2 border-gray-200 my-10"></div>
              <div>
                <h2>Highlights</h2>
                <div className="mt-5 grid grid-cols-2 text-gray-500">
                  <div>
                    <HouseHighlight
                      isTrue={
                        houseById?.isPetFood ? houseById?.isPetFood : false
                      }
                      highlight="Pet Food"
                    />
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
                    <HouseHighlight
                      isTrue={
                        houseById?.isPetStaff ? houseById?.isPetStaff : false
                      }
                      highlight="Pet Staff"
                    />
                  </div>
                  <div>
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
              <div className="mt-5">
                <h2>Other</h2>
                {/* need to add other notes */}
                <p className="text-gray-500 mt-5">
                  Swimming Pool **BY APPOINTMENT ONLY**
                  <br />
                  <br />
                  Swimming your dog is a perfect activity for the young or old.
                  Swimming is a non-weight bearing activity that avoids all the
                  stresses and strains of exercising on hard ground.
                  <br />
                  <br />A rinse and dry off area is available which can be used
                  before or after swimming. Entrance fee of RM50 per dog per
                  entry includes free access to indoor park.
                  <br />
                  <br />
                  Our pool water is generated in salt water chlorination
                  process.
                </p>
              </div>
              <div className="w-full border-t-2 border-gray-200 my-10"></div>
              <div className="flex flex-row gap-5">
                <img
                  className="rounded-full w-20 h-20"
                  src={
                    houseById.User?.userPic
                      ? houseById.User?.userPic
                      : defaultProtoPic
                  }
                ></img>
                <div className="grid content-center">
                  <h6>
                    Hosted by {houseById.User?.firstName}{' '}
                    {houseById.User?.lastName}
                  </h6>
                  <p className="text-gray-500">
                    Joined in {getMonthAndYear(houseById.User?.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex text-gray-500 mt-5">
                <ShieldCheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                <p>Identity verified</p>
              </div>

              <div className="text-gray-500 mt-5">
                <p>Response rate: 100%</p>
                <p>Response time: within an hour</p>
              </div>

              <div className="bg-gray-100 p-5 mt-5 rounded-2xl flex text-gray-500">
                <ShieldExclamationIcon className="w-8 h-8 inline-block mr-5" />
                <p>
                  To protect your payment, never transfer money or communicate
                  outside of the Petcation website or app.
                </p>
              </div>
              <div className="mt-5">
                <h2>Cancellation policy</h2>
                <p className="text-gray-500 mt-5">
                  Free cancellation before {getDate7DaysFromNow()}. Review the
                  Host’s full cancellation policy which applies even if you
                  cancel for illness or disruptions caused by COVID-19.
                </p>
              </div>
            </div>
            <div>
              <BookingCard
                price={houseById?.price ? houseById?.price : 'N/A'}
                petType={
                  houseById?.petType
                    ? houseById?.petType[0] +
                      houseById?.petType.slice(1).toLowerCase() +
                      's'
                    : 'N/A'
                }
                limit={houseById?.limit ? houseById?.limit : null}
                foodPrice={houseById?.foodPrice ? houseById?.foodPrice : null}
                setBookingInputs={setBookingInputs}
                bookingInputs={bookingInputs}
                setNumberOfPets={setNumberOfPets}
                numberOfPets={numberOfPets}
                houseId={id}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="h-screen text-gray-500">House not found</div>
      )}
    </div>
  );
}
