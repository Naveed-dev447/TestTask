/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Routes from './src/routes';
import { NativeBaseProvider } from 'native-base';
import React from 'react';


function App(): JSX.Element {
  return (
    <NativeBaseProvider>
       <Routes />
    </NativeBaseProvider>
  );
}


export default App;
