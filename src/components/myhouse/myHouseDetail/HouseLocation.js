import Input from '../../../common/Input';
import TitleHeder from '../../../common/TitleHeder';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';
import Spinner from '../../../common/Spinner';
import { updateHousePinByUserId } from '../../../api/house';
import { useHouse } from '../../../contexts/HouseContext';

function HouseLocation() {
  const { houseDetail } = useHouse();

  const [autocomplete, setAutocomplete] = useState(null);
  const [location, setLocation] = useState(null);
  const [pinAddress, setPinAddress] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [pinHolder, setPinHolder] = useState(null);

  const onLoad = (autoComp) => setAutocomplete(autoComp);

  const onPlaceChanged = () => {
    setIsEdit(true);
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setPinAddress(autocomplete.getPlace().formatted_address);
    setPinHolder(autocomplete.getPlace().formatted_address);

    setLocation({ lat, lng });
  };

  const handleUpdatePin = async () => {
    await updateHousePinByUserId({ id: houseDetail.id, pinAddress, location });
    setIsEdit(false);
  };

  useEffect(() => {
    setPinHolder(houseDetail.pinAddress);
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
  }, [houseDetail]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <div>
      <TitleHeder title="Pin Your House" />
      <div>
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

        {isEdit && (
          <div div className="flex gap-4 w-[40%] mt-4 mb-7">
            <button className="btn flex-shrink" onClick={handleUpdatePin}>
              Save
            </button>

            <button
              className="btn btn-outline flex-shrink "
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        )}

        <div className="relative h-[520px] w-full ">
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
      </div>
    </div>
  );
}

export default HouseLocation;
