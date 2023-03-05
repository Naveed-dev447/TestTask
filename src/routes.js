import * as React from 'react';
import {LogBox, StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './navigationRef.js';
import SplashScreen from './Components/SplashScreen/SplashScreen.js';
import Login from './Components/auth/Login.js';
import Registration from './Components/registration/Registration.js';
import carsOperation from './Components/carsComponent/carsOperation.js';
// import timeLineComponent from './components/timeLine/timeLineComponent.js';
// import PDFExample from './components/timeLine/PdfDonwloader.js';

const window = Dimensions.get('window');
const Stack = createStackNavigator();
const Routes = () => {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="registerStack"
          component={RegisterStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="authStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="carStack"
          component={CarsStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="auth"
        component={Login}
        options={{
          headerShown: false,
          headerTitle: 'Sign In',
          headerTitleAlign: 'center',
          headerBackTitle: 'Back',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
        }}
      />
    </Stack.Navigator>
  );
}
function RegisterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="register"
        component={Registration}
        options={{
          headerShown: true,
          headerTitle: 'Sign Up',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function CarsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="carStack"
        component={carsOperation}
        options={{
          headerShown: true,
          headerTitle: 'Cars Operation',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
        }}
      />
       {/* <Stack.Screen
        name="pdf"
        component={PDFExample}
        options={{
          headerShown: true,
          headerTitle: 'Time Line',
          headerBackTitle: 'Back',
          headerTitleAlign: 'center',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
        }}
      /> */}
    </Stack.Navigator>
  );
}

export default Routes;
const styles = StyleSheet.create({
  menuIconDesign: {
    marginRight: 8,
    resizeMode: 'contain',
    width: window.width / 22,
    height: window.height / 28,
  },
  backIconDesign: {
    marginLeft: '8%',
    resizeMode: 'contain',
    width: window.width / 13,
    height: window.height / 25,
  },
});
