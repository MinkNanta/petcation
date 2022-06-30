import {
  BACKSTAGEPAGE,
  CREATE_HOUSE,
  HOST_INFORMATION,
  HOUSE_DETAIL,
  HOUSE_FOR,
  HOUSE_INFORMATION,
  HOUSE_TYPE,
  MORE_INFORMATION,
  NEXTSTAGEPAGE,
  UPLOAD_IMAGE,
} from '../actions/CreateHouseAction';
import { postHouse } from '../api/house';

export const initial = {
  stagePage: 0,
  data: null,
  createHouse: {
    name: null,
    type: null,
    petType: null,
    price: null,
    foodPrice: null,
    size: null,
    limit: null,
    checkInTime: null,
    checkOutTime: null,
    petFood: null,
    dailySchedule: null,
    image: {
      cover: '',
      picture1: '',
      picture2: '',
      picture3: '',
      picture4: '',
      picture5: '',
      picture6: '',
    },
    other: null,
    isPetFood: false,
    isGrooming: false,
    isAirCondition: false,
    isPetStaff: false,
    isPetTraining: false,
    isPickupDropOff: false,
    isLitterChangedDaily: false,
    isAirFilter: false,
    status: null,
  },
};

const axiosHouse = async (input) => {
  try {
    await postHouse(input);
  } catch (err) {
    console.log(err);
  }
};

export default function CreateHouseReducer(state, action) {
  switch (action.type) {
    case NEXTSTAGEPAGE: {
      state.stagePage += 1;
      return { ...state };
    }

    case BACKSTAGEPAGE: {
      state.stagePage -= 1;
      return { ...state };
    }

    case HOST_INFORMATION: {
      return { ...state };
    }

    case HOUSE_TYPE: {
      state.createHouse.type = action.payload;
      return { ...state };
    }

    case HOUSE_FOR: {
      state.createHouse.petType = action.payload;
      return { ...state };
    }

    case HOUSE_DETAIL: {
      if (action.payload.id === 'name') {
        state.createHouse.name = action.payload.name;
      }
      if (action.payload.id === 'price') {
        state.createHouse.price = action.payload.price;
      }
      if (action.payload.id === 'size') {
        state.createHouse.size = action.payload.size;
      }
      if (action.payload.id === 'limit') {
        state.createHouse.limit = action.payload.limit;
      }
      return { ...state };
    }

    case HOUSE_INFORMATION: {
      if (action.payload.id === 'checkInTime') {
        state.createHouse.checkInTime = action.payload.checkInTime;
      }
      if (action.payload.id === 'checkOutTime') {
        state.createHouse.checkOutTime = action.payload.checkOutTime;
      }
      if (action.payload.id === 'petFood') {
        state.createHouse.petFood = action.payload.petFood;
      }
      if (action.payload.id === 'foodPrice') {
        state.createHouse.foodPrice = action.payload.foodPrice;
      }
      return { ...state };
    }

    case MORE_INFORMATION: {
      if (action.payload.isPetFood || action.payload.isPetFood === false) {
        state.createHouse.isPetFood = action.payload.isPetFood;
      }
      if (action.payload.isGrooming || action.payload.isGrooming === false) {
        state.createHouse.isGrooming = action.payload.isGrooming;
      }
      if (
        action.payload.isAirCondition ||
        action.payload.isAirCondition === false
      ) {
        state.createHouse.isAirCondition = action.payload.isAirCondition;
      }
      if (action.payload.isPetStaff || action.payload.isPetStaff === false) {
        state.createHouse.isPetStaff = action.payload.isPetStaff;
      }
      if (
        action.payload.isPetTraining ||
        action.payload.isPetTraining === false
      ) {
        state.createHouse.isPetTraining = action.payload.isPetTraining;
      }
      if (
        action.payload.isPickupDropOff ||
        action.payload.isPickupDropOff === false
      ) {
        state.createHouse.isPickupDropOff = action.payload.isPickupDropOff;
      }
      if (
        action.payload.isLitterChangedDaily ||
        action.payload.isLitterChangedDaily === false
      ) {
        state.createHouse.isLitterChangedDaily =
          action.payload.isLitterChangedDaily;
      }
      if (action.payload.isAirFilter || action.payload.isAirFilter === false) {
        state.createHouse.isAirFilter = action.payload.isAirFilter;
      }
      if (action.payload.id === 'dailySchedule') {
        state.createHouse.dailySchedule = action.payload.dailySchedule;
      }
      if (action.payload.id === 'other') {
        state.createHouse.other = action.payload.other;
      }
      return { ...state };
    }

    case UPLOAD_IMAGE: {
      if (
        (action.payload.id === '0' && action.payload.housePic) ||
        (action.payload.id === '0' && action.payload.housePic === '')
      ) {
        state.createHouse.image.cover = action.payload.housePic;
      }
      if (
        (action.payload.id === '1' && action.payload.housePic) ||
        (action.payload.id === '1' && action.payload.housePic === '')
      ) {
        state.createHouse.image.picture1 = action.payload.housePic;
      }
      if (
        (action.payload.id === '2' && action.payload.housePic) ||
        (action.payload.id === '2' && action.payload.housePic === '')
      ) {
        state.createHouse.image.picture2 = action.payload.housePic;
      }
      if (
        (action.payload.id === '3' && action.payload.housePic) ||
        (action.payload.id === '3' && action.payload.housePic === '')
      ) {
        state.createHouse.image.picture3 = action.payload.housePic;
      }
      if (
        (action.payload.id === '4' && action.payload.housePic) ||
        (action.payload.id === '4' && action.payload.housePic === '')
      ) {
        state.createHouse.image.picture4 = action.payload.housePic;
      }
      if (
        (action.payload.id === '5' && action.payload.housePic) ||
        (action.payload.id === '5' && action.payload.housePic === '')
      ) {
        state.createHouse.image.picture5 = action.payload.housePic;
      }
      if (
        (action.payload.id === '6' && action.payload.housePic) ||
        (action.payload.id === '6' && action.payload.housePic === '')
      ) {
        state.createHouse.image.picture6 = action.payload.housePic;
      }
      return { ...state };
    }

    case CREATE_HOUSE: {
      const formData = new FormData();
      formData.append('name', state.createHouse.name);
      formData.append('type', state.createHouse.type);
      formData.append('petType', state.createHouse.petType);
      formData.append('price', state.createHouse.price);
      formData.append('foodPrice', state.createHouse.foodPrice);
      formData.append('size', state.createHouse.size);
      formData.append('limit', state.createHouse.limit);
      formData.append('checkInTime', state.createHouse.checkInTime);
      formData.append('checkOutTime', state.createHouse.checkOutTime);
      formData.append('petFood', state.createHouse.petFood);
      formData.append('dailySchedule', state.createHouse.dailySchedule);
      formData.append('other', state.createHouse.other);
      formData.append('isPetFood', state.createHouse.isPetFood);
      formData.append('isGrooming', state.createHouse.isGrooming);
      formData.append('isAirCondition', state.createHouse.isAirCondition);
      formData.append('isPetStaff', state.createHouse.isPetStaff);
      formData.append('isPetTraining', state.createHouse.isPetTraining);
      formData.append('isPickupDropOff', state.createHouse.isPickupDropOff);
      formData.append(
        'isLitterChangedDaily',
        state.createHouse.isLitterChangedDaily,
      );
      formData.append('isAirFilter', state.createHouse.isAirFilter);
      formData.append('status', state.createHouse.status);

      formData.append('cover', state.createHouse.image.cover);
      formData.append('cover', state.createHouse.image.picture1);
      formData.append('cover', state.createHouse.image.picture2);
      formData.append('cover', state.createHouse.image.picture3);
      formData.append('cover', state.createHouse.image.picture4);
      formData.append('cover', state.createHouse.image.picture5);
      formData.append('cover', state.createHouse.image.picture6);

      state.data = formData;

      return { ...state };
    }

    default: {
      return state;
    }
  }
}
