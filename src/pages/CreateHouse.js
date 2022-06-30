import { useCreateHouse } from '../contexts/CreateHouseContext';
import HostAddress from '../components/house/create/HostAddress';
import HouseType from '../components/house/create/HouseType';
import HouseFor from '../components/house/create/HouseFor';
import HouseDetail from '../components/house/create/HouseDetail';
import HostInformation from '../components/house/create/HostInformation';
import HouseInformation from '../components/house/create/HouseInformation';
import MoreInformation from '../components/house/create/MoreInformation';
import HouseCreateUploadPhoto from '../components/house/create/HouseCreateUploadPhoto';
import petCreateHouse from '../assets/videos/petCreateHouse.mp4';

export default function CreateHouse() {
  const { stagePage } = useCreateHouse();

  return (
    <div className="my-6 flex justify-center gap-12 flex-wrap">
      {stagePage === 7 ? (
        false
      ) : (
        <div className="abosulute">
          <video
            className="object-cover h-[640px] w-[500px] rounded-3xl"
            src={petCreateHouse}
            autoPlay
            loop
            muted
          ></video>
        </div>
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
