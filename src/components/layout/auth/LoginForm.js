import { XIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import BtnIcon from "../../../common/BtnIcon";

function LoginForm() {
  return (
    <div>
      <label htmlFor="my-modal-2" className="btn modal-button ">
        LoginForm
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <label htmlFor="my-modal-2" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="my-modal-2" className=" flex justify-end">
            <BtnIcon icon={<XIcon />} htmlFor="my-modal-2" />
          </label>
          <h1 className="font-bold text-lg">Login</h1>
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
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
            </div>
            <div className="form-control mt-6 ">
              <label className="btn" htmlFor="my-modal-2">
                Login
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

export default LoginForm;
