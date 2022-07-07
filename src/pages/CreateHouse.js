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
import HousePin from '../components/house/create/HousePin';

export default function CreateHouse() {
  const { stagePage } = useCreateHouse();

  return (
    <div className="my-6 flex justify-center gap-12 flex-wrap">
      {stagePage === 8 ? (
        false
      ) : (
        <div className="h-[620px] w-[40%] rounded-3xl overflow-hidden">
          <video
            className="object-cover  w-full h-full"
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
      {stagePage === 7 ? <HousePin /> : false}
      {stagePage === 8 ? <HouseCreateUploadPhoto /> : false}
    </div>
  );
}
