import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddPetModal from '../booking/AddPetModal';
import SelectPetModal from '../booking/SelectPetModal';
import PetInformation from './PetInformation';

export default function ProfilePet() {
  const [allPet, setAllPet] = useState([]);

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
  }, []);

  // fetchPet();

  console.log(allPet);

  return (
    <div className=" col-span-8">
      <div className="flex gap-5 items-end">
        <AddPetModal
          className="bg-orange-500 p-3 px-5 text-white rounded-2xl"
          fetch={fetchPet}
        />
      </div>
      {allPet.map((el) => {
        return <PetInformation fetch={fetchPet} el={el} />;
      })}
    </div>
  );
}
