import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BtnIcon from "../../../common/BtnIcon";
import Input from "../../../common/Input";
import Modal from "../../../common/Modal";

function Login() {
  const [email, setEmail] = useState(" ");
  const [step, setStep] = useState("STEP1");

  console.log(email);
  console.log(step);
  return (
    <div>
      <Modal onOpen={<p className="btn btn-outline">login</p>}>
        {step === 2 ? (
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
            <button className="btn" onClick={() => setStep("2")}>
              Create Account
            </button>
          </div>
        ) : (
          <div>
            <h2> Create your password </h2>
            <div className="mx-4">
              <ul className="list-disc">
                <li>8-20 Characters</li>
                <li>At least One Capital Letter</li>
                <li>At least One Number</li>
                <li>No space</li>
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
            <button className="btn" onClick={() => setStep("3")}>
              Next
            </button>
          </div>
        )}

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
      </Modal>
    </div>
  );
}

export default Login;
