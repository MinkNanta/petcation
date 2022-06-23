import { Link, Outlet } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import MenuList from "../../common/MenuList";
import defaultProtoPic from "../../assets/img/defaultProtoPic.png";
import InputDropdown from "../../common/InputDropdown";
import { useState } from "react";
import Input from "../../common/Input";
import ProfileDetails from "./ProfileDetails";

export default function ProfilePage() {
  const [valueDropDown, setValueDropDown] = useState("");

  return (
    <>
      <div className="">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to={"#"}>Home</Link>
            </li>
            <li>
              <Link to={"#"}>my count</Link>
            </li>
          </ul>
        </div>
        <h1>John Doe</h1>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-12 gap-8 ">
          <div className="bg-gray-100 px-6 py-6 rounded-3xl  col-span-4">
            <div className="text-center ">
              <div className="mt-1 items-center ">
                <div className="w-[212px] mx-auto">
                  <img
                    src={defaultProtoPic}
                    alt=""
                    className="rounded-full text-gray-700 w-full h-full object-cover "
                  />
                </div>
                <p>Edit profile</p>
              </div>
            </div>
            <h4 className="text-2xl  py-6">John Doe</h4>
            <div className="space-y-4">
              <MenuList title="o" to="/profilepet" />
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
            </div>
          </div>
          <div className=" col-span-8 ">
            <div className="flex justify-between items-center ">
              <h4 className="text-2xl">Information</h4>
              <div className="flex gap-4">
                <button className="btn-text">Cancel</button>
                <button className="btn-small ">Save</button>
              </div>
            </div>

            <div className="flex gap-3">
              <Input
                label="First name"
                onChange={() => {}}
                placeholder="Enter your first name"
                errMsg="Error Massage"
                error={true}
              />
              <Input
                label="Last Name"
                onChange={() => {}}
                placeholder="Enter your last name"
                errMsg="Error Massage"
                error={true}
              />
            </div>

            <div className=" ">
              <Input
                label="Phone Number"
                onChange={() => {}}
                placeholder="Enter your phone number"
                errMsg="Error Massage"
                error={true}
              />
              <Input
                label="Email"
                onChange={() => {}}
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
                label="Postal/Zip Code (Optional)"
                onChange={() => {}}
                placeholder="Enter your phone number"
                errMsg="Error Massage"
                error={true}
              />
              <Input
                label="Address"
                onChange={() => {}}
                placeholder="Enter your email"
                errMsg="Error Massage"
                error={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
