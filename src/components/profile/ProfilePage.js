import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/solid";
import MenuList from "../../common/MenuList";
import defaultProtoPic from "../../assets/img/defaultProtoPic.png";
import InputDropdown from "../../common/InputDropdown";
import { useState } from "react";
import Input from "../../common/Input";

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
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
              <MenuList title="option 1" to="/" />
            </div>
          </div>
          <div className=" col-span-8 ">
            <div className="flex justify-between items-center ">
              <h4 className="text-2xl">Information</h4>
              <div className="">
                <button className="text btn btn-sm btn-ghost ">Cancel</button>
                <button className="text btn btn-sm btn-primary">Save</button>
              </div>
            </div>
            <Input
              label="First name"
              onChange={() => {}}
              placeholder="Enter your input"
              errMsg="Error Massage"
              error={true}
            />
            <div className="flex gap-3">
              <Input
                label="First name"
                onChange={() => {}}
                placeholder="Enter your input"
                errMsg="Error Massage"
                error={true}
              />
              <Input
                label="First name"
                onChange={() => {}}
                placeholder="Enter your input"
                errMsg="Error Massage"
                error={true}
              />
            </div>

            <div className="grid grid-cols-2 pt-8 gap-4">
              <div className="col-span-1 w-f ">
                <p className="label-text">First name</p>
                <input
                  type="input"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="col-span-1 ">
                <p className="label-text">Last name</p>
                <input
                  type="input"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid grid-row ">
              <div className="col-span ">
                <p className="label-text pt-6">Phone Number</p>
                <input
                  type="input"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />

                <p className="label-text pt-6">Email</p>
                <input
                  type="input"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            {/* Province */}
            <div>
              <InputDropdown
                label="test"
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

              <div className="col-span ">
                <p className="label-text pt-6">Province</p>
                <select className="select select-secondary w-full max-w-xs">
                  <option disabled selected>
                    Pick your Province
                  </option>
                  <option>Province</option>
                </select>

                <p className="label-text pt-6">District</p>
                <select className="select select-secondary w-full max-w-xs">
                  <option disabled selected>
                    Pick your District
                  </option>
                  <option>District</option>
                </select>
                <p className="label-text pt-6">Subdistrict</p>
                <select className="select select-secondary w-full max-w-xs">
                  <option disabled selected>
                    Pick your Subdistrict
                  </option>
                  <option>Subdistrict</option>
                </select>
                <p className="label-text pt-6">Postal/Zip Code (Optional)</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <p className="label-text pt-6">Address</p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
