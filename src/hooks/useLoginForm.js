import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useForm } from '../hooks/useForm';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { login } from '../store/authSlice';

export const useLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, handleFormData, resetFormData] = useForm({
    username: 'kminchelle',
    password: '0lelplR',
    rememberMe: false,
  });
  const { isLoading, isError, data, handleLogin } = useApi();
  const [rememberMeData, setRememberMeData] = useLocalStorage('rememberMe', {});

  useEffect(() => {
    if (formData.rememberMe) {
      setRememberMeData(formData);
    }
  }, [formData, setRememberMeData]);

  const toggleIsVisible = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      await handleLogin(formData);
    } else {
      setError('Username and password are required');
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(login(data));
      resetFormData();
      navigate('/');
    }
  }, [data, dispatch, formData.username, navigate, resetFormData]);

  return {
    error,
    isVisible,
    formData,
    handleFormData,
    toggleIsVisible,
    handleSubmit,
    isLoading,
    isError,
  };
};
