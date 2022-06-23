import React from "react";
import { useNavigate } from "react-router-dom";

export default function HouseMain() {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-10 mx-20">
        <div className="flex flex-col gap-y-5">
          <p>Become a host on Petcation</p>
          <h1>
            Earn <span className="text-orange-500">money</span>
            <br />
            doing what you love.
          </h1>
          <button
            className="btn-outline w-44"
            onClick={() => navigate("/createHouse")}
          >
            Set up new host
          </button>
        </div>
      </div>
      {/* <img src={hostCover}></img> */}
      <div className="my-10 mx-20">
        <div className="flex justify-center mt-20">
          <h1 className="text-center">
            You can host
            <br />
            anything, anywhere
          </h1>
        </div>
        {/* <div className="mt-10 flex justify-between">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div> */}
        <div className="mt-20">
          {/* <img className="w-full" src={hostFooter}></img> */}
          <div className="w-full flex justify-between items-end mt-10">
            <p className="text-start text-base text-gray-500">
              Try hosting on Petcation
              <br />
              Join us. We’ll help you every step of the way.
            </p>
            {/* <button
              className="btn-outline w-44"
              onClick={() => navigate("/createHouse")}
            >
              Set up new host
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
