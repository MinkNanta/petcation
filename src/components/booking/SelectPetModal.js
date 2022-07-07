import { PlusIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Modal from '../../common/Modal';
import axios from '../../config/axios';
import defaultProtoPic from '../../assets/img/defaultProtoPic.png';

export default function SelectPetModal({
  className,
  setPetIds,
  petIds,
  addedPets,
  petType,
}) {
  const [existingPets, setExistingPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const res = await axios.get('/pets');
        const filtered = res.data.pet.filter((el) => el.type === petType);
        setExistingPets(filtered);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPets();
  }, [addedPets]);

  console.log('existing pets', existingPets);
  console.log('pet ids', petIds);

  const onSelect = (e, id) => {
    e.preventDefault();
    const select = existingPets.filter((el) => +el.id === +id)[0];
    setPetIds((petIds) => [...petIds, select]);
  };

  return (
    <Modal title="Select pets" className={className} size="w-2/5">
      <h4>Your pets</h4>
      <div className="divider"></div>
      <div className="flex flex-col gap-8 w-[920px]">
        {existingPets.length > 0 ? (
          existingPets.map((el) => (
            <div className="flex gap-6 mb-6">
              <div className="col-span-1 rounded-full overflow-hidden w-40 h-40">
                <img
                  alt="petphoto"
                  className="w-full h-full object-cover"
                  src={el.petPic || defaultProtoPic}
                ></img>
              </div>
              <div className="">
                <h4 className="mb-2">{el.name}</h4>

                <p className="text-gray-500 ">
                  {el.type || 'N/A'} ({el.species || 'N/A'}){' ・ '}
                  {el.age
                    ? `${el.age?.split('.')[0]} Year ${
                        el.age?.split('.')[1]
                      } Month`
                    : 'N/A'}{' '}
                </p>
                <p className="text-gray-500 ">Note {el.note || 'N/A'}</p>

                {/* <table className="mt-2"> */}
                {/* <tr className="items">
                    <td>Type</td>
                    <td className="text-gray-500 pl-2 flex items-end">
                      {el.type || 'N/A'}
                    </td>
                  </tr> */}
                {/* <tr className="items">
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
                </table> */}
                <button
                  className={
                    // petIds.includes(el)
                    petIds.filter((pet) => pet.id === el.id).length > 0
                      ? 'btn-small mt-2 text-gray-300 border-gray-300'
                      : 'btn-small mt-2'
                  }
                  onClick={(e) => onSelect(e, el.id)}
                  disabled={petIds.includes(el) ? true : false}
                >
                  {petIds.filter((pet) => pet.id === el.id).length > 0
                    ? 'Selected'
                    : 'Select'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No pets found</p>
        )}
      </div>
    </Modal>
  );
}
