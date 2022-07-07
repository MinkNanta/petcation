import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddPetModal from '../booking/AddPetModal';
import SelectPetModal from '../booking/SelectPetModal';
import PetInformation from './PetInformation';
import { getAccessToken } from '../../services/localStorage';
import EmtpyState from '../../common/EmtpyState';
import addpet from '../../assets/img/addpet.png';

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
        <h4>Your Pets Information</h4>
        <div className="flex gap-5 items-end">
          <AddPetModal
            className="btn-small"
            setGetPet={setGetPet}
            getpet={getpet}
            onClick={() => setGetPet(!getpet)}
          />
        </div>
      </div>
      {allPet.length > 0 ? (
        allPet.map((el) => {
          return <PetInformation fetch={fetchPet} el={el} />;
        })
      ) : (
        <EmtpyState>
          <img
            src={addpet}
            alt="addpet"
            className="w-24 h-24 opacity-50 mx-auto mb-2"
          />
          <p className="text-gray-500">For create booking.</p>
          <p className="text-gray-500">Please select or add a pet</p>
        </EmtpyState>
      )}
    </div>
  );
}
