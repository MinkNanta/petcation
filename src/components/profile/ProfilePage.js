import InputDropdown from "../../common/InputDropdown";
import { useContext, useState } from "react";
import Input from "../../common/Input";
import { AddressContext } from "../../contexts/AddressContext";

export default function ProfilePage() {
  const [valueDropDown, setValueDropDown] = useState("");
  const [firstName, setFirstNamne] = useState("");
  const [lastName, setLastNamne] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [subDistrict, setSubDistrict] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const { dropdownAddress, setDropdownAddresss } = useContext(AddressContext);

  console.log(firstName);
  console.log(lastName);
  console.log(phoneNumber);
  console.log(email);
  console.log(zipCode);
  console.log(address);

  return (
    <>
      <div className="flex justify-between items-center ">
        <h4 className="text-2xl">Information</h4>
        <div className="flex gap-4">
          <button className="btn-text">Cancel</button>
          <button className="btn-small ">Save</button>
        </div>
      </div>

      <div className="flex gap-3">
        <Input
          value={firstName}
          label="First name"
          onChange={(e) => setFirstNamne(e.target.value)}
          placeholder="Enter your first name"
          errMsg="Error Massage"
          error={true}
        />
        <Input
          value={lastName}
          label="Last Name"
          onChange={(e) => setLastNamne(e.target.value)}
          placeholder="Enter your last name"
          errMsg="Error Massage"
          error={true}
        />
      </div>

      <div className=" ">
        <Input
          value={phoneNumber}
          label="Phone Number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          errMsg="Error Massage"
          error={true}
        />
        <Input
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          errMsg="Error Massage"
          error={true}
        />
      </div>

      {/* Province */}
      <div>
        <InputDropdown
          label="Province"
          onChange={(e) => {
            setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={true}
        >
          <option value="option1">Star Wars</option>
          <option value="option2">Harry Potter</option>
          <option value="option3">Lord of the Rings</option>
          <option value="option4">Planet of the Apes</option>
          <option value="option5">Star Trek</option>
        </InputDropdown>

        <InputDropdown
          label="District"
          onChange={(e) => {
            setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={true}
        >
          <option value="option1">Star Wars</option>
          <option value="option2">Harry Potter</option>
          <option value="option3">Lord of the Rings</option>
          <option value="option4">Planet of the Apes</option>
          <option value="option5">Star Trek</option>
        </InputDropdown>

        <InputDropdown
          label="Subdistrict"
          onChange={(e) => {
            setValueDropDown(e.target.value);
          }}
          errMsg="Error Massage"
          error={true}
        >
          <option value="option1">Star Wars</option>
          <option value="option2">Harry Potter</option>
          <option value="option3">Lord of the Rings</option>
          <option value="option4">Planet of the Apes</option>
          <option value="option5">Star Trek</option>
        </InputDropdown>

        <Input
          value={zipCode}
          label="Postal/Zip Code (Optional)"
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter your zipcode"
          errMsg="Error Massage"
          error={true}
        />
        <Input
          value={address}
          label="Address"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          errMsg="Error Massage"
          error={true}
        />
      </div>
    </>
  );
}
