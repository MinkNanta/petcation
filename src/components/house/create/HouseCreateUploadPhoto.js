import {
  backStagePage,
  createHouseAction,
} from '../../../actions/CreateHouseAction';
import { useCreateHouse } from '../../../contexts/CreateHouseContext';
import uploadImage from '../../../assets/img/uploadImage.png';
import UploadPhotoItem from './UploadPhotoItem';
import Spinner from '../../../common/Spinner';
import { useState } from 'react';
import { postHouse } from '../../../api/house';
import { useNavigate } from 'react-router-dom';

function HouseCreateUploadPhoto() {
  const { dispatch, data, createHouse } = useCreateHouse();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  console.log(data);

  const handleClickNext = async () => {
    try {
      setLoading(true);
      await dispatch(createHouseAction());
      await postHouse(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      // navigate('/');
    }
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="relative">
      {loading && <Spinner />}
      <div className="text-2xl">Upload photo</div>
      <div className="grid grid-cols-4 gap-4 mb-24">
        <UploadPhotoItem id="0" src={uploadImage} title="Cover" />
        <UploadPhotoItem id="1" src={uploadImage} title="Picture 1" />
        <UploadPhotoItem id="2" src={uploadImage} title="Picture 2" />
        <UploadPhotoItem id="3" src={uploadImage} title="Picture 3" />
        <UploadPhotoItem id="4" src={uploadImage} title="Picture 4" />
        <UploadPhotoItem id="5" src={uploadImage} title="Picture 5" />
        <UploadPhotoItem id="6" src={uploadImage} title="Picture 6" />
      </div>

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small  w-[91px]">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small  w-[91px]">Next</div>
      </div>
    </div>
  );
}

export default HouseCreateUploadPhoto;
