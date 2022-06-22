import React, { useState } from "react";

import BtnIcon from "../common/BtnIcon";
import { XIcon } from "@heroicons/react/solid";
import Input from "../common/Input";
import MenuList from "../common/MenuList";
import Textarea from "../common/Textarea";
import InputDropdown from "../common/InputDropdown";
import Checkbox from "../common/Checkbox";
import Modal from "../common/Modal";
import InputWithSuffix from "../common/InputWithSuffix";

export default function DesignSystemDoc() {
  const [valueCheck, setValueCheck] = useState(false);
  const [valueDropDown, setValueDropDown] = useState("");
  return (
    <div className="space-y-6 mx-auto ">
      <>
        {/* input */}
        <Input
          value="test"
          type="text"
          option="option"
          label="test"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={true}
        />
        {/* input group */}
        <div className="flex gap-3">
          <Input
            label="test"
            onChange={() => {}}
            placeholder="Enter your input"
            errMsg="Error Massage"
            error={true}
          />
          <Input
            label="test"
            onChange={() => {}}
            placeholder="Enter your input"
            errMsg="Error Massage"
            error={true}
          />
        </div>

        {/* input drop down */}
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

        {/* input with suffix */}
        <InputWithSuffix
          label="test"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={true}
          suffix="Years"
        />

        {/* Textarea */}
        <Textarea
          value="test"
          label="test"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={true}
        />

        {/* Checkbox */}
        <Checkbox
          title="test"
          value="checked1"
          onChange={(e) => setValueCheck(!valueCheck)}
        />
        <Checkbox
          title="test"
          value="checked2"
          onChange={(e) => setValueCheck(!valueCheck)}
        />

        {/* button */}
        <button className="btn">Create</button>
        {/* button outline */}
        <button className="btn btn-outline">btn btn-outline</button>
        {/* button gray color */}
        <button className="btn-small">btn-small</button>
        {/*icon small*/}
        <BtnIcon icon={<XIcon />} htmlFor="" />
        <div className=" w-56 bg-gray-200">
          {/* Menu without bg color */}
          <MenuList to="/" title="Option 1" />
        </div>

        {/* Modal */}
        <Modal
          onOpen={
            <p className="btn btn-outline">
              open modal please avoid using button tag
            </p>
          }
        >
          <div>
            {/* modal body */}
            <h2>Register</h2>
            <p className="py-4">You've been selected for a</p>
            <Input
              label="test"
              onChange={() => {}}
              placeholder="Enter your input"
              errMsg="Error Massage"
              error={true}
            />
          </div>
        </Modal>
      </>
    </div>
  );
}
