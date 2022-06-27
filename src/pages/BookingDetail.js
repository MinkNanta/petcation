import React from 'react';
import {
  MapIcon,
  CheckIcon,
  XIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/outline';
import Carousel from '../components/home/Carousel';
import HouseTitle from '../components/home/HouseTitle';
import HouseDetailsWithIcon from '../components/home/HouseDetailsWithIcon';
import HouseHighlight from '../components/home/HouseHighlight';
import BookingCard from '../components/booking/BookingCard';

export default function BookingDetail() {
  const images = [
    'https://api.lorem.space/image/car?w=800&h=300&hash=8B7BCDC2',
    'https://api.lorem.space/image/car?w=800&h=300&hash=500B67FB',
    'https://api.lorem.space/image/car?w=800&h=300&hash=A89D0DE6',
    'https://api.lorem.space/image/car?w=800&h=300&hash=225E6693',
  ];

  return (
    <div className="my-10 mx-20">
      <Carousel images={images} />
      <div className="mt-10 mb-20 flex">
        <div className="mr-10 w-full">
          <HouseTitle
            name="Room name Cat Capsule by Minkminks"
            petType="Cats"
            price={350}
            sqft={16}
            roomType="Capsule"
            location="Nakhon Na Yok"
          />
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <HouseDetailsWithIcon
            title="Check in"
            details="Check-in time (Daily except Tuesday) 10am to 5pm. Tuesdays (check-in by appointment only)"
          />
          <HouseDetailsWithIcon
            title="Check out"
            details="Check-out time (Daily except Tuesday) 10am to 5pm. If picked up after 5pm, there will be an additional night
            charge."
          />
          <HouseDetailsWithIcon
            title="Food for Pet"
            details="Hill's, Royal Canin"
          />
          <HouseDetailsWithIcon
            title="Daily schedule"
            details=" Breakfast: 10.30am
            Snack: 2pm
            Dinner: 6pm
            Playtime: 11.30am till 5.30pm"
          />
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <div>
            <h2>Highlights</h2>
            <div className="mt-5 grid grid-cols-2 text-gray-500">
              <div>
                <HouseHighlight isTrue={true} highlight="Pet Food" />
                <HouseHighlight isTrue={true} highlight="Grooming" />
                <HouseHighlight isTrue={true} highlight="Air Conditioning" />
                <HouseHighlight isTrue={true} highlight="Pet Staff" />
              </div>
              <div>
                <HouseHighlight isTrue={false} highlight="Pet Training" />
                <HouseHighlight isTrue={true} highlight="Pick up-Drop off" />
                <HouseHighlight
                  isTrue={true}
                  highlight="Litter changed daily"
                />
                <HouseHighlight isTrue={true} highlight="Air filter" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2>Other</h2>
            <p className="text-gray-500 mt-5">
              Swimming Pool **BY APPOINTMENT ONLY**
              <br />
              <br />
              Swimming your dog is a perfect activity for the young or old.
              Swimming is a non-weight bearing activity that avoids all the
              stresses and strains of exercising on hard ground.
              <br />
              <br />A rinse and dry off area is available which can be used
              before or after swimming. Entrance fee of RM50 per dog per entry
              includes free access to indoor park.
              <br />
              <br />
              Our pool water is generated in salt water chlorination process.
            </p>
          </div>
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <div className="flex flex-row gap-5">
            <img
              className="rounded-full w-20 h-20"
              src="https://api.lorem.space/image/car?w=100&h=100&hash=8B7BCDC2"
            ></img>
            <div className="grid content-center">
              <h6>Hosted by Panumkormn</h6>
              <p className="text-gray-500">Joined in April 2017</p>
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
              Free cancellation before &#123;Jun 23&#125;. Review the Host’s
              full cancellation policy which applies even if you cancel for
              illness or disruptions caused by COVID-19.
            </p>
          </div>
        </div>
        <div>
          <BookingCard
            price={350}
            petType="Cats"
            limit={3}
            foodPrice={350}
            serviceFee={200}
          />
        </div>
      </div>
    </div>
  );
}
