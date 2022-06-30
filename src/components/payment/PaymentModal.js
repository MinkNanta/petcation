import Modal from '../../common/Modal';
import Input from '../../common/Input';
import omiseLogo from '../../assets/img/omise.png';
import axios from '../../config/axios';
import { useState } from 'react';

export default function PaymentModal() {
  const { Omise } = window;
  const [paymentInputs, setPaymentInputs] = useState({
    expiration_date: '',
    name: '',
    number: '',
    security_code: '',
  });
  const [errMsg, setErrMsg] = useState({
    expiration_date: '',
    name: '',
    number: '',
    security_code: '',
    submit: '',
  });

  const handleChange = (e, fieldName) => {
    const newVal = { [fieldName]: e.target.value };
    setPaymentInputs((paymentInputs) => {
      return {
        ...paymentInputs,
        ...newVal,
      };
    });
    console.log(paymentInputs);
  };

  const handleSubmitPayment = async () => {
    setErrMsg({
      expiration_date: '',
      name: '',
      number: '',
      security_code: '',
      submit: '',
    });
    const curDate = new Date();
    const selectedDate = new Date(paymentInputs?.expiration_date);

    if (paymentInputs.name === '') {
      setErrMsg((errMsg) => ({ ...errMsg, name: 'Please enter your name' }));
    } else if (paymentInputs.number === '') {
      setErrMsg((errMsg) => ({
        ...errMsg,
        number: 'Please enter your card number',
      }));
    } else if (paymentInputs.number.length !== 16) {
      setErrMsg((errMsg) => ({
        ...errMsg,
        number: 'Card number must be 16 digits long',
      }));
    } else if (paymentInputs.expiration_date === '') {
      setErrMsg((errMsg) => ({
        ...errMsg,
        expiration_date: 'Please select your card expiration date',
      }));
    } else if (curDate >= selectedDate) {
      setErrMsg((errMsg) => ({
        ...errMsg,
        expiration_date: 'Card expiration date is invalid',
      }));
    } else if (paymentInputs.security_code === '') {
      setErrMsg((errMsg) => ({
        ...errMsg,
        security_code: 'Please enter your card CVC code',
      }));
    } else if (paymentInputs.security_code.length > 3) {
      setErrMsg((errMsg) => ({
        ...errMsg,
        security_code: 'CVC code must be 3 digits long',
      }));
    } else {
      Omise.setPublicKey('pkey_test_5s9r39lbskdowhcd41t');

      const tokenParameters = {
        expiration_month: 2,
        expiration_year: 2032,
        name: 'Somchai Prasert',
        number: '4242424242424242',
        security_code: 123,
      };

      await Omise.createToken(
        'card',
        tokenParameters,
        function (statusCode, response) {
          const statusStr = String(statusCode);
          console.log(statusStr);
          if (statusStr.startsWith('4')) {
            setErrMsg((errMsg) => ({
              ...errMsg,
              submit: 'Card information is not valid',
            }));
          } else if (statusStr.startsWith('5')) {
            setErrMsg((errMsg) => ({
              ...errMsg,
              submit: 'There was a problem. Please try again later.',
            }));
          } else {
            // response["id"] is token identifier
            axios.post('/bookings', { token: response.id });
          }
        },
      );
    }
  };

  return (
    <Modal
      title="Booking"
      name="payment"
      onOpen={<p className="btn w-32">Booking</p>}
    >
      <div className="flex flex-col">
        <h2 className="my-4">Credit Card Information</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitPayment();
          }}
        >
          <Input
            label="Name"
            placeholder="Enter Your Name"
            errMsg={errMsg.name}
            error={true}
            value={paymentInputs.name}
            onChange={(e) => {
              handleChange(e, 'name');
            }}
          />
          <Input
            label="Number"
            placeholder="Enter Your Card Number"
            errMsg={errMsg.number}
            error={true}
            value={paymentInputs.number}
            onChange={(e) => {
              handleChange(e, 'number');
            }}
          />
          <Input
            label="Expiry Date"
            placeholder="Enter Your Card Number"
            type="month"
            errMsg={errMsg.expiration_date}
            error={true}
            onChange={(e) => {
              handleChange(e, 'expiration_date');
            }}
          />
          <Input
            label="CVC"
            placeholder="Enter Your CVC Number"
            errMsg={errMsg.security_code}
            error={true}
            onChange={(e) => {
              handleChange(e, 'security_code');
            }}
          />
          <button type="submit" className="btn w-1/4 place-self-center">
            Submit
          </button>
          <label className="label mt-2">
            {errMsg.submit !== '' && (
              <span className="label-text-alt text-red-400">
                {errMsg.submit}
              </span>
            )}
          </label>
        </form>
        <div className="mt-2 mx-auto flex justify-center gap-2 items-center">
          <p className="text-gray-400 font-light text-xs">Powered By </p>
          <img src={omiseLogo} className="w-1/5"></img>
        </div>
      </div>
    </Modal>
  );
}