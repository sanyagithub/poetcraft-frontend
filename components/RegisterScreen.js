// RegisterScreen.js
import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  Pressable,
  StyleSheet, Platform, KeyboardAvoidingView, ActivityIndicator, TouchableOpacity,
} from "react-native";
import commonStyles from '../styles/commonStyles';
import GradientBackground from './GradientBackground';
import {API_BASE_URL} from './Global';
const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
const validatePassword = password => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};


const registerUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const getPasswordStrength = (password) => {
    if (password.length >= 8 && validatePassword(password)) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (!validateEmail(email)) {
      setErrorEmail('Hmm, that doesn’t look like a valid email. Can you double-check?');
    } else {
      setErrorEmail('');
    }
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
    setPasswordTouched(true);
    if (!validatePassword(password)) {
      setErrorPassword('Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.');
    } else {
      setErrorPassword('');
    }
  };

  const handleConfirmPasswordBlur = () => {
    setConfirmPasswordTouched(true);
    if (confirmPassword !== password) {
      setErrorConfirmPassword('Passwords do not match.');
    } else {
      setErrorConfirmPassword('');
    }
  };

  const handleRegister = async () => {
    setError('');
    setIsLoading(true);
    if (!validateEmail(email) || !validatePassword(password) || password !== confirmPassword) {
      setError('Please ensure all fields are valid and passwords match.');
      setIsLoading(false);
      return;
    }

    try {
      await registerUser(email, password);
      setIsLoading(false);
      navigation.navigate('Login');
    } catch (error) {
      setIsLoading(false);
      setError(`Registration failed: ${error.message}`);
    }
  };

  const goToLogin = () => navigation.navigate('Login');

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
      <View style={commonStyles.container} testID="registerScreen">
        <Image
          source={require('../images/registration.png')} // Replace with the path to your image file
          style={styles.image}
        />
        <Text style={styles.text_title}>Get Started with PoetCraft</Text>
        <Text style={styles.text_login}>
          Already a member?{' '}
          <Text style={styles.linkText} onPress={goToLogin}>
            Log in here
          </Text>
        </Text>
        <TextInput
          testID="emailInput"
          style={styles.inputEmail}
          placeholder="Enter your email address"
          placeholderTextColor='#DDB1E4'
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onBlur={handleEmailBlur}
        />
        <View style={styles.inputContainer}>
          <TextInput
            testID="passwordInput"
            style={styles.input}
            placeholder="Create a strong password"
            placeholderTextColor="#DDB1E4"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            onBlur={() => handlePasswordChange(password)}
            textContentType="oneTimeCode"
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.showHideButton}>
            <Text style={styles.showHideText}>
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          testID="confirmPasswordInput"
          style={styles.inputEmail}
          placeholder="Re-enter your password"
          placeholderTextColor='#DDB1E4'
          autoCapitalize="none"
         // secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onBlur={handleConfirmPasswordBlur}
          textContentType="oneTimeCode"
        />
        {passwordTouched && (<Text style={styles.passwordStrengthText}>
          Password Strength: {getPasswordStrength(password)}
        </Text>)}
        {emailTouched && !validateEmail(email) && <Text style={styles.errorText}>{errorEmail}</Text>}
        {passwordTouched && !validatePassword(password) && (
          <Text style={styles.errorText}>{errorPassword}</Text>
        )}
        {confirmPasswordTouched && confirmPassword !== password && (
          <Text style={styles.errorText}>{errorConfirmPassword}</Text>
        )}
        {error && <Text style={styles.errorText}>{error}</Text>}
        {isLoading ? <ActivityIndicator testID="loadingIndicator" size="large" color="#DDB1E4" /> : (
          <Pressable testID="registerButton" style={commonStyles.buttonContainer} onPress={handleRegister}>
            <Text style={commonStyles.buttonTitle}>Join PoetCraft</Text>
          </Pressable>
        )}

      </View>
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
  welcomeMessage: {
    fontFamily: 'Teachers-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordStrengthText: {
    fontSize: 14,
    color: '#9AAB63',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    position: 'relative',
    borderColor: '#DDB1E4',
    borderWidth: 3,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingRight: 60, // To make space for the "Show/Hide" button
  },
  showHideButton: {
    position: 'absolute',
    right: 20,
  },
  showHideText: {
    color: '#DDB1E4',
    fontSize: 14,
  },
  passwordInput: {
    flex: 1,
    fontSize: 18,
  },
  inputEmail: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 20,
    borderColor: '#DDB1E4',
    borderWidth: 3,
    fontSize: 18,
    // marginLeft: 25,
    //  marginRight: 25,
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
    fontFamily: 'Teachers-Regular',
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 10,
  },
  linkText: {
    color: 'blue',
    fontFamily: 'Teachers-Regular',
    textDecorationLine: 'underline',
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 2,
  },
  text_login: {
    fontFamily: 'Teachers-Regular',
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 20,
  },
  text_title: {
    fontFamily: 'Teachers-Bold',
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 2,
  },
  buttonTitle: {
    fontFamily: 'Teachers-Regular',
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
