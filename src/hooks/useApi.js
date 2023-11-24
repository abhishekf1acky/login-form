import { useState } from 'react';
import { loginUser } from '../api/api';
import toast from 'react-hot-toast';

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const handleLogin = async (username, password) => {
    setIsLoading(true);
    setIsError(false);

    const loginPromise = new Promise((resolve, reject) => {
      loginUser(username, password)
        .then((data) => {
          setData(data);
          resolve(data);
        })
        .catch((error) => {
          setIsError(true);
          reject(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });

    toast.promise(loginPromise, {
      loading: 'Logging in...',
      success: 'Login successful',
      error: (err) => err?.response?.data?.message || 'Something went wrong...',
    });
  };

  return { isLoading, isError, data, handleLogin };
};
