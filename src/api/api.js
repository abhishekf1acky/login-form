import axios from 'axios';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API_URL + '/auth/login',
      {
        username,
        password,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
