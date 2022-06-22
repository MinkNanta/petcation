import React from "react";

import BtnIcon from "../common/BtnIcon";
import { XIcon } from "@heroicons/react/solid";

export default function DesignSystemDoc() {
  return (
    <div className="space-y-6 mx-auto ">
      <>
        {/* input */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Type here" className="input" />
          <label className="label">
            <span className="label-text-alt text-red-400">Error message</span>
          </label>
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
