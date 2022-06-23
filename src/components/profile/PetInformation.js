import { PlusIcon } from "@heroicons/react/outline";
import Input from "../../common/Input";
import InputDropdown from "../../common/InputDropdown";
import InputWithSuffix from "../../common/InputWithSuffix";

export default function PetInformation() {
  return (
    <div>
      <p className="text-2xl font-medium">Pet Information</p>
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
              onChange={() => {}}
              placeholder=""
              errMsg="Error Massage"
              error={false}
              suffix="Year"
            />
            <InputWithSuffix
              label=""
              onChange={() => {}}
              placeholder=""
              errMsg="Error Massage"
              error={false}
              suffix="Month"
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
      </div>
    </div>
  );
}
