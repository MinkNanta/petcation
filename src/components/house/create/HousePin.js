import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import {
  backStagePage,
  nextStagePage,
  savePin,
} from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import Spinner from '../../../common/Spinner';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HousePin() {
  const { dispatch, createHouse } = useCreateHouse();
  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState(null);
  const [pinAddress, setPinAddress] = useState(null);
  const [pinHolder, setPinHolder] = useState(null);

  const handleClickNext = () => {
    dispatch(savePin({ location, pinAddress }));
    dispatch(nextStagePage());
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };

  const onLoad = (autoComp) => setAutocomplete(autoComp);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setLocation({ lat, lng });

    setPinAddress(autocomplete.getPlace().formatted_address);
    setPinHolder(autocomplete.getPlace().formatted_address);
  };

  useEffect(() => {
    if (createHouse.pinAddress) {
      setPinHolder(createHouse.pinAddress);
      setLocation(createHouse.location);
    } else {
      navigator.geolocation.getCurrentPosition(
        (obj) => {
          setLocation({
            lat: obj.coords.latitude,
            lng: obj.coords.longitude,
          });
        },
        (err) => {
          console.log(err);
        },
      );
    }
  }, [createHouse]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries: ['places'],
  });
  if (!isLoaded) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-[508px] h-[640px] relative">
        <div className="text-2xl mb-6">Pin Your House</div>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <Input
            value={pinHolder}
            name="checkInTime"
            label="Pin Address"
            onChange={(e) => setPinHolder(e.target.value)}
            errMsg="Error Massage"
            error={false}
          />
        </Autocomplete>

        <div className="relative h-[420px] w-full ">
          <div className="z-0 absolute top-0 left-0 h-full w-full">
            <GoogleMap
              center={location}
              zoom={15}
              mapContainerStyle={{ width: '100%', height: '100%' }}
            >
              <Marker position={location} />
            </GoogleMap>
          </div>
        </div>

        <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
          <div className="btn-small ">Back</div>
        </div>
        <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
          <div className="btn-small ">Next</div>
        </div>
      </div>
    </>
  );
}

export default HousePin;
