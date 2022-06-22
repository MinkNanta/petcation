import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../../common/Input";
import Modal from "../../../common/Modal";

function Register() {
  const [email, setEmail] = useState(" ");
  const [step, setStep] = useState("STEP1");

  console.log(email);
  console.log(step);
  return (
    <div>
      <Modal onOpen={<p className="btn btn-outline">login</p>}>
        {step === "STEP1" ? (
          <>
            {" "}
            <div>
              {/* modal body */}
              <h2>Register</h2>

              <Input
                label="Email"
                placeholder="Email"
                errMsg="Error Massage"
                error={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn"
                type="button"
                onClick={() => setStep("STEP2")}
              >
                Create Account
              </button>
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
          </>
        ) : step === "STEP2" ? (
          <>
            <div>
              <h2> Create your password </h2>
              <div className="mx-4 my-5">
                <ul className="list-disc">
                  <li className="text-gray-400">8-20 Characters</li>
                  <li className="text-gray-400">At least One Capital Letter</li>
                  <li className="text-gray-400">At least One Number</li>
                  <li className="text-gray-400">No space</li>
                </ul>
              </div>
              <Input
                label="password"
                placeholder="password"
                type="password"
                errMsg="Error Massage"
                error={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Confirm password"
                placeholder="Confirm password"
                type="password"
                errMsg="Error Massage"
                error={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn" onClick={() => setStep("STEP3")}>
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="my-7">
                <h4 className="text-center">Your account has been created!</h4>
                <h6 className="text-center text-gray-500">
                  You will able to add an avatar and set other options in your
                  account setting.
                </h6>
              </div>
              <button className="btn" onClick={() => setStep("STEP4")}>
                See my profile
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Register;
