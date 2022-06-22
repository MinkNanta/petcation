import { XIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import BtnIcon from "../../../common/BtnIcon";

function Login() {
  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button ">
        Login
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="my-modal" className=" flex justify-end">
            <BtnIcon icon={<XIcon />} htmlFor="my-modal" />
          </label>
          <h1 className="font-bold text-lg">Register</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6 ">
              <label className="btn" htmlFor="my-modal">
                login
              </label>
            </div>
          </div>
          <div className="divider">Or</div>

          <div className="flex justify-center mt-4">
            <button className="btn btn-outline">Signup with Google</button>
          </div>
          <div className="flex justify-center mt-4">
            <button className="btn btn-outline">Signup with Facebook</button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-gray-500">Already have an account? </p>
            <Link to="/" className="text-orange-500">
              sign in
            </Link>
          </div>
        </label>
      </label>
    </div>
  );
}

export default Login;
