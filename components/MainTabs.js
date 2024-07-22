import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Courses from './Courses';
import AwardsScreen from './AwardsScreen';
import SyllableCheckerScreen from './SyllableCheckerScreen';
import React from 'react';
import HomeScreen from './HomeScreen';
import CourseStack from './CourseStack';

// MainTabs.js

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Modules') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Awards') {
            iconName = focused ? 'trophy' : 'trophy-outline';
          } else if (route.name === 'SyllableChecker') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: '#FAF4E5', // Custom background color for the tab bar
        },
        tabBarInactiveTintColor: '#9AAB63',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold', // You can customize the font weight if needed
        },
        tabBarActiveTintColor: '#FE502B',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Courses" component={CourseStack} />
      {/*<Tab.Screen name="Awards" component={AwardsScreen} />*/}
      <Tab.Screen
        name="SyllableChecker"
        component={SyllableCheckerScreen}
        options={{tabBarLabel: 'Identify Syllables'}}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
