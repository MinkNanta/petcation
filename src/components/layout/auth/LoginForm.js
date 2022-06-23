import React, { useContext, useState } from "react";
import Input from "../../../common/Input";
import Modal from "../../../common/Modal";
import { AuthContext } from "../../../contexts/AuthContext";
import { ErrorContext } from "../../../contexts/ErrorContext";
function LoginForm() {
  const [uId, setUId] = useState(" ");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      await login(uId, password);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  console.log(uId);
  console.log(password);
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
            placeholder="Enter your input"
            errMsg="Error Massage"
            error={true}
            value={uId}
            onChange={(e) => setUId(e.target.value)}
          />
          <Input
            label="Password"
            placeholder="Enter Your Password"
            type="password"
            errMsg="Error Massage"
            error={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
