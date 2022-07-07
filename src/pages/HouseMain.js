import React from 'react';
import { useNavigate } from 'react-router-dom';
import hostCover from '../assets/img/hostCover.png';
import hostFooter from '../assets/img/hostFooter.png';
import ReviewCard from '../components/host/ReviewCard';
import LoginForm from '../components/layout/auth/LoginForm';
import { useAuth } from '../contexts/AuthContext';
import petCreateHouse from '../assets/videos/pexels-cottonbro-5909975.mp4';

export default function HouseMain() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <>
      <div className="mainContainer">
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
              Set up new house
            </button>
          ) : (
            <LoginForm
              className="bg-white rounded-2xl p-3 text-black border border-black w-fit flex gap-1 justify-center items-center"
              title="Sign In To Set up new host"
            />
          )}
        </div>
      </div>
      <div className="w-full">
        <img
          src={hostCover}
          alt="host"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mainContainer">
        <div className="flex justify-center mt-20">
          <h1 className="text-center">
            You can become a host
            <br />
            anytime, anywhere
          </h1>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-10">
          <ReviewCard
            desc="Opening my home to Petcation guests allowed me to become an entrepreneur and laid down a
          path to financial freedom."
            title="Entrepreneur"
            img="https://images.unsplash.com/photo-1532987978747-aa9d644e3b2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          />
          <ReviewCard
            desc="Great customer service! The Petcation support team was very helpful in helping me set up my house."
            title="Retiree"
            img="https://images.unsplash.com/photo-1553322378-eb94e5966b0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <ReviewCard
            desc="Hosting on Petcation is a dream job for a someone like me. I get to spend my time taking care of dogs and get paid for my time!"
            title="Dog Lover"
            img="https://images.unsplash.com/photo-1647888774545-96f662a65e15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
        <div className="mt-20">
          <div className="h-[620px] w-full rounded-3xl overflow-hidden">
            <video
              className="object-cover  w-full h-full "
              src={petCreateHouse}
              autoPlay
              loop
              muted
            />
          </div>

          {/* <img className="w-full" src={hostFooter}></img> */}
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
                Set up new house
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
