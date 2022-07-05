import { PlusIcon } from '@heroicons/react/outline';
import axios from '../../config/axios';
import { useEffect, useRef, useState, Fragment } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Modal from '../../common/Modal';
import uploadImage from '../../assets/img/uploadImage.png';
import Spinner from '../../common/Spinner';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import BtnIcon from '../../common/BtnIcon';

export default function AddPetModal({ className, setGetPet, getpet, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
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
  // const location = useLocation();
  // need to validate years and month
  // const handleChange = (e, yearOrMonth) => {
  //   if (yearOrMonth === 'year') {
  //     if (e.target.value.length <= 2) {
  //       setYear(e.target.value);
  //     }
  //   } else if (yearOrMonth === 'month') {
  //     if (e.target.value.length <= 2) {
  //       setMonth(e.target.value);
  //     }
  //   }
  // };

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

  // const onClose = () => {
  //   setChanged(false);
  //   setName('');
  //   setAge('');
  //   setNote('');
  //   setYear('');
  //   setMonth('');
  //   setSpecies('');
  //   setWeight('');
  //   setType('');
  //   setPetPic('');
  // };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('ttt');
      setLoading(true);
      const formData = new FormData();
      formData?.append('age', year + '.' + month);
      formData?.append('name', name);
      formData?.append('type', type);
      formData?.append('petPic', petPic);
      formData?.append('weight', weight);
      formData?.append('species', species);
      formData?.append('note', note);
      await axios.post('/pets', formData);
      await axios.get('/pets');
      setGetPet(!getpet);

      setName('');
      setAge('');
      setNote('');
      setYear('');
      setMonth('');
      setSpecies('');
      setWeight('');
      setType('');
      setPetPic('');
      setIsOpen(false);
      setChanged(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}

      <div>
        <span
          className={`${className} ?${className} : "text-orange-500 flex gap-1 justify-center items-center"`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <p>+ Add pet</p>
        </span>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 "
          onClose={() => setIsOpen(!isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[620px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-3xl transition-all">
                  <div className="flex justify-end">
                    <BtnIcon
                      icon={<XIcon />}
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    />
                  </div>
                  <div className="form-control mt-5 grid grid-cols-2 gap-4 w-full">
                    <div className="bg-gray-100 text-gray-300 font-light rounded-2xl w-48 h-48 flex flex-row justify-center items-center mb-5">
                      <img
                        onClick={() => profileRef.current.click()}
                        className="w-full h-full object-cover rounded-2xl"
                        src={
                          petPic
                            ? URL.createObjectURL(petPic)
                            : petPic || uploadImage
                        }
                        alt="userPhoto"
                      />
                    </div>
                    <div></div>
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
                          type === ''
                            ? type === 'CAT'
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
                            ? type === 'DOG'
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
                          placeholder="0"
                          errMsg="Error Massage"
                          error={false}
                          suffix="Year"
                        />
                        <InputWithSuffix
                          label=""
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          placeholder="0"
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
                  </div>
                  <button className="btn w-full mt-2" onClick={handlesubmit}>
                    Add
                  </button>
                  <p className="mt-4 text-gray-500 font-light text-xs">
                    Note: this will also save the new pet to your profile
                  </p>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
