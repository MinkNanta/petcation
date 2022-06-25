import { BACKSTAGEPAGE, NEXTSTAGEPAGE } from '../actions/CreateHouseAction';

export const initial = {
  stagePage: 0,
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

    default: {
      return state;
    }
  }
}
