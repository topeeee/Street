import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {fetchHolidays} from '../store/holidays/actions';
import {RootState} from '../store/reducers';
import Layout from '../layout/Layout';
import {Colors} from '../layout/Themes';
import moment from 'moment';
import {LandingPageProps} from '../navigations/types';

const LandingPage = ({navigation}: LandingPageProps) => {
  const dispatch = useDispatch();
  const holidays = useSelector((state: RootState) => state.holidays.holidays);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchHolidays());
  }, []);

  return (
    <Layout
      layoutStyle={{backgroundColor: Colors.secondaryLight}}
      header={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Next 5 Bank Holidays</Text>
        <FlatList
          data={holidays}
          renderItem={({item}) => (
            <TouchableOpacity
              testID="holiday-container"
              onPress={() => {
                navigation?.navigate('EditHoliday', {holiday: item});
              }}
              key={item.date}
              style={styles.holidayContainer}>
              <Text style={styles.holidayName}>{item.title}</Text>
              <Text style={styles.holidayDate}>
                {moment(item.date).format('MMMM Do YYYY')}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => <Text>Loading...</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  holidayContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  holidayName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  holidayDate: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default LandingPage;
