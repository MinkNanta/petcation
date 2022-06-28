import {
  BACKSTAGEPAGE,
  HOST_INFORMATION,
  NEXTSTAGEPAGE,
} from '../actions/CreateHouseAction';

export const initial = {
  stagePage: 0,
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
    image: null,
    isPetFood: null,
    isGrooming: null,
    isAirCondition: null,
    isPetStaff: null,
    isPetTraining: null,
    isPickupDropOff: null,
    isLitterChangedDaily: null,
    isAirFilter: null,
    status: null,
  },
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

    default: {
      return state;
    }
  }
}
