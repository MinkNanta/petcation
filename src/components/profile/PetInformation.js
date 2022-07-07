import { PlusIcon, TrashIcon } from '@heroicons/react/outline';
import uploadImage from '../../assets/img/uploadImage.png';
import axios from '../../config/axios';
import { useRef, useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Spinner from '../../common/Spinner';
import TitleHeder from '../../common/TitleHeder';
import dog from '../../assets/img/dog.png';
import cat from '../../assets/img/cat.png';

const weightPet = [
  '<2kg',
  '2kg-4kg',
  '5kg-8kg',
  '9kg-12kg',
  '13kg-16kg',
  '17kg-20kg',
  '>20',
];

export default function PetInformation({ el, fetch }) {
  const profileRef = useRef(null);
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(0);
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

  const yearString = 'year';
  const monthString = 'month';

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

  const handleDeletePet = async () => {
    try {
      const res = await axios.delete('/pets/' + el.id);
      fetch();
    } catch (err) {
      console.log(err);
    }
  };

  const handlesubmit = async (e, id) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      age && formData?.append('age', year + '.' + month);
      name && formData?.append('name', name);
      type && formData?.append('type', type);
      petPic && formData?.append('petPic', petPic);
      weight && formData?.append('weight', weight);
      species && formData?.append('species', species);
      note && formData?.append('note', note);
      await axios.patch('/pets/update/' + id, formData);
      setChanged(false);
    } catch (err) {
      console.log(err);
    }
  };

  const onCancel = () => {
    setChanged(false);
    setName('');
    setAge('');
    setNote('');
    setYear('');
    setMonth('');
    setSpecies('');
    setWeight('');
    setType('');
  };

  console.log(petPic);

  return (
    <div>
      {loading && <Spinner />}

      <form onSubmit={(e) => handlesubmit(e, el.id)}>
        <div className="flex  items-center justify-between">
          <div className="flex items-end ">
            <img
              src={el.type === 'DOG' ? dog : cat}
              alt="checkin"
              className="w-10 h-10 mr-5 mt-1"
            />
            <h5 className="text-gray-800 -ml-2">{el.name}</h5>
          </div>

          <button
            className="btn-small h-[42px] flex items-center justify-between gap-2"
            onClick={handleDeletePet}
          >
            <TrashIcon className="w-6 h-6" />
            delete
          </button>
        </div>
        <div className="form-control w-full mt-5 grid grid-cols-3">
          <div>
            <div className="bg-gray-100 text-gray-300 font-light rounded-2xl w-48 h-48 flex flex-row justify-center items-center mb-4">
              <img
                onClick={() => profileRef.current.click()}
                className="w-full h-full object-cover rounded-2xl"
                src={
                  petPic
                    ? URL.createObjectURL(petPic)
                    : el.petPic || uploadImage
                }
                alt="userPhoto"
              />
              {/* <PlusIcon className="w-4 h-4 inline-block" /> */}
            </div>
            <input
              ref={profileRef}
              className="hidden"
              onChange={(e) => handleChangePhoto(e)}
              type="file"
            />
            <button
              className="btn-text-line"
              onClick={() => profileRef.current.click()}
            >
              Edit photo
            </button>
          </div>

          <div className="col-span-2">
            <Input
              label="Name"
              value={name ? name : el.name}
              onChange={(e) => {
                setName(e.target.value);
                setChanged(true);
              }}
              // placeholder=""
              errMsg="Error Massage"
              error={false}
            />
            <div className="flex gap-x-5">
              <InputDropdown
                label="Type"
                onChange={(e) => {
                  setType(e.target.value);
                  setChanged(true);
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
                    type === ''
                      ? el.type === 'CAT'
                        ? true
                        : false
                      : type === 'CAT'
                      ? true
                      : false
                  }
                >
                  CAT
                </option>
                <option
                  value="DOG"
                  selected={
                    type === ''
                      ? el.type === 'DOG'
                        ? true
                        : false
                      : type === 'DOG'
                      ? true
                      : false
                  }
                >
                  DOG
                </option>
              </InputDropdown>

              <InputDropdown
                label="Weight"
                onChange={(e) => {
                  setWeight(e.target.value);
                  setChanged(true);
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
                          ? el.weight === w
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
            </div>
            <div className="flex gap-x-5">
              <div className="flex gap-4 w-full">
                <InputWithSuffix
                  label="Age"
                  value={year}
                  name="year"
                  onChange={(e) => {
                    setYear(e.target.value);
                    setChanged(true);
                  }}
                  placeholder=""
                  errMsg="Error Massage"
                  error={false}
                  suffix="Year"
                />
                <InputWithSuffix
                  label=""
                  name="month"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                    setChanged(true);
                  }}
                  placeholder=""
                  errMsg="Error Massage"
                  error={false}
                  suffix="Month"
                />
              </div>
              <Input
                label="Species"
                value={species ? species : el.species}
                onChange={(e) => {
                  setSpecies(e.target.value);
                  setChanged(true);
                }}
                placeholder=""
                errMsg="Error Massage"
                error={false}
              />
            </div>
            <Input
              label="Note"
              value={note ? note : el.note}
              onChange={(e) => {
                setNote(e.target.value);
                setChanged(true);
              }}
              placeholder=""
              errMsg="Error Massage"
              error={false}
            />

            {change && (
              <div div className="flex gap-4 w-[40%] mt-4">
                <button
                  className="btn flex-shrink"
                  // onClick={() => handlesubmit()}
                  type="submit"
                >
                  Save
                </button>

                <button
                  className="btn btn-outline flex-shrink "
                  onClick={() => {
                    setChanged(false);
                    onCancel();
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="divider"></div>
      </form>
    </div>
  );
}
