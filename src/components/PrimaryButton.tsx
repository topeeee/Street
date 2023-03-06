import * as React from 'react';
import {StyleSheet, Text, ActivityIndicator} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ripple from 'react-native-material-ripple';
import {Colors, Style} from '../layout/Themes';

export type PrimaryButtonProps = {
  containerStyle?: any;
  labelStyle?: any;
  onPress: () => void;
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

const PrimaryButton = ({
  containerStyle,
  labelStyle,
  onPress,
  label,
  disabled,
  isLoading,
}: PrimaryButtonProps) => (
  <Ripple
    disabled={disabled || isLoading}
    rippleCentered={true}
    onPress={onPress}
    style={[
      styles.button,
      Style.my5,
      {
        backgroundColor:
          disabled || isLoading ? Colors.lightgrey4 : Colors.primary,
        borderColor: disabled || isLoading ? Colors.lightgrey4 : Colors.primary,
      },
      containerStyle,
    ]}>
    {!isLoading && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    {isLoading && <ActivityIndicator size="small" color={Colors.primary} />}
  </Ripple>
);

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: RFValue(10),
    height: RFValue(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(32),
    width: '100%',
    borderWidth: 1,
  },

  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PrimaryButton;
