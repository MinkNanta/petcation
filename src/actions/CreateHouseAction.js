export const NEXTSTAGEPAGE = 'nextStagePage';

export const BACKSTAGEPAGE = 'backStagePage';

export const HOST_INFORMATION = 'host_information';

export const HOST_ADDRESS = 'host_address';

export const HOUSE_TYPE = 'house_type';

export const HOUSE_FOR = 'house_for';

export const HOUSE_DETAIL = 'house_detail';

export const HOUSE_INFORMATION = 'house_information';

export const MORE_INFORMATION = 'more_information';

export const UPLOAD_IMAGE = 'upload_image';

export const DELETE_IMAGE = 'delete_image';

export const CREATE_HOUSE = 'create_house';

export const SAVE_PIN = 'save_pin';

export const nextStagePage = () => ({
  type: NEXTSTAGEPAGE,
});

export const backStagePage = () => ({
  type: BACKSTAGEPAGE,
});

export const saveHostInformation = (payload) => ({
  type: HOST_INFORMATION,
  payload,
});

export const saveHostAddress = (payload) => ({
  type: HOST_ADDRESS,
  payload,
});

export const saveHouseType = (payload) => ({
  type: HOUSE_TYPE,
  payload,
});

export const saveHouseFor = (payload) => ({
  type: HOUSE_FOR,
  payload,
});

export const saveHouseDetail = (payload) => ({
  type: HOUSE_DETAIL,
  payload,
});

export const saveHouseInformation = (payload) => ({
  type: HOUSE_INFORMATION,
  payload,
});

export const saveMoreInformation = (payload) => ({
  type: MORE_INFORMATION,
  payload,
});

export const saveUploadImage = (payload) => ({
  type: UPLOAD_IMAGE,
  payload,
});

export const saveDeleteImage = (payload) => ({
  type: DELETE_IMAGE,
  payload,
});

export const createHouseAction = (payload) => ({
  type: CREATE_HOUSE,
  payload,
});

export const savePin = (payload) => ({
  type: SAVE_PIN,
  payload,
});
