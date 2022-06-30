import { CalendarIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import Input from '../common/Input';
import vacationIcon from '../assets/img/vacation.png';
import openHouse from '../assets/img/openHouse.png';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';
import { Link } from 'react-router-dom';
import EmptyState from '../common/EmtpyState';
import TitleHeder from '../common/TitleHeder';
import InputDropdown from '../common/InputDropdown';
import AlertGreen from '../common/AlertGreen';
import { useError } from '../contexts/ErrorContext';

export default function HouseSetting() {
  // const [checked, setChecked] = useState(false);
  // const [editMode, setEditMode] = useState(false);
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
  const {
    houseDetail,
    handleChangeInput,
    changedHouseInfo,
    houseByUserID,
    getHouseByUser,
    setChangeHouseInfo,
    setHouseDetail,
    fetch,
    setFetch,
    handleUpdateHouseDetail,
    loading,
  } = useHouse();
  const { feedback } = useError();

  // =============== Validator

  // const [validate, setValidate] = useState({});

  // const validateInput = () => {
  //   const newValidate = {};
  //   if (!startDate || !endDate) newValidate.error = 'Date is required';
  //   setValidate(newValidate);
  // };

  // const handelSubmit = () => {
  //   validateInput();
  // };
  const { user } = useAuth();

  useEffect(() => {
    getHouseByUser();
  }, [fetch]);

  useEffect(() => {
    setHouseDetail(houseByUserID);
  }, [houseByUserID, fetch]);

  return (
    <div className="h-[50vh]">
      <TitleHeder title="Setting" />

      {houseByUserID.length < 1 ? (
        <EmptyState
          title="Become a host"
          description="Easy step to become a host."
        >
          <Link className="btn-text-line" to="/house/main">
            Become a host
          </Link>
        </EmptyState>
      ) : (
        <div className="flex gap-10 mt-10 ">
          {feedback && <AlertGreen />}
          <div className="w-[240px]">
            {houseDetail?.status === 'OPEN' ? (
              <img
                src={openHouse}
                alt="openHouse"
                className="w-full opacity-80 "
              />
            ) : (
              <img
                src={vacationIcon}
                alt="vacationIcon"
                className="w-full opacity-80 scale-95"
              />
            )}
          </div>

          <div className="w-full">
            <h6 className="font-semibold mb-1">Vacation mode</h6>
            <div className="flex gap-3 mt-1">
              <InputDropdown
                name="status"
                label="House status"
                value={houseDetail?.status ?? ''}
                onChange={(event) => handleChangeInput(event)}
                errMsg="Error Massage"
                error={false}
              >
                <option value="OPEN">Active</option>
                <option value="CLOSE">Close</option>
              </InputDropdown>
            </div>
            {changedHouseInfo && (
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
                    setChangeHouseInfo(false);
                    setHouseDetail(houseByUserID);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
