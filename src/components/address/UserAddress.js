import Input from '../../common/Input';
import InputDropdown from '../../common/InputDropdown';
import Spinner from '../../common/Spinner';
import TitleHeder from '../../common/TitleHeder';
import { useAddress } from '../../contexts/AddressContext';
import { useAuth } from '../../contexts/AuthContext';

export default function UserAddress({ title }) {
  const {
    changedAddress,
    dropdownAddress,
    userAddress,
    handleChangeAddress,
    handleUpdateAddress,
    setUserAddress,
    setChangeAddress,
    loading,
  } = useAddress();
  const { userOldAddress } = useAuth();

  return (
    <div>
      {loading && <Spinner />}

      <TitleHeder title={title ? title : 'House address'} />
      <div>
        <InputDropdown
          name="provinces"
          label="Province"
          value={userAddress?.provinces}
          onChange={(event) => handleChangeAddress(event)}
          errMsg="Error Massage"
          error={false}
        >
          <option value="">Select your option</option>
          {dropdownAddress.provinces?.map((el) => (
            <option key={el.id} value={el.nameEn}>
              {el.nameEn}
            </option>
          ))}
        </InputDropdown>

        <InputDropdown
          disabled={dropdownAddress?.districts.length < 1}
          name="districts"
          label="District"
          value={userAddress?.districts}
          onChange={(event) => handleChangeAddress(event)}
          errMsg="Error Massage"
          error={false}
        >
          <option value="">Select your option</option>
          {dropdownAddress.districts?.map((el) => (
            <option key={el.id} value={el.nameEn}>
              {el.nameEn}
            </option>
          ))}
        </InputDropdown>
        <InputDropdown
          disabled={dropdownAddress?.subDistricts.length < 1}
          name="subDistricts"
          label="Subdistrict"
          value={userAddress?.subDistricts}
          onChange={(event) => handleChangeAddress(event)}
          errMsg="Error Massage"
          error={false}
        >
          <option value="">Select your option</option>
          {dropdownAddress.subDistricts?.map((el) => (
            <option key={el.id} value={el.nameEn}>
              {el.nameEn}
            </option>
          ))}
        </InputDropdown>

        <Input
          disabled={userAddress?.zipCodes === ''}
          name="zipCodes"
          value={userAddress?.zipCodes}
          label="Postal/Zip Code"
          onChange={(event) => {
            handleChangeAddress(event);
          }}
          placeholder="Enter your zipcode"
          errMsg="Error Massage"
          error={false}
        ></Input>

        <Input
          value={userAddress?.address}
          label="Address"
          name="address"
          onChange={(event) => handleChangeAddress(event)}
          placeholder="Enter your address"
          errMsg="Error Massage"
          error={false}
        />
        {changedAddress && (
          <div div className="flex gap-4 w-[40%] mt-4">
            <button
              className="btn flex-shrink"
              onClick={() => {
                handleUpdateAddress();
              }}
            >
              Save
            </button>

            <button
              className="btn btn-outline flex-shrink "
              onClick={() => {
                setChangeAddress(false);
                setUserAddress(userOldAddress);
              }}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
