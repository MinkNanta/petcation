import { CalendarIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import Input from "../common/Input";
import vacationIcon from "../assets/img/vacation.png";

export default function HouseSetting() {
  const [checked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // =============== Validator

  const [validate, setValidate] = useState({});

  const validateInput = () => {
    const newValidate = {};
    if (!startDate || !endDate) newValidate.error = "Date is required";
    setValidate(newValidate);
    console.log(newValidate);
  };

  const handelSubmit = () => {
    validateInput();
  };

  return (
    <div>
      <h4>Setting</h4>
      <div className="flex gap-10 mt-10 ">
        {/* <input
          type="checkbox"
          class="toggle mt-1"
        /> */}
        <img
          src={vacationIcon}
          alt="vacationIcon"
          className="w-24 h-full opacity-80"
        />
        {editMode ? (
          <div className="w-full">
            <h6 className="font-semibold mb-1">Vacation mode</h6>
            <p>During vacation mode user can’t booking your house </p>
            <p>Vacation date : 06/20/25555 - 06/20/25555</p>
            <button
              className="btn-text-line"
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              Set Date
            </button>
          </div>
        ) : (
          <div className="w-full">
            <h6 className="font-semibold mb-1">Vacation mode</h6>
            <div className="flex gap-3 mt-1">
              <Input
                value={startDate}
                type="date"
                option=""
                label="Start date"
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
                placeholder="Enter your input"
                errMsg={validate.error}
                error={validate}
              />
              <Input
                value={endDate}
                type="date"
                option=""
                label="End date"
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                placeholder="Enter your input"
              />
            </div>

            <div className="flex gap-4 mt-2">
              <button className="btn-small" onClick={handelSubmit}>
                Save
              </button>
              <button
                className="btn-text"
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
