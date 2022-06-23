import React, { useContext, useState } from "react";
import Input from "../../../common/Input";
import Modal from "../../../common/Modal";
import { AuthContext } from "../../../contexts/AuthContext";
import { ErrorContext } from "../../../contexts/ErrorContext";
function LoginForm() {
  const [uId, setUId] = useState("");
  const [apiError, setApiError] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const validateInput = () => {
    const newValidate = {};
    if (!uId) newValidate.uId = "email is required";
    if (!password) newValidate.password = "password is required";

    setValidate(newValidate);
    console.log(newValidate);
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      setApiError("");
      validateInput();
      await login(uId, password);
    } catch (err) {
      setError(err.response.data.message);
      setApiError(err.response.data.message);
    }
  };
  console.log(validate.uId);
  return (
    <div>
      <Modal
        name="loginForm"
        onOpen={<p className="btn btn-outline">Sign in</p>}
      >
        <div>
          {/* modal body */}
          <h2>Sign in</h2>

          <Input
            label="Email"
            placeholder="Enter Your Password"
            errMsg={validate.uId}
            error={validate.uId}
            value={uId}
            onChange={(e) => setUId(e.target.value)}
          />

          <Input
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            errMsg={validate.password}
            error={validate.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {apiError && (
            <span className="label-text-alt text-red-400">{apiError}</span>
          )}

          <button className="btn" type="button" onClick={handleSubmitLogin}>
            Sign in
          </button>
        </div>
        <div className="divider">Or</div>
        <div className="flex justify-center mt-4">
          <button className="btn btn-outline">Signup with Google</button>
        </div>
        <div className="flex justify-center mt-4">
          <button className="btn btn-outline">Signup with Facebook</button>
        </div>
      </Modal>
    </div>
  );
}

export default LoginForm;
