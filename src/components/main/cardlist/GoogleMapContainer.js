import { motion } from 'framer-motion';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import HouseItem from './HouseItem';
import { useNavigate } from 'react-router-dom';

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 2, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function GoogleMapContainer({ house }) {
  const [userLocation, setUserLocation] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (obj) => {
        setUserLocation({
          lat: obj.coords.latitude,
          lng: obj.coords.longitude,
        });
      },
      (err) => {
        console.log(err);
      },
    );
  }, []);

  return (
    <motion.ul
      className="w-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="item" variants={item}>
        <div className="relative h-screen w-full">
          <div className="z-0 absolute top-0 left-0 h-full w-full">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAP_API,
              }}
              defaultCenter={userLocation}
              center={userLocation}
              defaultZoom={10}
              margin={[50, 50, 50, 50]}
            >
              {house.map((el, idx) => (
                <div
                  lat={JSON.parse(el.location).lat}
                  lng={JSON.parse(el.location).lng}
                  onClick={() => navigate('/booking/' + el.id)}
                  className="cursor-pointer"
                >
                  <HouseItem key={idx} el={el} />
                </div>
              ))}

              <div lat={userLocation.lat} lng={userLocation.lng}>
                <LocationMarkerIcon className="w-[30px] text-red-500" />
              </div>
            </GoogleMapReact>
          </div>
        </div>
      </motion.li>
    </motion.ul>
  );
}

export default GoogleMapContainer;
