import React, { useContext, useState } from 'react';
import Input from '../../../common/Input';
import Modal from '../../../common/Modal';
import { AuthContext } from '../../../contexts/AuthContext';
import { ErrorContext } from '../../../contexts/ErrorContext';
import validator from 'validator';
import {
  ArrowCircleRightIcon,
  BanIcon,
  LoginIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
import Alert from '../../../common/Alert';
import Logingoogle from './Logingoogle';

function LoginForm({ className, title }) {
  const [uId, setUId] = useState('');
  const [apiError, setApiError] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState({});
  const { login } = useContext(AuthContext);
  const { setError } = useContext(ErrorContext);

  const validateInput = () => {
    const newValidate = {};
    if (!password) newValidate.password = 'password is required';
    if (!validator.isEmail(uId)) newValidate.email = 'email format is invalid ';
    setValidate(newValidate);
  };

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();
      setApiError('');
      validateInput();
      await login(uId, password);
    } catch (err) {
      console.log(err);

      setError(err.response.data.message);
      setApiError(err.response.data.message);
    }
  };

  return (
    <div>
      <Modal
        title={title ? title : 'Sign in'}
        icon={<ArrowCircleRightIcon className="w-5 h-5" />}
        onClick={() => {
          setUId('');
          setPassword('');
          setValidate('');
          setApiError('');
        }}
        className={className}
      >
        <div>
          {/* modal body */}
          <h2 className="mb-8">Sign in</h2>
          {apiError && <Alert />}

          <Input
            label="Email"
            placeholder="Enter Your Password"
            errMsg={validate.email}
            error={validate.email}
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

          <button className="btn" type="button" onClick={handleSubmitLogin}>
            Sign in
          </button>
        </div>
        <div className="divider">Or</div>
        <div className="flex justify-center mt-4">
          <Logingoogle title="Sign in" />
        </div>
        <div className="flex justify-center mt-4">
          <button className="btn btn-outline">Sign in with Facebook</button>
        </div>
      </Modal>
    </div>
  );
}

export default LoginForm;
