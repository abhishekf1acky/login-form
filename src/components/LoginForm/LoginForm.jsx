import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/useApi';
import { useForm } from '../../hooks/useForm';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { login } from '../../store/authSlice';
import { Input, Button, Checkbox, Loader, Error } from '../index';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [formData, handleFormData, resetFormData] = useForm({
    username: 'kminchelle',
    password: '0lelplR',
    rememberMe: false,
  });
  const { isLoading, isError, data, handleLogin: loginUser } = useApi();
  const [rememberMeData, setRememberMeData] = useLocalStorage('rememberMe', {});
  console.log(rememberMeData);

  useEffect(() => {
    if (formData.rememberMe) {
      setRememberMeData(formData);
    }
  });

  const toggleIsVisible = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      await loginUser(formData.username, formData.password);
    } else {
      setError('Username and password are required');
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(login(formData.username));
      resetFormData();
      navigate('/');
    }
  }, [data, dispatch, formData.username, navigate, resetFormData]);

  if (isLoading) return <Loader />;

  if (isError)
    return <Error message='There was an error logging in. Please try again.' />;

  return (
    <>
      {error && <div className='error'>{error}</div>}

      <form className='space-y-6 flex-1 w-full' onSubmit={handleSubmit}>
        <h1 className='flex-1 text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
          LOGIN
        </h1>
        <Input
          name='username'
          label='Username'
          type='text'
          value={formData.username}
          onChange={handleFormData}
        />

        <Input
          name='password'
          label='Password'
          type={isVisible ? 'text' : 'password'}
          value={formData.password}
          onChange={handleFormData}
          toggleIsVisible={toggleIsVisible}
          isVisible={isVisible}
        />

        <Checkbox
          name='rememberMe'
          checked={formData.rememberMe}
          onChange={() =>
            handleFormData({
              target: { name: 'rememberMe', value: !formData.rememberMe },
            })
          }
          label='Remember me'
        />

        <Button
          text='Sign in'
          className='w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700'
        />
      </form>
    </>
  );
};
export default LoginForm;
