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
      console.log(data);
      // await dispatch(createHouseAction());
      await postHouse(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      navigate('/?created=true');
    }
  };
  const handleClickBack = () => {
    dispatch(backStagePage());
  };
  return (
    <div className="relative h-[80vh]">
      {loading && <Spinner />}
      <h4 className="my-4">Upload photo</h4>
      <div className="grid grid-cols-4 gap-4 mb-24">
        {createHouse.image.length === 0 ? (
          <UploadPhotoItem src={uploadImage} />
        ) : createHouse.image.length < 7 ? (
          <>
            {createHouse.image.map((el, idx) => (
              <UploadPhotoItem srcHouse={el} idx={idx} />
            ))}
            <UploadPhotoItem src={uploadImage} />
          </>
        ) : (
          createHouse.image.map((el, idx) => (
            <UploadPhotoItem srcHouse={el} idx={idx} />
          ))
        )}

        {/* <UploadPhotoItem id="1" src={uploadImage} title="Picture 1" />
        <UploadPhotoItem id="2" src={uploadImage} title="Picture 2" />
        <UploadPhotoItem id="3" src={uploadImage} title="Picture 3" />
        <UploadPhotoItem id="4" src={uploadImage} title="Picture 4" />
        <UploadPhotoItem id="5" src={uploadImage} title="Picture 5" />
        <UploadPhotoItem id="6" src={uploadImage} title="Picture 6" /> */}
      </div>

      <div className="absolute bottom-0 left-0" onClick={handleClickBack}>
        <div className="btn-small ">Back</div>
      </div>
      <div className="absolute bottom-0 right-0" onClick={handleClickNext}>
        <div className="btn-small ">Next</div>
      </div>
    </div>
  );
}

export default HouseCreateUploadPhoto;
