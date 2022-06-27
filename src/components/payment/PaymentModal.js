import Modal from '../../common/Modal';
import Input from '../../common/Input';
import omise from '../../assets/img/omise.png';
import axios from '../../config/axios';

export default function PaymentModal() {
  const { Omise } = window;

  const handleSubmitPayment = async () => {
    Omise.setPublicKey('pkey_test_5s9r39lbskdowhcd41t');

    const tokenParameters = {
      city: 'New York',
      country: 'US',
      expiration_month: 2,
      expiration_year: 2032,
      name: 'Somchai Prasert',
      number: '4242424242424242',
      phone_number: '0123456789',
      postal_code: 10320,
      security_code: 123,
      state: 'NY',
      street1: '476 Fifth Avenue',
    };

    await Omise.createToken(
      'card',
      tokenParameters,
      function (statusCode, response) {
        // response["id"] is token identifier
        axios.post('/bookings', { token: response.id });
      },
    );
  };

  return (
    <Modal name="payment" onOpen={<p className="btn w-32">Booking</p>}>
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
            errMsg=""
            error=""
            value=""
            onChange={() => {}}
          />
          <Input
            label="Number"
            placeholder="Enter Your Card Number"
            errMsg=""
            error=""
            value=""
            onChange={() => {}}
          />
          <Input
            label="Expiry Date"
            placeholder="Enter Your Card Number"
            type="month"
            errMsg=""
            error=""
            onChange={() => {}}
          />
          <Input
            label="CVC"
            placeholder="Enter Your CVC Number"
            errMsg=""
            error=""
            onChange={() => {}}
          />
          <button type="submit" className="btn w-1/4 place-self-center">
            Submit
          </button>
        </form>
        <div className="mt-4 mx-auto flex justify-center gap-2 items-center">
          <p className="text-gray-400 font-light text-xs">Powered By </p>
          <img src={omise} className="w-1/5"></img>
        </div>
      </div>
    </Modal>
  );
}
