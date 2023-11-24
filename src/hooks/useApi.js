import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import toast from 'react-hot-toast';

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const data = await loginUser(username, password);
      setData(data);
      toast.success('Login successful');
    } catch (error) {
      setIsError(true);
      toast.error(error?.response?.data?.message);
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isError, data, handleLogin };
};
