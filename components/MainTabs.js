import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Courses from './Courses';
import AwardsScreen from './AwardsScreen';
import SyllableCheckerScreen from './SyllableCheckerScreen';
import React from 'react';
import HomeScreen from './HomeScreen';
import CourseStack from './CourseStack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import LogoutScreen from "./LogoutScreen";

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login'); // Assuming you redirect to a Login screen after logout
    } catch (error) {
      console.error("Logout error:", error);
      Alert.alert("Sign Out Failed", "Please try again.");
    }
  };

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
          } else if (route.name === 'Syllables') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Logout') {
            iconName = focused ? 'exit' : 'exit-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} accessibilityLabel={`${route.name} Tab`} />;
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
      <Tab.Screen name="Home" component={HomeScreen} options={{ testID: 'homeTabScreen', tabBarLabel: 'Dashboard' }} />
      <Tab.Screen name="Courses" component={CourseStack} options={{ tabBarLabel: 'Your Courses' }} />
      <Tab.Screen
        name="Syllables"
        component={SyllableCheckerScreen}
        options={{tabBarLabel: 'Syllable Stress'}}
      />
      <Tab.Screen
        name="Logout"
        component={LogoutScreen}
        options={{ tabBarLabel: 'Sign Out' }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // Prevent the default action (navigation)
            handleLogout();
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
