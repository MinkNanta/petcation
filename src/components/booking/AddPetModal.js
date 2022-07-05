import { PlusIcon } from '@heroicons/react/outline';
import axios from '../../config/axios';
import { useRef, useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Modal from '../../common/Modal';
import uploadImage from '../../assets/img/uploadImage.png';
import Spinner from '../../common/Spinner';

export default function AddPetModal({
  className,
  fetch,
  setAddedPets,
  addedPets,
  petType,
}) {
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(0);
  const profileRef = useRef(null);

  const [petPic, setPetPic] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [valueDropDown, setValueDropDown] = useState({});
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [species, setSpecies] = useState('');
  const [note, setNote] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [change, setChanged] = useState(false);
  const [oldValue, setOldValue] = useState({});

  // const [petInfo, setPetInfo] = useState({});

  // need to validate years and month
  const handleChange = (e, yearOrMonth) => {
    if (yearOrMonth === 'year') {
      if (e.target.value.length <= 2) {
        setYear(e.target.value);
      }
    } else if (yearOrMonth === 'month') {
      if (e.target.value.length <= 2) {
        setMonth(e.target.value);
      }
    }
  };

  const handleChangePhoto = (e) => {
    setChanged((p) => !p);
    setPetPic(e.target.files[0]);
  };

  const weightPet = [
    '<2kg',
    '2kg-4kg',
    '5kg-8kg',
    '9kg-12kg',
    '13kg-16kg',
    '17kg-20kg',
    '>20',
  ];

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData?.append('age', year + '.' + month);
      formData?.append('name', name);
      formData?.append('type', 'type');
      formData?.append('petPic', petPic);
      formData?.append('weight', weight);
      formData?.append('species', species);
      formData?.append('note', note);
      const res = await axios.post('/pets', formData);
      fetch();
      setChanged(false);
      setAddedPets((addedPets) => [...addedPets, res.data.pets.id]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    setChanged(false);
    setName('');
    setAge('');
    setNote('');
    setYear('');
    setMonth('');
    setSpecies('');
    setWeight('');
    setType('');
    setPetPic('');
  };

  console.log(month, 'month');
  console.log(year, 'year');

  return (
    <>
      {loading && <Spinner />}

      <Modal title="+" className={className} onClick={onClose}>
        <div className="form-control w-full mt-5">
          <div className="bg-gray-100 text-gray-300 font-light rounded-2xl w-48 h-48 flex flex-row justify-center items-center mb-5">
            <img
              onClick={() => profileRef.current.click()}
              className="w-full h-full object-cover rounded-2xl"
              src={petPic ? URL.createObjectURL(petPic) : petPic || uploadImage}
              alt="userPhoto"
            />
          </div>
          <input
            ref={profileRef}
            className="hidden"
            onChange={(e) => handleChangePhoto(e)}
            type="file"
          />

          <div className="flex gap-x-5">
            <Input
              label="Name"
              onChange={(e) => setName(e.target.value)}
              placeholder=""
              errMsg="Error Massage"
              error={false}
            />
          </div>
          <InputDropdown
            label="Type"
            onChange={(e) => {
              setType(e.target.value);
            }}
            errMsg="Error Massage"
            error={false}
          >
            <option value="" selected readOnly>
              Select your option
            </option>
            <option
              value="CAT"
              selected={
                petType
                  ? petType === 'CAT'
                  : type === ''
                  ? type === 'CAT'
                    ? true
                    : false
                  : type === 'CAT'
                  ? true
                  : false
              }
              disabled={petType ? (petType === 'CAT' ? false : true) : false}
            >
              CAT
            </option>
            <option
              value="DOG"
              selected={
                petType
                  ? petType === 'DOG'
                  : type === ''
                  ? type === 'DOG'
                    ? true
                    : false
                  : type === 'DOG'
                  ? true
                  : false
              }
              disabled={petType ? (petType === 'DOG' ? false : true) : false}
            >
              DOG
            </option>
          </InputDropdown>
          <InputDropdown
            label="Weight"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            errMsg="Error Massage"
            error={false}
          >
            <option value="" selected readOnly>
              Select your option
            </option>

            {weightPet.map((w) => {
              return (
                // selected={type === ''? el.type === 'DOG'? true: false: type === 'DOG'? true: false}
                <option
                  value={w}
                  selected={
                    weight === ''
                      ? weight === w
                        ? true
                        : false
                      : weight === w
                      ? true
                      : false
                  }
                >
                  {w}
                </option>
              );
            })}
          </InputDropdown>
          <div className="flex gap-x-5">
            <div className="flex gap-x-5 items-end">
              <InputWithSuffix
                label="Age"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                placeholder=""
                errMsg="Error Massage"
                error={false}
                suffix="Year"
              />
              <InputWithSuffix
                label=""
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder=""
                errMsg="Error Massage"
                error={false}
                suffix="Month"
              />
            </div>
          </div>
          <Input
            label="Species"
            value={species}
            error={false}
            onChange={(e) => setSpecies(e.target.value)}
            placeholder=""
            errMsg="Error Massage"
          />
          <Input
            label="Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />
          <button className="btn w-1/4" onClick={handlesubmit}>
            Add
          </button>
          <p className="mt-4 text-gray-500 font-light text-xs">
            Note: this will also save the new pet to your profile
          </p>
        </div>
      </Modal>
    </>
  );
}
