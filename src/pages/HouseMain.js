import React from 'react';
import { useNavigate } from 'react-router-dom';
import hostCover from '../assets/img/hostCover.png';
import hostFooter from '../assets/img/hostFooter.png';
import ReviewCard from '../components/host/ReviewCard';
import LoginForm from '../components/layout/auth/LoginForm';
import { useAuth } from '../contexts/AuthContext';

export default function HouseMain() {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log(user);

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
          {user ? (
            <button
              className="btn-outline w-44"
              onClick={() => navigate('/createHouse')}
            >
              Set up new host
            </button>
          ) : (
            <LoginForm
              className="bg-white rounded-2xl p-3 text-black border border-black w-fit flex gap-1 justify-center items-center"
              title="Sign In To Set up new host"
            />
          )}
        </div>
      </div>
      <img src={hostCover}></img>
      <div className="my-10 mx-20">
        <div className="flex justify-center mt-20">
          <h1 className="text-center">
            You can host
            <br />
            anything, anywhere
          </h1>
        </div>
        <div className="mt-10 flex justify-between">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
        <div className="mt-20">
          <img className="w-full" src={hostFooter}></img>
          <div className="w-full flex justify-between items-end mt-10">
            <p className="text-start text-base text-gray-500">
              Try hosting on Petcation
              <br />
              Join us. We’ll help you every step of the way.
            </p>

            {user ? (
              <button
                className="btn-outline w-44"
                onClick={() => navigate('/createHouse')}
              >
                Set up new host
              </button>
            ) : (
              <LoginForm
                className="bg-white rounded-2xl p-3 text-black border border-black w-fit flex gap-1 justify-center items-center"
                title="Sign In To Set up new host"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
