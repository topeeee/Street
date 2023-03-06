import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import {updateHoliday} from '../store/holidays/actions';
import {Holiday} from '../store/holidays/types';
import {Colors} from '../layout/Themes';
import Layout from '../layout/Layout';
import AppTextInput from '../components/AppTextInput';
import PrimaryButton from '../components/PrimaryButton';
import DatePicker from '../components/DatePicker';
import {EditHolidayProps} from '../navigations/types';

const EditHolidayScreen = ({route}: EditHolidayProps) => {
  let holiday = route?.params.holiday;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(holiday.title);
  const [date, setDate] = useState(holiday.date);

  const handleSave = () => {
    if (!title) {
      return alert('Enter title');
    }
    const updatedHoliday: Holiday = {...holiday, title, date};
    dispatch(updateHoliday(updatedHoliday, {title, date}));
  };

  return (
    <Layout
      label="Edit Holiday"
      header={true}
      layoutStyle={{backgroundColor: Colors.secondaryLight}}>
      <View testID="edit-holiday-screen" style={styles.container}>
        <View>
          <AppTextInput
            testID="title-input"
            label="Title"
            value={title}
            onChangeText={setTitle}
          />
          <DatePicker label="Date" value={date} onChangeText={setDate} />
        </View>
        <PrimaryButton label="Save" onPress={handleSave} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: '50%',
    justifyContent: 'center',
  },
});

export default EditHolidayScreen;
