import Input from "../../common/Input";
import InputDropdown from "../../common/InputDropdown";

export default function ProfileDetails({
  setFirstName,
  setLastName,
  setPhoneNumber,
  setProvince,
  setDistrict,
  setSubdistrict,
  setZipCode,
  setAddress,
}) {
  return (
    <div>
      <p className="text-2xl font-medium">Pet Owner</p>
      <div className="form-control flex mt-5">
        <div className="flex gap-x-5">
          <Input
            label="First name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />
          <Input
            label="Last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder=""
            errMsg="Error Massage"
            error={false}
          />
        </div>
        <Input
          label="Phone Number"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <InputDropdown
          label="Province"
          onChange={(e) => {
            setProvince(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="District"
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1"></option>
        </InputDropdown>
        <InputDropdown
          label="Subdistrict"
          onChange={(e) => {
            setSubdistrict(e.target.value);
          }}
          errMsg="Error Massage"
          error={false}
        >
          <option value="option1">option</option>
        </InputDropdown>
        <Input
          label="Postal/Zip Code"
          option="(Optional)"
          onChange={(e) => {
            setZipCode(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
        <Input
          label="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder=""
          errMsg="Error Massage"
          error={false}
        />
      </div>
    </div>
  );
}
