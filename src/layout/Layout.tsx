import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';
import {Style} from './Themes';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export type LayoutProps = {
  children: any;
  label?: string;
  header?: boolean;
  onGoBack?: () => void;
  layoutStyle?: any;
  headerStyle?: any;
};

const Layout = ({
  children,
  label,
  header,
  onGoBack,
  layoutStyle,
  headerStyle,
}: LayoutProps) => {
  return (
    <View style={[styles.container, Style.flex1, layoutStyle]}>
      <SafeAreaView style={Style.flex1}>
        {header && (
          <Header style={headerStyle} label={label} onGoBack={onGoBack} />
        )}
        <View style={[Style.flex1, Style.px20]}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
});

export default Layout;
