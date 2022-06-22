import React from "react";

import BtnIcon from "../common/BtnIcon";
import { XIcon } from "@heroicons/react/solid";
import Input from "../common/Input";

export default function DesignSystemDoc() {
  return (
    <div className="space-y-6 mx-auto ">
      <>
        {/* input */}
        <Input
          label="test"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={true}
        />

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

        {/* button */}

        <button className="btn">Create</button>

        {/* button outline */}

        <button className="btn btn-outline">Create</button>

        {/*icon small*/}

        <BtnIcon icon={<XIcon />} htmlFor="" />

        {/*pending input with label*/}
      </>
    </div>
  );
}
