import { API_BASE_URL } from '../components/Global'; // assuming auth.js contains the token handling logic

const deleteUser = async (email) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Deletion failed');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

const cleanup = async () => {
  try {
    const testEmail = 'test@example.com'; // Replace with your actual test email
    const result = await deleteUser(testEmail);
    if (result) {
      console.log('Test email deleted successfully:', result);
    } else {
      console.log('Test email deletion failed.');
    }
  } catch (error) {
    console.error('Cleanup script failed:', error);
  }
};

// Export the cleanup function
module.exports = cleanup;
