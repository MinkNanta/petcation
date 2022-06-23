import Input from "../../common/Input";
import InputDropdown from "../../common/InputDropdown";

export default function PetOwnerDetails() {
  // const []

  return (
    <div>
      <p className="text-2xl font-medium">Pet Owner</p>
      <div className="form-control flex mt-5">
        <div className="flex gap-x-5">
          <Input
            label="First name"
            onChange={() => {}}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />
          <Input
            label="Last name"
            onChange={() => {}}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />
        </div>
        <Input
          label="Phone Number"
          onChange={() => {}}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <InputDropdown
          label="Province"
          onChange={(e) => {
            // setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="District"
          onChange={(e) => {
            // setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="Subdistrict"
          onChange={(e) => {
            // setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <Input
          label="Postal/Zip Code"
          option="(Optional)"
          onChange={() => {}}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <Input
          label="Address"
          onChange={() => {}}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
      </div>
    </div>
  );
}
