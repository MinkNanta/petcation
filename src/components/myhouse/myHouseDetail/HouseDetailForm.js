import React, { useState } from 'react';
import Input from '../../../common/Input';
import TitleHeder from '../../../common/TitleHeder';
import { useAuth } from '../../../contexts/AuthContext';
import { useHouse } from '../../../contexts/HouseContext';
import Textarea from '../../../common/Textarea';
import Checkbox from '../../../common/Checkbox';
import InputDropdown from '../../../common/InputDropdown';
import InputWithSuffix from '../../../common/InputWithSuffix';

export default function HouseDetailForm() {
  const { houseDetail, handleChangeInput, handleCheckBox } = useHouse();

  return (
    <div className="gap-y-5">
      <Input
        value={houseDetail?.name}
        name="name"
        label="Name"
        onChange={(event) => handleChangeInput(event)}
        errMsg="Error Massage"
        error={false}
      />
      <Input
        value={houseDetail?.price}
        name="price"
        label="Price per night"
        onChange={(event) => handleChangeInput(event)}
        errMsg="Error Massage"
        error={false}
      />

      <InputDropdown
        name="type"
        label="House type"
        value={houseDetail?.type}
        onChange={(event) => handleChangeInput(event)}
        errMsg="Error Massage"
        error={false}
      >
        <option value="SINGLE_ROOM">Single Room</option>
        <option value="CAPSULE">Capsule</option>
        <option value="CAGE">Cage</option>
      </InputDropdown>
      <InputDropdown
        name="petType"
        label="House for"
        value={houseDetail?.petType}
        onChange={(event) => handleChangeInput(event)}
        errMsg="Error Massage"
        error={false}
      >
        <option value="CAT">Cat</option>
        <option value="DOG">Dog</option>
      </InputDropdown>

      <InputWithSuffix
        name="size"
        type="number"
        suffix="sqrt"
        label="Size"
        value={houseDetail?.size}
        onChange={(event) => handleChangeInput(event)}
        errMsg="Error Massage"
        error={false}
      />
    </div>
  );
}
