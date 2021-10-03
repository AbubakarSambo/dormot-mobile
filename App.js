/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {AuthProvider} from './src/Contexts/Auth';

import Router from './src/Router';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
export default App;
