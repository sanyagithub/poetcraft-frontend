import React, { useCallback } from 'react';
import { Alert, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      let isCancelled = false; // Reset on focus

      const confirmLogout = () => {
        Alert.alert(
          "Logout",
          "Are you sure you want to logout?",
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => {
                isCancelled = true; // Indicate that the user cancelled
                navigation.navigate('Home'); // Navigate to Home or any other tab
              },
            },
            {
              text: "Logout",
              onPress: async () => {
                try {
                  // Clear the token from AsyncStorage
                  await AsyncStorage.removeItem('userToken');
                  if (!isCancelled) {
                    // Only navigate if the user didn't cancel
                    navigation.navigate('Login'); // Navigate to the login screen
                  }
                } catch (error) {
                  console.error('Error clearing token:', error);
                }
              }
            }
          ],
          { cancelable: true }
        );
      };

      confirmLogout();

      // Cleanup function to reset state
      return () => {
        isCancelled = true;
      };
    }, [navigation])
  );

  return <View />; // Render an empty view to avoid any blank screens
};

export default LogoutScreen;
