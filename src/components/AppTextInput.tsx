import * as React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Animated, {Layout, ZoomIn, ZoomOut} from 'react-native-reanimated';
import {Colors, Style} from '../layout/Themes';

export type AppTextInputProps = {
  onChangeText: (arg: string) => void;
  value: string;
  isPassword?: boolean;
  label: string;
  multiline?: boolean;
  placeholder?: string;
  testID?: string;
};

const AppTextInput = ({
  onChangeText,
  value,
  isPassword,
  label,
  multiline,
  placeholder,
  testID,
}: AppTextInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={Style.my5}>
      <View style={[styles.container, Style.my5]}>
        {(isFocused || value !== '') && (
          <Animated.View
            style={styles.labelContainer}
            layout={Layout.springify()}
            entering={ZoomIn.duration(300)}
            exiting={ZoomOut.duration(300)}>
            <Text style={styles.label}>{label}</Text>
          </Animated.View>
        )}
        <View
          style={{
            flex: 1,
            justifyContent: isFocused || value ? 'flex-end' : 'center',
          }}>
          <View style={[Style.rowBtw, styles.inputContainer]}>
            <View style={{width: '100%'}}>
              <TextInput
                testID={testID}
                style={[styles.input]}
                onChangeText={onChangeText}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoCapitalize="none"
                multiline={multiline}
                secureTextEntry={isPassword}
                placeholder={placeholder ? placeholder : label}
                placeholderTextColor={Colors.placeholder}
              />
            </View>
          </View>
        </View>
      </View>
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
    color: Colors.black,
    height: RFValue(40),
    fontSize: RFValue(14),
    padding: 0,
  },
  image: {
    width: RFValue(20),
    height: RFValue(20),
  },
  label: {
    color: Colors.primary,
    fontSize: RFValue(10),
  },
  labelContainer: {
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 2,
    paddingHorizontal: RFValue(10),
    paddingTop: RFValue(5),
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
  },
});

export default AppTextInput;
