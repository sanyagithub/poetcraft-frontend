import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './SplashScreen';
import Login from './Login';
import RegisterScreen from './RegisterScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Courses from './Courses';
import Modules from './Modules';
import QuestionFlow from './QuestionFlow';
import QuestionRenderer from './QuestionRenderer';
import CompletionScreen from './CompletionScreen';
import HomeScreen from './HomeScreen';
import AwardsScreen from './AwardsScreen';
import SyllableCheckerScreen from './SyllableCheckerScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainTabs from './MainTabs';
import ResetPasswordScreen from './ResetPasswordScreen';
import UpdatePasswordScreen from './UpdatePasswordScreen';

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
          name="UpdatePasswordScreen"
          component={UpdatePasswordScreen}
        />
        <Stack.Screen name={'MainTabs'} component={MainTabs} />
        {/*<Stack.Screen name="HomeScreen" component={HomeScreen} />*/}

        {/*<Stack.Screen name="Courses" component={Courses} />*/}
        {/*<Stack.Screen name="AwardsScreen" component={AwardsScreen} />*/}
        {/*<Stack.Screen name="Modules" component={Modules} />*/}
        {/*<Stack.Screen name="QuestionFlow" component={QuestionFlow} />*/}
        {/*<Stack.Screen name="QuestionRenderer" component={QuestionRenderer} />*/}
        {/*<Stack.Screen name="CompletionScreen" component={CompletionScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
