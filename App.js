import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import RegisterScreen from './components/RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './components/MainTabs';
import ResetPasswordScreen from './components/ResetPasswordScreen';
import UpdatePasswordScreen from './components/UpdatePasswordScreen';
import ChangePasswordScreen from './components/ChangePasswordScreen';
import LogoutScreen from "./components/LogoutScreen";

const Stack = createStackNavigator();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Login: 'login',
      Register: 'register',
      ResetPassword: 'reset-password',
      UpdatePasswordScreen: 'reset-password?token=:token',
    },
  },
};
console.log('Linking Configuration:', JSON.stringify(linking, null, 2));
const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
        />
        <Stack.Screen
          name="UpdatePasswordScreen"
          component={UpdatePasswordScreen}
        />
        <Stack.Screen name={'MainTabs'} component={MainTabs} />
        <Stack.Screen name={'LogoutScreen'} component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
