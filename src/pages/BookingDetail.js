import React, { useState } from "react";
import {
  MapIcon,
  CheckIcon,
  XIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/outline";

export default function BookingDetail() {
  const [activePic, setActivePic] = useState("pic1");

  return (
    <div className="my-10 mx-20">
      <div class="carousel w-full h-96 rounded-2xl">
        <div id="pic1" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=300&hash=8B7BCDC2"
            className="w-full object-cover"
          />
        </div>
        <div id="pic2" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=300&hash=500B67FB"
            class="w-full"
          />
        </div>
        <div id="pic3" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=300&hash=A89D0DE6"
            class="w-full"
          />
        </div>
        <div id="pic4" class="carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=300&hash=225E6693"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2 relative">
        <div className="absolute bottom-8 flex flex-row">
          <a
            href="#pic1"
            className={`w-3 h-3 rounded-full ${
              activePic === "pic1" ? "bg-orange-500" : "bg-white"
            }`}
            onClick={() => setActivePic("pic1")}
          ></a>
          <div className="w-3"></div>
          <a
            href="#pic2"
            className={`w-3 h-3 rounded-full ${
              activePic === "pic2" ? "bg-orange-500" : "bg-white"
            }`}
            onClick={() => setActivePic("pic2")}
          ></a>
          <div className="w-3"></div>
          <a
            href="#pic3"
            className={`w-3 h-3 rounded-full ${
              activePic === "pic3" ? "bg-orange-500" : "bg-white"
            }`}
            onClick={() => setActivePic("pic3")}
          ></a>
          <div className="w-3"></div>
          <a
            href="#pic4"
            className={`w-3 h-3 rounded-full ${
              activePic === "pic4" ? "bg-orange-500" : "bg-white"
            }`}
            onClick={() => setActivePic("pic4")}
          ></a>
        </div>
      </div>
      <div className="mt-10 mb-20 flex">
        <div className="mr-10 w-full">
          <div className="grid gap-2">
            <h2>Room name Cat Capsule by Minkminks</h2>
            <p className="text-gray-500">
              For Cat ・ 350 per night ・ 16 sqft ・ Capsule ・At Nakhon Na Yok,
              Thailand
            </p>
          </div>
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <div className="flex mb-5">
            <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
            <p>
              Check in
              <br />
              <span className="text-gray-500">
                Check-in time (Daily except Tuesday) 10am to 5pm.
                <br />
                Tuesdays (check-in by appointment only)
              </span>
            </p>
          </div>
          <div className="flex mb-5">
            <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
            <p>
              Check out
              <br />
              <span className="text-gray-500">
                Check-out time (Daily except Tuesday) 10am to 5pm.
                <br />
                If picked up after 5pm, there will be an additional night
                charge.
              </span>
            </p>
          </div>
          <div className="flex mb-5">
            <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
            <p>
              Food for Pet
              <br />
              <span className="text-gray-500">Hill's, Royal Canin</span>
            </p>
          </div>
          <div className="flex mb-5">
            <MapIcon className="w-10 h-10 inline-block mr-5 self-center" />
            <p>
              Daily schedule
              <br />
              <span className="text-gray-500">
                Breakfast: 10.30am
                <br />
                Snack: 2pm
                <br />
                Dinner: 6pm
                <br />
                Playtime: 11.30am till 5.30pm
              </span>
            </p>
          </div>
          <div class="w-full border-t-2 border-gray-200 my-10"></div>
          <div>
            <h2>Highlights</h2>
            <div className="mt-5 grid grid-cols-2 text-gray-500">
              <div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Pet Food</p>
                </div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Grooming</p>
                </div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Air Conditioning</p>
                </div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Pet Staff</p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <XIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Pet Training</p>
                </div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Pick up-Drop off</p>
                </div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Litter changed daily</p>
                </div>
                <div className="flex">
                  <CheckIcon className="w-5 h-5 inline-block mr-5 self-center" />
                  <p>Air filter</p>
                </div>
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
        </div>
        <div>
          <div class="card w-96 bg-gray-100 p-5 inline-block">
            <div className="flex justify-between items-end">
              <h4>
                350<span className="text-x"> /night</span>
              </h4>
              <p className="text-gray-500">16 sqft</p>
            </div>
            <div className="bg-white p-5 mt-5 rounded-2xl grid grid-cols-2">
              <div>
                <p>Check in</p>
                <p className="text-gray-500">6/24/2022</p>
              </div>
              <div className=" border-l-2 border-gray-300 pl-4">
                <p>Check out</p>
                <p className="text-gray-500">6/26/2022</p>
              </div>
            </div>
            <div className="bg-white p-5 mt-5 rounded-2xl">
              <p>Pets</p>
              <p className="text-gray-500">2 Cats with Cat Food</p>
            </div>
            <button className="btn mt-5">Continue</button>
            <div class="card-body items-center text-center p-0 py-5">
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  10,000 x 2 nights
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  Food Service
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  Service Fee
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div class="w-full border-t-2 border-gray-200 my-5"></div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-900">Total</p>
                <p className="text-end text-base text-gray-900">60,000</p>
              </div>
            </div>

            {/* <p className="text-2xl font-medium">
              Room name Cat Capsule by Minkminks
            </p> */}
            {/* <figure className="mt-5">
              <img
                src="https://api.lorem.space/image/shoes?w=400&h=225"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure> */}
            {/* <div class="card-body items-center text-center p-0 py-5">
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
                <p className="text-start text-base text-gray-500">
                  Food Service
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-500">
                  Service Fee
                </p>
                <p className="text-end text-base text-gray-500">20,000</p>
              </div>
              <div class="w-full border-t-2 border-gray-200 my-5"></div>
              <div className="w-full flex justify-between items-end">
                <p className="text-start text-base text-gray-900">Total</p>
                <p className="text-end text-base text-gray-900">60,000</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
