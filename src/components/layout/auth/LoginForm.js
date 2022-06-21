import React from "react";
import { Link } from "react-router-dom";
function LoginForm() {
  return (
    <div>
      <label htmlFor="my-modal" className="btn modal-button ">
        Login
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label class="modal-box relative" htmlFor="">
          <label
            for="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
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
                Login
              </label>
            </div>
          </div>
          <div className="divider">Or</div>

          <div className="flex justify-center mt-4">
            <button className="btn w-80">Signup with Google</button>
          </div>
          <div className="flex justify-center mt-4">
            <button className="btn w-80">Signup with Facebook</button>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-gray-500">Already have an account? </p>
            <Link to="/" className="text-orange-500">
              sign in
            </Link>
          </div>

          {/* <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div> */}
        </label>
      </label>
      {/* <label for="my-modal-4" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <h3 class="text-lg font-bold">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label> */}
    </div>
  );
}

export default LoginForm;
