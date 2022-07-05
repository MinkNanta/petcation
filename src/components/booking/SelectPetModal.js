import { PlusIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Modal from '../../common/Modal';
import axios from '../../config/axios';
import defaultProtoPic from '../../assets/img/defaultProtoPic.png';

export default function SelectPetModal({ className, setPetIds, petIds }) {
  const [existingPets, setExistingPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get('/pets');
        setExistingPets(res.data.pet);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPets();
  }, []);

  const onSelect = (e, petId) => {
    e.preventDefault();
    setPetIds((petIds) => [...petIds, petId]);
  };

  return (
    <Modal title="Select from existing pets" className={className}>
      <div>
        {existingPets.length > 0 ? (
          existingPets.map((el) => (
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <img
                  className="rounded-full w-20 h-20"
                  src={el.petPic || defaultProtoPic}
                ></img>
              </div>
              <div className="col-span-3">
                <h4>{el.name}</h4>
                <table className="mt-2">
                  <tr className="items">
                    <td>Type</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.type || 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Age</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.age
                        ? `${el.age?.split('.')[0]} Year ${
                            el.age?.split('.')[1]
                          } Month`
                        : 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Species</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.species || 'N/A'}
                    </td>
                  </tr>
                  <tr className="items">
                    <td>Note</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.note || 'N/A'}
                    </td>
                  </tr>
                </table>
              </div>
              <button
                className={
                  petIds.includes(el.id)
                    ? 'btn-outline mt-2 text-gray-300 border-gray-300'
                    : 'btn-outline mt-2'
                }
                onClick={(e) => onSelect(e, el.id)}
                disabled={petIds.includes(el.id) ? true : false}
              >
                {petIds.includes(el.id) ? 'Selected' : 'Select'}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No pets found</p>
        )}
      </div>
    </Modal>
  );
}
