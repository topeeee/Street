import {combineReducers} from 'redux';
import holidaysReducer from './holidays/reducers';

const rootReducer = combineReducers({
  holidays: holidaysReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
