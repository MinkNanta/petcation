import React, { useEffect, useState } from 'react';
import Input from '../../../common/Input';
import TitleHeder from '../../../common/TitleHeder';
import { useAuth } from '../../../contexts/AuthContext';
import { useHouse } from '../../../contexts/HouseContext';
import Textarea from '../../../common/Textarea';
import Checkbox from '../../../common/Checkbox';
import InputDropdown from '../../../common/InputDropdown';
import InputWithSuffix from '../../../common/InputWithSuffix';
import Alert from '../../../common/Alert';
import { useError } from '../../../contexts/ErrorContext';
import Spinner from '../../../common/Spinner';

export default function HouseDetailForm({ onClickCancel, onClickSave }) {
  const { error, setError } = useError();
  let clicked;

  const {
    houseDetail,
    handleChangeInput,
    changedHouseDetail,
    houseByUserID,
    getHouseByUser,
    setChangeHouseDetail,
    setHouseDetail,
    fetch,
    setFetch,
    handleUpdateHouseDetail,
    loading,
  } = useHouse();

  // const [fetch, setFetch] = useState(false);

  useEffect(() => {
    getHouseByUser();
  }, [fetch]);

  useEffect(() => {
    setHouseDetail(houseByUserID);
  }, [houseByUserID, fetch]);
  console.log(error);

  return (
    <div>
      {/* <Spinner /> */}
      {loading && <Spinner />}
      <TitleHeder title="House detail" />
      {error && <Alert />}
      <div>
        <Input
          value={houseDetail?.name}
          name="name"
          label="Name"
          onChange={(event) => handleChangeInput(event)}
          errMsg="Error Massage"
          error={false}
        />
        <Input
          value={houseDetail?.price ?? ''}
          name="price"
          label="Price per night"
          onChange={(event) => handleChangeInput(event)}
          errMsg="Error Massage"
          error={false}
        />

        <InputDropdown
          name="type"
          label="House type"
          value={houseDetail?.type ?? ''}
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
          value={houseDetail?.petType ?? ''}
          onChange={(event) => handleChangeInput(event)}
          errMsg="Error Massage"
          error={false}
        >
          <option value="CAT">Cat</option>
          <option value="DOG">Dog</option>
        </InputDropdown>

        <InputWithSuffix
          name="size"
          type="text"
          suffix="sqrt"
          label="Size"
          value={houseDetail?.size ?? ''}
          onChange={(event) => handleChangeInput(event)}
          errMsg="Error Massage"
          error={false}
        />

        {changedHouseDetail && (
          <div div className="flex gap-4 w-[40%] mt-4">
            <button
              className="btn flex-shrink"
              onClick={handleUpdateHouseDetail}
            >
              Save
            </button>

            <button
              className="btn btn-outline flex-shrink "
              onClick={() => {
                setFetch((p) => !p);
                setChangeHouseDetail(false);
                setHouseDetail(houseByUserID);
              }}
            >
              Cancel
            </button>
          </div>
        )}
        <div className="divider"></div>
      </div>
    </div>
  );
}
