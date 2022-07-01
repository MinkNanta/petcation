import { PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Modal from '../../common/Modal';

export default function AddPetModal({ className }) {
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(0);

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

  // const [inputFile, setInputFile] = useState("");

  // const uploadClick = (e) => {
  //   e.preventDefault();
  //   inputFile.click();
  //   return false;
  // };

  return (
    <Modal title="+" className={className}>
      <div className="form-control w-full mt-5">
        <input
          type="file"
          name="fileUpload"
          ref={(input) => {
            // assigns a reference so we can trigger it later
            // setInputFile(input);
          }}
          className="hidden"
        />
        <a
          // href="#"
          // onClick={uploadClick}
          className="bg-gray-100 text-gray-300 font-light rounded-2xl w-48 h-48 flex flex-row justify-center items-center mb-5"
        >
          <PlusIcon className="w-4 h-4 inline-block" />
          Upload Photo
        </a>
        <div className="flex gap-x-5">
          <Input
            label="Name"
            onChange={() => {}}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />
        </div>
        <InputDropdown
          label="Type"
          onChange={(e) => {
            // setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="Weight"
          onChange={(e) => {
            // setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <div className="flex gap-x-5">
          <div className="flex gap-x-5 items-end">
            <InputWithSuffix
              label="Name"
              onChange={(e) => {
                handleChange(e, 'year');
              }}
              placeholder=""
              errMsg="Error Massage"
              error={false}
              suffix="Year"
              value={year}
            />
            <InputWithSuffix
              label=""
              onChange={(e) => {
                handleChange(e, 'month');
              }}
              placeholder=""
              errMsg="Error Massage"
              error={false}
              suffix="Month"
              value={month}
            />
          </div>
        </div>
        <Input
          label="Species"
          onChange={() => {}}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <Input
          label="Note"
          onChange={() => {}}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <button className="btn w-1/4">Add</button>
        <p className="mt-4 text-gray-500 font-light text-xs">
          Note: this will also save the new pet to your profile
        </p>
      </div>
    </Modal>
  );
}
