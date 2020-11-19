/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import AppNavigator from '../navigation/AppNavigator';
import * as theme from './theme.json';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

export default App;
