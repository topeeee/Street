import {Holiday} from './types';
import {HolidaysAction, SET_HOLIDAYS, UPDATE_HOLIDAY} from './actions';

export interface HolidaysState {
  holidays: Holiday[];
}

const initialState: HolidaysState = {
  holidays: [],
};

const holidaysReducer = (
  state = initialState,
  action: HolidaysAction,
): HolidaysState => {
  switch (action.type) {
    case SET_HOLIDAYS:
      return {
        ...state,
        holidays: action.holidays,
      };
    case UPDATE_HOLIDAY:
      return {
        ...state,
        holidays: state.holidays.map(holiday =>
          holiday.id === action.holiday.id
            ? {...holiday, ...action.updatedFields}
            : holiday,
        ),
      };
    default:
      return state;
  }
};

export default holidaysReducer;
