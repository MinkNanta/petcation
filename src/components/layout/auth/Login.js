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
        <div>
          {/* modal body */}
          <h2>Register</h2>

          <Input
            label="Email"
            onChange={() => {}}
            placeholder="Email"
            errMsg="Error Massage"
            error={true}
          />
          <button className="btn">Create Account</button>
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
      </Modal>
    </div>
  );
}

export default Login;
