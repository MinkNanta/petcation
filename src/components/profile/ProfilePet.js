import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddPetModal from '../booking/AddPetModal';
import SelectPetModal from '../booking/SelectPetModal';
import PetInformation from './PetInformation';
import { getAccessToken } from '../../services/localStorage';

export default function ProfilePet({ title }) {
  const [allPet, setAllPet] = useState([]);
  const [oldValue, setOldValue] = useState({});
  const [getpet, setGetPet] = useState(false);

  const fetchPet = async () => {
    try {
      const res = await axios.get('/pets');

      setAllPet(res.data.pet);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPet();
  }, [getpet]);

  // fetchPet();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const token = getAccessToken();
        if (token) {
          const res = await axios.get('/users');

          setOldValue(res.data.user);
        }
      } catch (err) {}
    };
    fetchMe();
  }, [fetch]);

  return (
    <div className=" col-span-8">
      <div className="mb-4 flex justify-between">
        <h4>{title ? title : 'Hi, Welcome back ' + oldValue?.firstName}</h4>
        <div className="flex gap-5 items-end">
          <AddPetModal
            className="bg-orange-500 p-3 px-5 text-white rounded-2xl"
            setGetPet={setGetPet}
            getpet={getpet}
            onClick={() => setGetPet(!getpet)}
          />
        </div>
      </div>
      {allPet.map((el) => {
        return <PetInformation fetch={fetchPet} el={el} />;
      })}
    </div>
  );
}
