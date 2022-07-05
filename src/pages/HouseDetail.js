import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertGreen from '../common/AlertGreen';
import detail from '../assets/mockup/MOCK_DATA_HOUSE_DETAIL.json';
import UserAddress from '../components/address/UserAddress';
import HouseDetailForm from '../components/myhouse/myHouseDetail/HouseDetailForm';
import HouseInfoFrom from '../components/myhouse/myHouseDetail/HouseInfoFrom';
import { ErrorContext, useError } from '../contexts/ErrorContext';
import EmptyState from '../common/EmtpyState';
import { useAuth } from '../contexts/AuthContext';
import { useHouse } from '../contexts/HouseContext';
import BtnIcon from '../common/BtnIcon';
import { XIcon } from '@heroicons/react/solid';
import uploadImage from '../assets/img/uploadImage.png';
import { updateHouseImageByUserId } from '../api/house';
import Spinner from '../common/Spinner';

export default function HouseDetail() {
  const { user } = useAuth();
  const { feedback } = useError();
  const { houseByUserID, getHouseByUser } = useHouse();
  const housePicInputEl = useRef();

  const [editState, setEditState] = useState(false);
  const [allHousePic, setAllHousePic] = useState([]);
  const [deleteHousePic, setDeleteHousePic] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleEditState = () => {
    setAllHousePic(JSON.parse(houseByUserID.image));
    setDeleteHousePic([]);
    setEditState((p) => !p);
  };

  const handleUpdateImage = async () => {
    try {
      const formData = new FormData();

      console.log(deleteHousePic);
      formData.append('deletePic', deleteHousePic);

      allHousePic.map((el, idx) => {
        if (typeof el === 'object') {
          if (idx === 0) {
            formData.append('cover', el);
          }
          if (idx === 1) {
            formData.append('pic1', el);
          }
          if (idx === 2) {
            formData.append('pic2', el);
          }
          if (idx === 3) {
            formData.append('pic3', el);
          }
          if (idx === 4) {
            formData.append('pic4', el);
          }
          if (idx === 5) {
            formData.append('pic5', el);
          }
          if (idx === 6) {
            formData.append('pic6', el);
          }
        } else {
          if (idx === 0) {
            formData.append('oldCover', el);
          }
          if (idx === 1) {
            formData.append('oldPic1', el);
          }
          if (idx === 2) {
            formData.append('oldPic2', el);
          }
          if (idx === 3) {
            formData.append('oldPic3', el);
          }
          if (idx === 4) {
            formData.append('oldPic4', el);
          }
          if (idx === 5) {
            formData.append('oldPic5', el);
          }
          if (idx === 6) {
            formData.append('oldPic6', el);
          }
        }
      });
      setLoading(true);
      await updateHouseImageByUserId(formData);
      await getHouseByUser();
      setEditState((p) => !p);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (houseByUserID.image) {
      setAllHousePic(JSON.parse(houseByUserID.image));
    }
  }, [houseByUserID]);

  useEffect(() => {
    getHouseByUser();
  }, [user]);

  return (
    <>
      {loading && <Spinner />}
      <div className="space-y-6">
        {houseByUserID.length < 1 ? (
          <EmptyState
            title="Become a host"
            description="Easy step to become a host."
          >
            <Link className="btn-text-line" to="/house/main">
              Become a host
            </Link>
          </EmptyState>
        ) : (
          <>
            {feedback && <AlertGreen />}
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4 ">
                {allHousePic?.map((el, idx) => (
                  <div
                    className="rounded-2xl h-[224px] w-[224px] overflow-hidden relative"
                    key={idx}
                  >
                    <img
                      src={
                        typeof el === 'object' ? URL.createObjectURL(el) : el
                      }
                      alt="house"
                      className="w-full h-full object-cover"
                    />

                    {editState && allHousePic.length > 1 ? (
                      <div
                        className="absolute top-2 right-3 cursor-pointer"
                        onClick={() => {
                          setDeleteHousePic((p) => [
                            ...p,
                            ...allHousePic.splice(idx, 1),
                          ]);
                        }}
                      >
                        <BtnIcon icon={<XIcon />} htmlFor="" />
                      </div>
                    ) : (
                      false
                    )}
                  </div>
                ))}

                {editState && allHousePic.length < 7 ? (
                  <img
                    className="rounded-2xl h-[224px] w-[224px] object-cover"
                    alt="house"
                    src={uploadImage}
                    onClick={() => housePicInputEl.current.click()}
                  />
                ) : (
                  false
                )}

                <input
                  type="file"
                  className="hidden"
                  ref={housePicInputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      allHousePic.push(e.target.files[0]);
                      setAllHousePic([...allHousePic]);
                      housePicInputEl.current.value = '';
                    }
                  }}
                />
              </div>
              <div className="space-x-4">
                {/* <button className="btn-text-line">Remove all</button> */}
                {!editState ? (
                  <button className="btn-text-line" onClick={handleEditState}>
                    Edit Photo
                  </button>
                ) : (
                  <>
                    <button
                      className="btn-text-line"
                      onClick={handleUpdateImage}
                    >
                      Save
                    </button>
                    <button className="btn-text-line" onClick={handleEditState}>
                      Cancle
                    </button>
                  </>
                )}
              </div>
            </div>
            <div className="w-[70%]">
              <UserAddress />
              <HouseDetailForm />
              <HouseInfoFrom />
            </div>
          </>
        )}
      </div>
    </>
  );
}
