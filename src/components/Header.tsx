import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Style} from '../layout/Themes';
import Icons from '../assets/icons';

export type HeaderProps = {
  label?: string;
  onGoBack?: () => void;
  style?: any;
};

const Header = ({label, onGoBack, style}: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, style]}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() =>
          typeof onGoBack === 'function' ? onGoBack() : navigation.goBack()
        }
        style={[styles.imgContainer]}>
        <Image
          resizeMode="contain"
          source={Icons.arrowLeft}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={Style.flex1}>
        <Text numberOfLines={1} style={styles.label}>
          {label}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: RFValue(24), height: RFValue(24)},
  image2: {width: RFValue(32), height: RFValue(32)},
  header: {
    ...Style.row,
    ...Style.px15,
    ...Style.py5,
    alignItems: 'center',
    height: RFValue(45),
    backgroundColor: Colors.secondaryLight,
    shadowColor: Colors.black,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 4,
  },
  imgContainer: {
    ...Style.center,
    height: RFValue(34),
    width: RFValue(34),
  },
  label: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
