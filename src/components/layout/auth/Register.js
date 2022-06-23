import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../common/Input";
import Modal from "../../../common/Modal";
import { AuthContext } from "../../../contexts/AuthContext";
import { ErrorContext } from "../../../contexts/ErrorContext";

function Register() {
  const [uId, setUId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [apiError, setApiError] = useState("");
  const [validate, setValidate] = useState({});
  const [step, setStep] = useState("STEP1");
  const { signUp } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const validateInput = () => {
    const newValidate = {};
    if (!uId) newValidate.uId = "email is required";
    if (!password) newValidate.password = "password is required";
    if (!confirmPassword) newValidate.password = "confirmPassword is required";
    setValidate(newValidate);
    console.log(newValidate);
  };

  const SubmitCreate = () => {
    if (uId === "") {
      validateInput();
      return;
    }
    setStep("STEP2");
  };
  const handleSubmitSignUp = async (e) => {
    try {
      e.preventDefault();
      setApiError("");
      validateInput();
      await signUp({
        uId,
        password,
        confirmPassword,
      });
      setStep("STEP3");
    } catch (err) {
      setError(err.response.data.message);
      setApiError(err.response.data.message);
    }
  };

  console.log(uId);
  console.log(password);
  console.log(confirmPassword);
  console.log(step);
  return (
    <div>
      <Modal
        name="registerForm"
        onOpen={<p className="btn btn-outline">Register</p>}
      >
        {step === "STEP1" ? (
          <>
            <div>
              {/* modal body */}
              <h2>Register</h2>

              <Input
                label="Email"
                placeholder="Your email"
                errMsg={validate.uId}
                error={validate.uId}
                value={uId}
                onChange={(e) => setUId(e.target.value)}
              />
              {apiError && (
                <span className="label-text-alt text-red-400">{apiError}</span>
              )}
              <button className="btn" type="button" onClick={SubmitCreate}>
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
                errMsg={validate.password}
                error={validate.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                label="Confirm password"
                placeholder="Confirm password"
                type="password"
                errMsg={validate.confirmPassword}
                error={validate.confirmPassword}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {apiError && (
                <span className="label-text-alt text-red-400">{apiError}</span>
              )}
              <button className="btn" onClick={handleSubmitSignUp}>
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
