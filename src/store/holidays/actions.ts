import {Dispatch} from 'redux';
import axios from 'axios';
import moment from 'moment';
import uuid from 'react-native-uuid';
import {Holiday} from './types';
import {navigationRef} from '../../navigations/Navigator';

export const SET_HOLIDAYS = 'SET_HOLIDAYS';

export const UPDATE_HOLIDAY = 'UPDATE_HOLIDAY';

interface SetHolidaysAction {
  type: typeof SET_HOLIDAYS;
  holidays: Holiday[];
}

export type UpdateHolidayAction = {
  type: typeof UPDATE_HOLIDAY;
  holiday: Holiday;
  updatedFields: Partial<Holiday>;
};

export type HolidaysAction = SetHolidaysAction | UpdateHolidayAction;

export function fetchHolidays() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://www.gov.uk/bank-holidays.json');
      const bankHolidaysObj = response.data['england-and-wales'].events;
      const bankHolidaysArr = Object.keys(bankHolidaysObj).map(
        key => bankHolidaysObj[key],
      );

      // Filter next 6 months and next 5 unique bank holidays
      const uniqueBankHolidays: Holiday[] = [];
      const sixMonthsFromNow = moment().add(6, 'months');
      let i = 0;

      while (uniqueBankHolidays.length < 5 && i < bankHolidaysArr.length) {
        const bankHoliday = bankHolidaysArr[i];
        const bankHolidayDate = moment(bankHoliday.date);
        if (bankHolidayDate.isBetween(moment(), sixMonthsFromNow, null, '[]')) {
          const isUnique = !uniqueBankHolidays.find(
            (item: Holiday) => item.title === bankHoliday.title,
          );
          if (isUnique) {
            uniqueBankHolidays.push({...bankHoliday, id: uuid.v4()});
          }
        }
        i++;
      }
      dispatch(setHolidays(uniqueBankHolidays));
    } catch (error) {
      console.error(error);
    }
  };
}

export function setHolidays(holidays: Holiday[]): SetHolidaysAction {
  return {
    type: SET_HOLIDAYS,
    holidays,
  };
}

export const updateHoliday = (
  holiday: Holiday,
  updatedFields: Partial<Holiday>,
): UpdateHolidayAction => {
  navigationRef.goBack();
  return {
    type: UPDATE_HOLIDAY,
    holiday,
    updatedFields,
  };
};
