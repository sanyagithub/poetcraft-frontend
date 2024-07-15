// RegisterScreen.js
import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import commonStyles from './commonStyles';
import GradientBackground from './GradientBackground';
const registerUser = async (email, password) => {
  try {
    const response = await fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      navigation.navigate('Login');
      console.log('Registration successful');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <GradientBackground>
      <View style={commonStyles.container}>
        <Image
          source={require('./images/registration.png')} // Replace with the path to your image file
          style={styles.image}
        />
        <Text style={styles.text_title}>Create New Account</Text>
        <Text style={styles.text_login}>
          Already Registered?{' '}
          <Text style={styles.linkText} onPress={goToLogin}>
            Log In
          </Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.buttonContainer} onPress={handleRegister}>
          <Text style={styles.buttonTitle}>Sign Up</Text>
        </Pressable>
      </View>
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
  text: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontFamily: 'TildaSans-Regular',
    textDecorationLine: 'underline',
    fontSize: 10,
    alignSelf: 'center',
    marginBottom: 2,
  },
  text_login: {
    fontFamily: 'TildaSans-Regular',
    fontSize: 12,
    alignSelf: 'center',
    marginBottom: 20,
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
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});

export default RegisterScreen;
