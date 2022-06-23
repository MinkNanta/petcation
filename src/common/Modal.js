import { XIcon } from "@heroicons/react/solid";
import React from "react";
import BtnIcon from "./BtnIcon";

export default function Modal({ children, onOpen }) {
  return (
    <>
      {/* <!-- The button to open modal --> */}
      <label htmlFor="my-modal-4">{onOpen}</label>

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label className="modal cursor-pointer ">
        <div className="bg-white rounded-3xl p-9  w-[34vw]">
          <div className="">
            <label htmlFor="my-modal-4">
              <BtnIcon icon={<XIcon />} htmlFor="my-modal-4" />
            </label>
          </div>
          {children}
        </div>
      </label>
    </>
  );
}
