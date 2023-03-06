import {Holiday} from '../store/holidays/types';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  LandingPage: undefined;
  EditHoliday: {holiday: Holiday};
};

export type LandingPageNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LandingPage'
>;

export type LandingPageProps = {
  navigation?: LandingPageNavigationProp;
};

export type EditHolidayRouteProp = RouteProp<RootStackParamList, 'EditHoliday'>;

export type EditHolidayProps = {
  route: EditHolidayRouteProp;
};
