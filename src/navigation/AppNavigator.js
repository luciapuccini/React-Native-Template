import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

const AppNavigator = () => (
  <NavigationContainer theme={navigatorTheme}>
    <RootNavigator />
  </NavigationContainer>
);
export default AppNavigator;
