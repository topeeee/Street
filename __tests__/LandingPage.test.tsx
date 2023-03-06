import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LandingPage from '../src/screens/LandingPage';
import {Holiday} from '../src/store/holidays/types';

const mockStore = configureStore([thunk]);
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

describe('LandingPage', () => {
  let store: ReturnType<typeof mockStore>;
  let holidays: Holiday[];

  beforeEach(() => {
    holidays = [
      {
        id: '1',
        title: "New Year's Day",
        date: '2023-01-01',
      },
      {
        id: '2',
        title: 'Good Friday',
        date: '2023-04-14',
      },
      {
        id: '3',
        title: 'Easter Monday',
        date: '2023-04-17',
      },
      {
        id: '4',
        title: 'Early May Bank Holiday',
        date: '2023-05-01',
      },
      {
        id: '5',
        title: 'Spring Bank Holiday',
        date: '2023-05-29',
      },
    ];
    store = mockStore({
      holidays: {holidays},
    });
  });

  it('renders the correct number of holidays', async () => {
    const {findAllByTestId} = render(
      <Provider store={store}>
        <LandingPage />
      </Provider>,
    );

    const holidayContainers = await findAllByTestId('holiday-container');
    expect(holidayContainers.length).toBe(holidays.length);
  });
});
