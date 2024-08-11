import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import {API_BASE_URL} from './Global';

const resetPassword = async email => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: email}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Reset password failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};
const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const ResetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    console.log('email:', email);
    setError('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }
    try {
      await resetPassword(email);
      navigation.navigate('ChangePasswordScreen', {email});
      console.log('Reset password email sent');
    } catch (error) {
      console.log('Reset password failed:', error);
      setError('Reset password failed: ' + error.message);
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={commonStyles.container}>
            <Image
              source={require('../images/login.png')} // Replace with the path to your image file
              style={styles.image}
            />
            <Text style={styles.text_title}>Reset Password</Text>
            <TextInput
              autoCapitalize="none"
              placeholderTextColor='#DDB1E4'
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <Pressable
              style={commonStyles.buttonContainer}
              onPress={handleResetPassword}>
              <Text style={commonStyles.buttonTitle}>Send Reset Link</Text>
            </Pressable>
            <Text style={styles.text_login}>
              Remembered your password?{' '}
              <Text style={styles.linkText} onPress={goToLogin}>
                Log In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAF4E5',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    marginBottom: 25,
    borderRadius: 20,
    borderColor: '#DDB1E4',
    borderWidth: 3,
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    fontFamily: 'Teachers-Regular',
    fontSize: 14,
    marginBottom: 10,
    alignSelf: 'center',
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
  text: {
    fontFamily: 'Teachers-Bold',
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontFamily: 'TildaSans-Regular',
    textDecorationLine: 'underline',
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 2,
  },
  text_login: {
    fontFamily: 'Teachers-Regular',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text_title: {
    fontFamily: 'Teachers-Bold',
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonTitle: {
    fontFamily: 'TildaSans-Regular',
    alignSelf: 'center',
    fontSize: 25,
    color: 'white',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default ResetPasswordScreen;
