import { XIcon } from "@heroicons/react/solid";
import React from "react";
import BtnIcon from "./BtnIcon";

export default function Modal({ children, onOpen, name }) {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor={name}>{onOpen}</label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id={name} className="modal-toggle" />
      <label className="modal cursor-pointer ">
        <div className="bg-white rounded-3xl p-9  w-[34vw]">
          <div className="">
            <label htmlFor={name}>
              <BtnIcon icon={<XIcon />} htmlFor={name} />
            </label>
          </div>
          {children}
        </div>
      </label>
    </>
  );
}
