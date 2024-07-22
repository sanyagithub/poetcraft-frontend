import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import {API_BASE_URL} from './Global';

const updatePassword = async (token, newPassword) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/update-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token, newPassword}),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Password update failed');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

const UpdatePasswordScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const token = route.params?.token;

  useEffect(() => {
    console.log('Token:', token); // Add logging to debug
  }, [token]);

  const handleUpdatePassword = async () => {
    try {
      await updatePassword(token, newPassword);
      setMessage('Password updated successfully');
      navigation.navigate('Login');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Text style={styles.text_title}>Reset Password</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="New Password"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Pressable
          style={styles.buttonContainer}
          onPress={handleUpdatePassword}>
          <Text style={styles.buttonTitle}>Update Password</Text>
        </Pressable>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF4E5',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    padding: 10,
    marginBottom: 25,
    borderRadius: 20,
    borderColor: '#F5D867',
    borderWidth: 3,
    fontSize: 18,
    marginLeft: 25,
    marginRight: 25,
  },
  buttonContainer: {
    marginBottom: 25,
    marginTop: 10,
    marginRight: 25,
    backgroundColor: '#9AAB63',
    borderRadius: 10,
    padding: 5,
    alignContent: 'center',
    marginLeft: 25,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
  text_title: {
    fontFamily: 'Teachers-Bold',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 2,
  },
  buttonTitle: {
    fontFamily: 'TildaSans-Regular',
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
  },
  message: {
    fontFamily: 'TildaSans-Regular',
    alignSelf: 'center',
    fontSize: 20,
    color: 'red',
  },
});

export default UpdatePasswordScreen;
