import axios from 'axios';
import {getToken} from './auth';
import { API_BASE_URL } from '../components/Global'; // assuming auth.js contains the token handling logic


// Helper function to get headers
const getHeaders = async () => {
  const token = await getToken();
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
};

// Fetch all courses
export const getCourses = async () => {
  try {
    const headers = await getHeaders();
    console.log('headers', headers);
    const response = await axios.get(`${API_BASE_URL}/api/courses`, {headers});
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

export const getAudio = async id => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(`${API_BASE_URL}/api/audio/${id}`, {
      headers,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching audio:', error);
    return [];
  }
};

export const getPoem = async id => {
  try {
    console.log('id', id);
    const headers = await getHeaders();
    const response = await axios.get(`${API_BASE_URL}/api/poems/${id}`, {
      headers,
    });
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching audio:', error);
    return [];
  }
};

export const getQuestions = async moduleId => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(
      `${API_BASE_URL}/api/questions/module/${moduleId}`,
      {headers},
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};
// Fetch user progress for courses
export const getUserProgress = async (email, courseId) => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(
      `${API_BASE_URL}/api/user-progress/user/${email}/course/${courseId}`,
      {
        headers,
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching user progress:', error);
    return {};
  }
};

export const updateUserProgress = async (email, courseId, moduleId) => {
  try {
    console.log(email, courseId, moduleId);
    const headers = await getHeaders();
    await axios.post(
      `${API_BASE_URL}/api/user-progress/update`,
      {
        email,
        courseId,
        moduleId,
      },
      {headers},
    );
  } catch (error) {
    console.error('Error updating progress:', error);
  }
};

// Fetch modules for a specific course
export const getModules = async courseId => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(
      `${API_BASE_URL}/api/modules/course/${courseId}`,
      {headers},
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching modules for course ${courseId}:`, error);
    return [];
  }
};

// Fetch user progress for modules
export const getModuleProgress = async (email, courseId, moduleId) => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(
      `${API_BASE_URL}/api/user-progress/user/${email}/course/${courseId}/module/${moduleId}`,
      {headers},
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching module progress for module ${moduleId}:`,
      error,
    );
    return {};
  }
};

export const getLastQuestionAnswered = async (email, moduleId) => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(
      `${API_BASE_URL}/api/user-progress/lastQuestionAnswered?email=${email}&moduleId=${moduleId}`,
      {headers},
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching module progress for module ${moduleId}:`,
      error,
    );
    return {};
  }
};

export const getTotalQuestions = async (email, moduleId) => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(
      `${API_BASE_URL}/api/user-progress/totalQuestions?email=${email}&moduleId=${moduleId}`,
      {headers},
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching module progress for module ${moduleId}:`,
      error,
    );
    return {};
  }
};

export const addAward = async (
  email,
  courseId,
  moduleId,
  awardTitle,
  awardImageUrl,
) => {
  try {
    const headers = await getHeaders();
    const response = await axios.post(
      `${API_BASE_URL}/api/awards`,
      {
        email,
        courseId,
        moduleId,
        awardTitle,
        awardImageUrl,
      },
      {headers},
    );
    return response.data;
  } catch (error) {
    console.error('Error adding award:', error);
    throw error;
  }
};

export const getAwardsByEmail = async email => {
  try {
    const headers = await getHeaders();
    const response = await axios.get(`/api/awards/user/${email}`, {headers});
    return response.data;
  } catch (error) {
    console.error('Error fetching awards:', error);
    throw error;
  }
};
