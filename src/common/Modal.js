import React from "react";

export default function Modal() {
  return (
    <>
      <label htmlFor="my-modal" className="btn btn-primary">
        Open modal
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <input />
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
          />
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
