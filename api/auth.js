import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { API_BASE_URL } from "../components/Global";

// Save token
export const saveToken = async token => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

// Retrieve token
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    return token;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};

export const checkAuthentication = async () => {
  const token = await getToken();
  if (!token) {
    return false;
  }

  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/validate-token`,
      {token: token},
    );
    return response.data.valid; // Assumes the backend responds with a JSON object containing a 'valid' boolean field
  } catch (e) {
    console.error('Token validation failed', e);
    return false;
  }
};

// Save user ID
export const saveEmail = async email => {
  try {
    await AsyncStorage.setItem('email', email);
  } catch (error) {
    console.error('Error saving user ID:', error);
  }
};

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
  } catch (e) {
    console.error('Failed to remove the auth token from the storage');
  }
};

// Retrieve user ID
export const getEmail = async () => {
  try {
    const email = await AsyncStorage.getItem('email');
    return email;
  } catch (error) {
    console.error('Error retrieving user ID:', error);
    return null;
  }
};
