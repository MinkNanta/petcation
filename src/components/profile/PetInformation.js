import { PlusIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import InputWithSuffix from '../../common/InputWithSuffix';
import Spinner from '../../common/Spinner';
import TitleHeder from '../../common/TitleHeder';

export default function PetInformation({ allPet }) {
  const [year, setYear] = useState(1);
  const [month, setMonth] = useState(0);
  const [name, setName] = useState('');
  const [change, setChanged] = useState(false);

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

  return (
    <div>
      {false && <Spinner />}

      {allPet?.map((el) => (
        <div className="form-control w-full mt-5">
          <TitleHeder title={el.name} />
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
              value={name ? name : el.name}
              onChange={(e) => {
                setName(e.target.value);
                setChanged(true);
              }}
              placeholder=""
              errMsg="Error Massage"
              error={false}
            />
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
          </div>
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
            <Input
              label="Species"
              onChange={() => {}}
              placeholder=""
              errMsg="Error Massage"
              error={false}
            />
          </div>
          <Input
            label="Note"
            onChange={() => {}}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />

          {change && (
            <div div className="flex gap-4 w-[40%] mt-4">
              <button className="btn flex-shrink" onClick={() => {}}>
                Save
              </button>

              <button
                className="btn btn-outline flex-shrink "
                onClick={() => {}}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
