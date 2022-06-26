import { useCreateHouse } from '../contexts/CreateHouseContext';
import HostAddress from '../components/house/create/HostAddress';
import HouseType from '../components/house/create/HouseType';
import HouseFor from '../components/house/create/HouseFor';
import HouseDetail from '../components/house/create/HouseDetail';
import HostInformation from '../components/house/create/HostInformation';
import HouseInformation from '../components/house/create/HouseInformation';
import MoreInformation from '../components/house/create/MoreInformation';
import HouseCreateUploadPhoto from '../components/house/create/HouseCreateUploadPhoto';

export default function CreateHouse() {
  const { stagePage } = useCreateHouse();

  return (
    <div className="my-6 flex justify-center gap-12 flex-wrap">
      {stagePage === 7 ? (
        false
      ) : (
        <img
          className="h-[640px] w-[500px] rounded-3xl"
          src="https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214373.jpg?t=st=1655897556~exp=1655898156~hmac=43c33b2d53a7bf6c8db345824d1fa0b5525443a60b09ead521fa1c07a8d32cd7&w=1800"
        />
      )}
      {stagePage === 0 ? <HostInformation /> : false}
      {stagePage === 1 ? <HostAddress /> : false}
      {stagePage === 2 ? <HouseType /> : false}
      {stagePage === 3 ? <HouseFor /> : false}
      {stagePage === 4 ? <HouseDetail /> : false}
      {stagePage === 5 ? <HouseInformation /> : false}
      {stagePage === 6 ? <MoreInformation /> : false}
      {stagePage === 7 ? <HouseCreateUploadPhoto /> : false}
    </div>
  );
}
