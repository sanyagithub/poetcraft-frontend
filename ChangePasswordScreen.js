import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import GradientBackground from './GradientBackground';
import commonStyles from './commonStyles';

const validatePassword = password => {
  return password.length >= 8; // Example validation rule: password must be at least 8 characters long
};

const changePassword = async (email, currentPassword, newPassword) => {
  try {
    const response = await fetch(
      'http://localhost:8080/api/auth/verifyAndResetPassword?email=' +
        email +
        '&tempPassword=' +
        currentPassword +
        '&newPassword=' +
        newPassword,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log(response);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Password change failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const ChangePasswordScreen = ({navigation, route}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
    }
  }, [route.params?.email]);

  const handleChangePassword = async () => {
    setError(''); // Clear any existing errors
    if (!validatePassword(newPassword)) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    try {
      await changePassword(email, currentPassword, newPassword);
      navigation.replace('Login');
    } catch (error) {
      setError('Password change failed: ' + error.message);
    }
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={commonStyles.container}>
            <Image
              source={require('./images/login.png')}
              style={styles.image}
            />
            <Text style={styles.textTitle}>Change Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Temporary Password"
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm New Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <Pressable
              style={commonStyles.buttonContainer}
              onPress={handleChangePassword}>
              <Text style={commonStyles.buttonTitle}>Change Password</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textTitle: {
    fontFamily: 'Teachers-Bold',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    paddingLeft: 5,
    borderRadius: 10,
    borderColor: '#DDB1E4',
    borderWidth: 3,
    fontSize: 18,
    marginVertical: 10,
    paddingVertical: 10,
  },
  buttonContainer: {
    marginBottom: 15,
    backgroundColor: '#9AAB63',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  buttonTitle: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 18,
    color: 'white',
  },
  errorText: {
    color: 'red',
    fontFamily: 'Teachers-Regular',
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'center',
  },
});

export default ChangePasswordScreen;
