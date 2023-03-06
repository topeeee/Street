import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Colors = {
  primary: '#772379',
  secondary: '#DFA4FF',
  secondaryLight: '#F5E4FF',
  secondaryLight2: '#FCF6FF',
  tertiary: '#3F1955',
  alternative: '#F7CCAC',
  black: '#110416',
  white: '#FFFFFF',
  grey: '#706873',
  lightgrey: '#E7E1EA',
  lightgrey2: '#CFCDD0',
  lightgrey3: '#828282',
  lightgrey4: '#DBD9DC',
  red: '#D84E66',
  placeholder: '#a9a9a9',
  green: '#468939',
};

const Style = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowBtw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(187, 145, 188, 0.2)',
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(187, 145, 188, 0.2)',
  },
  p5: {
    padding: RFValue(5),
  },
  p10: {
    padding: RFValue(10),
  },
  p15: {
    padding: RFValue(15),
  },
  p20: {
    padding: RFValue(20),
  },

  px5: {
    paddingHorizontal: RFValue(5),
  },
  px10: {
    paddingHorizontal: RFValue(10),
  },
  px15: {
    paddingHorizontal: RFValue(15),
  },
  px20: {
    paddingHorizontal: RFValue(20),
  },

  py5: {
    paddingVertical: RFValue(5),
  },
  py10: {
    paddingVertical: RFValue(10),
  },
  py15: {
    paddingVertical: RFValue(15),
  },
  py20: {
    paddingVertical: RFValue(20),
  },

  pt5: {
    paddingTop: RFValue(5),
  },
  pt10: {
    paddingTop: RFValue(10),
  },
  pt15: {
    paddingTop: RFValue(15),
  },
  pt20: {
    paddingTop: RFValue(20),
  },

  pb5: {
    paddingBottom: RFValue(5),
  },
  pb10: {
    paddingBottom: RFValue(10),
  },
  pb15: {
    paddingBottom: RFValue(15),
  },
  pb20: {
    paddingBottom: RFValue(20),
  },

  pl5: {
    paddingLeft: RFValue(5),
  },
  pl10: {
    paddingLeft: RFValue(10),
  },
  pl15: {
    paddingLeft: RFValue(15),
  },
  pl20: {
    paddingLeft: RFValue(20),
  },

  pr5: {
    paddingRight: RFValue(5),
  },
  pr10: {
    paddingRight: RFValue(10),
  },
  pr15: {
    paddingRight: RFValue(15),
  },
  pr20: {
    paddingRight: RFValue(20),
  },

  m5: {
    margin: RFValue(5),
  },
  m10: {
    margin: RFValue(10),
  },
  m15: {
    margin: RFValue(15),
  },
  m20: {
    margin: RFValue(20),
  },

  mx5: {
    marginHorizontal: RFValue(5),
  },
  mx10: {
    marginHorizontal: RFValue(10),
  },
  mx15: {
    marginHorizontal: RFValue(15),
  },
  mx20: {
    marginHorizontal: RFValue(20),
  },

  my5: {
    marginVertical: RFValue(5),
  },
  my10: {
    marginVertical: RFValue(10),
  },
  my15: {
    marginVertical: RFValue(15),
  },
  my20: {
    marginVertical: RFValue(20),
  },

  mt5: {
    marginTop: RFValue(5),
  },
  mt10: {
    marginTop: RFValue(10),
  },
  mt15: {
    marginTop: RFValue(15),
  },
  mt20: {
    marginTop: RFValue(20),
  },
  mt30: {
    marginTop: RFValue(30),
  },
  mt40: {
    marginTop: RFValue(40),
  },

  mb5: {
    marginBottom: RFValue(5),
  },
  mb10: {
    marginBottom: RFValue(10),
  },
  mb15: {
    marginBottom: RFValue(15),
  },
  mb20: {
    marginBottom: RFValue(20),
  },
  mb40: {
    marginBottom: RFValue(40),
  },

  ml5: {
    marginLeft: RFValue(5),
  },
  ml10: {
    marginLeft: RFValue(10),
  },
  ml15: {
    marginLeft: RFValue(15),
  },
  ml20: {
    marginLeft: RFValue(20),
  },

  mr5: {
    marginRight: RFValue(5),
  },
  mr10: {
    marginRight: RFValue(10),
  },
  mr15: {
    marginRight: RFValue(15),
  },
  mr20: {
    marginRight: RFValue(20),
  },
});

export {Style, Colors};
