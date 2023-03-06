import * as React from 'react';
import {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ripple from 'react-native-material-ripple';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {Colors, Style} from '../layout/Themes';
import Icons from '../assets/icons';

export type DatePickerButton = {
  value: string;
  label: string;
  onChangeText: (arg: string) => void;
};

const DatePickerButton = ({value, label, onChangeText}: DatePickerButton) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOnchangeText = (selectedValue: any) => {
    if (typeof onChangeText === 'function') {
      onChangeText(moment(selectedValue).format('YYYY-MM-DD'));
      setIsVisible(false);
    }
  };
  return (
    <View>
      <Ripple
        onPress={() => setIsVisible(true)}
        style={[styles.container, Style.my10]}>
        {Boolean(value) && (
          <View style={styles.animated}>
            <Text
              style={{
                color: Colors.lightgrey3,
                fontSize: RFValue(10),
              }}>
              {label}
            </Text>
          </View>
        )}
        <View
          style={{
            flex: 1,
            justifyContent: value ? 'flex-end' : 'center',
          }}>
          <View style={styles.input}>
            <Text
              numberOfLines={1}
              style={{
                color: value ? Colors.black : Colors.placeholder,
                fontSize: RFValue(14),
              }}>
              {value ? value : label}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={Icons.calender}
          />
        </View>
      </Ripple>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleOnchangeText}
        onCancel={() => setIsVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: RFValue(4),
    height: RFValue(55),
    paddingHorizontal: RFValue(10),
  },
  input: {
    height: RFValue(40),
    fontSize: RFValue(14),
    padding: 0,
    justifyContent: 'center',
    paddingRight: RFValue(25),
  },
  image: {
    width: RFValue(20),
    height: RFValue(20),
  },
  animated: {
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 2,
    paddingHorizontal: RFValue(10),
    paddingTop: RFValue(5),
  },
  imageContainer: {
    position: 'absolute',
    right: RFValue(10),
    top: RFValue(18),
    zIndex: 2,
  },
});

export default DatePickerButton;
