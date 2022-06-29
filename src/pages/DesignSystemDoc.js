import React, { useState } from 'react';

import BtnIcon from '../common/BtnIcon';
import { XIcon } from '@heroicons/react/solid';
import Input from '../common/Input';
import MenuList from '../common/MenuList';
import Textarea from '../common/Textarea';
import InputDropdown from '../common/InputDropdown';
import Checkbox from '../common/Checkbox';
import Modal from '../common/Modal';
import InputWithSuffix from '../common/InputWithSuffix';
import Breadcrumb from '../common/Breadcrumb';
import { Link } from 'react-router-dom';
import CardList from '../common/CardList';
import TitleHeder from '../common/TitleHeder';
import UserAddress from '../components/address/UserAddress';
import HouseDetailForm from '../components/myhouse/myHouseDetail/HouseDetailForm';
import HouseInfoFrom from '../components/myhouse/myHouseDetail/HouseInfoFrom';

export default function DesignSystemDoc() {
  const [valueCheck, setValueCheck] = useState(false);
  const [valueDropDown, setValueDropDown] = useState('');
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
            value="test"
            type="text"
            option="option"
            label="test"
            onChange={() => {}}
            placeholder="Enter your input"
            errMsg="Error Massage"
            error={true}
          />
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

        {/* button group */}
        <div className="flex gap-4">
          <button className="btn-text">Cancel</button>
          <button className="btn-small">Save</button>
        </div>

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

        <Breadcrumb>
          <ul>
            <li>
              <Link to={'#'}>Home</Link>
            </li>
            <li>
              <Link to={'#'}>my count</Link>
            </li>
          </ul>
        </Breadcrumb>

        {/* Card list item */}
        <CardList
          src="https://images.unsplash.com/photo-1655915382353-8f89f9bbdb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60"
          title="Random name"
          date="Date 6/24/2022 - 6/26/2022"
          detail="2 Cat   |   Ower food"
        />

        {/* title heder */}

        <TitleHeder title="House address">
          <button className="btn-text">Cancel</button>
          <button className="btn-small">Save</button>
        </TitleHeder>

        {/* divider */}

        <div className="divider"></div>
        {/* From */}
        <UserAddress />
        <HouseDetailForm />
        <HouseInfoFrom />
      </>
    </div>
  );
}
