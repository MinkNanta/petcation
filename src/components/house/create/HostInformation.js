import { nextStagePage } from '../../../actions/CreateHouseAction';
import Input from '../../../common/Input';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';

function HostInformation() {
  const { dispatch } = useCreateHouse();

  const handleClickNext = () => {
    dispatch(nextStagePage());
  };
  return (
    <div className="w-[508px] h-[640px] relative">
      <div className="text-2xl">Host Information</div>
      <div className="mt-6 ">
        <Input
          value="John"
          // type="text"
          // option="option"
          label="First Name"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="mt-2">
        <Input
          value="Doe"
          // type="text"
          // option="option"
          label="Last Name"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="mt-2">
        <Input
          value="084-622-9466"
          // type="text"
          // option="option"
          label="Phone Number"
          onChange={() => {}}
          placeholder="Enter your input"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="mt-2">
        <Input
          // value=""
          // type="text"
          // option="option"
          label="Email"
          onChange={() => {}}
          placeholder="john@gmail.com"
          errMsg="Error Massage"
          error={false}
        />
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HostInformation;
